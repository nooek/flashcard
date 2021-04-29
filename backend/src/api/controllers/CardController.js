const { connection, config } = require("../../config/dbConfig");
const mysql = require("mysql2/promise");

const cardAlreadyExists = async (back, front, id) => {
  const query = `SELECT * FROM card WHERE front = '${front}' AND back = '${back}' OR cardID = '${id}' `;

  const conn = await mysql.createConnection(config)
  let [rows] = await conn.execute(query);

  conn.end();
  return rows;
};

module.exports = {
  createCard: async (req, res) => {
    const cardExist = await cardAlreadyExists(
      {back: req.body.back},
      {front: req.body.front}
    );
    if (cardExist.length > 0) 
    {
      res.status(200).send({ message: "This card already exists!" });
    } 
    else 
    {
      const addCardToDeckQuery = `INSERT INTO card VALUES
      ("${req.body.front}", "${req.body.back}", "", "", DEFAULT, "${req.body.id}")`;

      connection.query(addCardToDeckQuery, (error, results) => {
        if (error) 
        {
          res.status(400).send({ error: error });
        }
        res.status(200).send(results);
      });

      const incrementDeckCardNumberQuery = `UPDATE deck 
      SET num_cards = ${req.body.numCards}
      WHERE deckID = ${req.body.id}`;

      connection.query(incrementDeckCardNumberQuery)
    }
  },

  searchCard: async (req, res) => {
    const cardExist = await cardAlreadyExists({ id: req.params.id });
    if (cardExist.length <= 0) 
    {
      res.send({ message: "This card don't exist" });
    }
    else 
    {
      res.send(cardExist);
    }
  },

  getCardByDeckId: (req, res) => {
    const query = `SELECT * FROM card
    WHERE deckID = ${req.params.id}`;
    connection.query(query, (error, results) => {
      if (error){
        res.status(400).send({error: error})
      }
      if (results.length <= 0)
      {
        res.status(200).send({message: "This deck don't have cards"})
      }
      else{
        res.status(200).send(results)
      }
    })
  },

  deleteCard: (req, res) => {
    const query = `DELETE FROM card
    WHERE cardId = ${req.body.cardId}`
    connection.query(query, (error) => {
      if (error){
        res.status(400).send({error: error})
      }else{
        res.status(200).send("The card was deleted sucessfully")
      }
    })
    const decrementDeckCardNumberQuery = `UPDATE deck 
      SET num_cards = ${req.body.numCards}
      WHERE deckID = ${req.body.deckId}`;
    connection.query(decrementDeckCardNumberQuery)
  }
};
