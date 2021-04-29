const { connection } = require("../../config/dbConfig");

module.exports = {
  createDeck: async (req, res) => {
    const query = `INSERT INTO deck (deck_name, deck_owner, deck_description)
        VALUES ("${req.body.name}", "${req.body.owner}", "${req.body.description}")`;
    connection.query(query, (error, results) => {
      if (error) {
        res.status(400).send({ error: error });
      }
      res.status(200).send(results);
    });
  },

  deleteDeck: (req, res) => {
    const query = `DELETE FROM deck WHERE deckID = ${req.body.deckId}`
    connection.query(query, (error, results) => {
      if (error){
        res.status(400).json({error: error})
      }
      res.status(200).send(results)
    })
  },

  getAllDecks: (res) => {
    connection.query("SELECT * FROM deck", (error, results) => {
      if (error) {
        res.status(400).send({ error: error });
      }
      res.status(200).send(results);
    });
  },

  getDecksWithEmail: (req, res) => {
    if (req.params.email !== "") {
      const query = `SELECT * FROM deck WHERE deck_owner = "${req.params.email}"`;
      connection.query(query, (error, results) => {
        if (error) {
          res.status(400).send({ error: error });
        }
        if (results.length === 0) {
          res.status(200).send({ message: "This user don't have decks" });
        } else {
          res.status(200).send(results);
        }
      });
    } else {
      res.status(400).send({ message: "Please provide the user" });
    }
  },

  getLikes: (req, res) => {
    if (req.body.user) {
      const query = `SELECT deck.deckID, deck.deck_name, deck.deck_owner, deck.deck_description FROM deck_likes
            JOIN deck 
            ON likes.deckLiked = deck.deckID AND likes.user = '${req.body.user}'`;
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

  getDecksBySearch: (req, res) => {
    const query = `SELECT * FROM deck WHERE deck_name LIKE ? 
        OR deck_description LIKE ? 
        AND num_cards != 0 AND deck_owner  != ?
        `;

    connection.query(
      query,
      ["%" + req.body.key + "%", "%" + req.body.key + "%", req.body.userEmail],
      (error, results) => {
        if (error) {
          res.status(400).send({ error: error });
        }
        res.status(200).send(results);
      }
    );
  },

  getDecksById: (req, res) => {
    if (req.params.deckid) {
      const query = `SELECT * FROM deck
        WHERE deckID = ${req.params.deckid}`;

      connection.query(query, (error, results) => {
        if (error) {
          res.status(400).send({ error: error });
        }
        if (results.length === 0) {
          res.status(200).send({ message: "This deck doesn't exist" });
        } else {
          res.status(200).send(results);
        }
      });
    } else {
      res.status(400).send({ message: "Please provide the deck id" });
    }
  },

  getTopTwoLikes: (req, res) => {
    const query = `SELECT * FROM deck GROUP BY num_likes DESC LIMIT 2`;
    connection.query(query, (error, results) => {
      if (error) {
        res.status(400).send({ error: error });
      }
      res.status(200).send(results);
    });
  },

  getDecksOrderedByLikes: (req, res) => {
    const query = `SELECT * FROM deck GROUP BY num_likes DESC`;
    connection.query(query, (error, results) => {
      if (error) {
        res.status(400).send({ error: error });
      }
      res.status(200).send(results);
    });
  },

  updateDeck: (req, res) => {
    const query = `UPDATE deck
        SET deck_name = '${req.body.newDeckName}', deck_description = '${req.body.newDeckDescription}'
        WHERE deckID = '${req.body.deckId}'
        `;
    connection.query(query, (error, results) => {
      if (error) {
        res.status(400).send({ error: error });
      }
      res.status(200).send(results);
    });
  },

  getDecksFiltered: (req, res) => {
    if (req.params.userEmail) {
      const query = `SELECT * FROM deck  
      WHERE num_cards != 0 AND deck_owner != '${req.params.userEmail}'`;
      connection.query(query, (error, results) => {
        if (error) {
          res.status(400).send(error);
        }
        if (results.length > 0) {
          res.status(200).send(results);
        } else {
          res.status(200).send({ message: "There is no decks" });
        }
      });
    }
  },
};