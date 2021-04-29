const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const { connection } = require("../../config/dbConfig");

module.exports = {
  login: async (req, res) => {
    query = "SELECT * FROM user WHERE user_email = ?";
    connection.query(query, [req.body.email], async (error, results) => {
      if (error) {
        res.send({ error: error });
      }
      if (results.length > 0){
        const user = results;
        const password = results[0].user_password;
        const passwordsMatch = await bcrypt.compare(
          req.body.password,
          password
        );
        if (passwordsMatch) {
          const userData = {
            user_email: user[0].user_email,
            user_name: user[0].user_name,
            user_sex: user[0].user_sex,
            user_nacionality: user[0].user_nacionality,
            user_real_name: user[0].user_real_name,
            user_date: user[0].user_date,
          }
          const token = JWT.sign({ user: userData }, process.env.TOKEN_KEY);
          req.header("access-token", token, {
            maxAge: 60 * 60 * 24 * 30,
          });
          res.status(200).json({token: token, result: results});
        }else{
          res.status(200).send("Email Or Password Invalid");
        }
    }else{
      res.status(200).send({message: "Email or Password Invalid"})
    }

    });
  },

  register: async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const query = `INSERT INTO user (user_name, user_email, user_password, user_date) 
      VALUES ("${req.body.username}", "${req.body.email}", '${hashedPassword}', "${req.body.age}")`;

    connection.query(query, (error, results) => {
      if (error) {
        res.status(400).send({ error: error });
      }
      res.status(200).send(results);
    });
  },

  getAllUsers: (res) => {
    const query = "SELECT * FROM user";
    connection.query(query, (error, results) => {
      if (error) {
        res.status(400).send({ error: error });
      }
      res.status(200).send(results);
    });
  },

  getUser:  () => {},

  findUserById: (req, res) => {
    const query = `SELECT * FROM user WHERE userID = ${req.body.id}`;
    connection.query(query, (error, results) => {
      if (error) {
        res.status(400).send({ error: error });
      }
      if (results.length <= 0) {
        res.status(200).send({ message: "This user does not exist " });
      } else {
        res.status(200).send(results);
      }
    });
  },
  updateUser: (req, res) => {
    const query = `UPDATE user 
      SET user_sex = '${req.body.sex}', user_real_name = '${req.body.realname}', user_nacionality = '${req.body.nacionality}' 
      WHERE userID = ${req.body.id}`;
    connection.query(query, (error, results) => {
      if (error) {
        res.status(400).send({ error: error });
      }
      res.status(200).send(results);
    });
  },
};
