const mysql = require("mysql2")

const config = {
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "",
  database: "anki",
}

const connection = mysql.createConnection(config);

function execSQLQuery(sqlQry, res) {
  const connection = mysql.createConnection(config);

  connection.query(sqlQry, function (error, results, fields) {
    if (error) {console.log(error) 
      res.status(400).json(error)}
    else res.json(results);
    connection.end();
  });
}

module.exports = {
  execSQLQuery,
  connection,
  config
};
