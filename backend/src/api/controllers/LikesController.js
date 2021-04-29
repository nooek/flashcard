const { connection, config } = require("../../config/dbConfig");
const mysql = require("mysql2/promise");

const increaseDeckLikes = async (totalLikes, deckId) => {
  const query = `UPDATE deck SET num_likes = ${
    totalLikes + 1
  } WHERE deckID = ${deckId}`;

  const conn = await mysql.createConnection(config);
  await conn.execute(query);
};

const decreaseDeckLikes = async (totalLikes, deckId) => {
  const query = `UPDATE deck SET num_likes = ${
    totalLikes - 1
  } WHERE deckID = ${deckId}`;

  const conn = await mysql.createConnection(config);
  await conn.execute(query);
};

module.exports = {
  addLike: async (req, res) => {
    await increaseDeckLikes(req.body.totalLikes, req.body.deck);
    const query = `
        INSERT INTO deck_likes (likeID, deckLiked, user) 
        VALUES (DEFAULT, '${req.body.deck}', '${req.body.email}')
      `;
    connection.query(query, (error, results) => {
      if (error) {
        console.log(error)
        res.status(400).send({ error: error });
      }
      console.log(results)
      res.status(200).send(results);
    });
  },

  removeLike: async (req, res) => {
    await decreaseDeckLikes(req.body.totalLikes, req.body.deck);
    const query = `DELETE FROM deck_likes WHERE deckLiked = '${req.body.deck}'`;
    connection.query(query, (error, results) => {
      if (error) {
        res.status(400).send({ error: error });
      }
      res.status(200).send(results);
    });
  },

  searchLikes: (req, res) => {
    const query = `SELECT deck.deckID, deck.deck_name, deck.deck_owner, deck.deck_description,
    deck.num_likes FROM deck_likes
    JOIN deck 
    ON deck_likes.deckLiked = deck.deckID AND deck_likes.user = '${req.params.email}'`;
    connection.query(query, (error, results) => {
      if (error) {
        res.status(400).send({ error: error });
      }
      const likes = [];
      results.map((each) => {
        likes.push(each.deckID);
      });
      res.status(200).json({ Likes: likes, Decks: results });
    });
  },

  getLikes: (req, res) => {
    if (req.params.useremail) {
      const query = `SELECT deck.deckID, deck.deck_name, deck.deck_owner, deck.deck_description FROM deck_likes
        JOIN deck 
        ON deck_likes.deckLiked = deck.deckID AND deck_likes.user = '${req.params.useremail}'`;
      connection.query(query, (error, results) => {
        if (error) {
          res.status(400).send({ error: error });
        }
        if (results.length === 0) {
          res.status(200).send({ message: "You don't have any likes" });
        } else {
          res.status(200).send(results);
        }
      });
    } else {
      res.status(400).send({ message: "Please provide the user" });
    }
  },
};
