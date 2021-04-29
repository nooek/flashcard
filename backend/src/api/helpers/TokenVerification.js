const JWT = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("access-token");
  if (!token) {
    res.status(401).send("User not authenticated");
  } else {
    JWT.verify(token, process.env.TOKEN_KEY, (err, decode) => {
      if (err) {
        console.log(err);
      } else {
        req.authenticated = true;
        res.json({ data: [decode.user] });
      }
    });
    return next();
  }
};

module.exports = auth;
