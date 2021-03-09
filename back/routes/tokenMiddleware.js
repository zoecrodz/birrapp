//el middleware validará el Token enviado por usuario a server
const jwt = require("jsonwebtoken");



const checkJWT = (req, res, next) => {
 
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.status(401).send("no puedes entrar a la ruta");
  
  jwt.verify(token, "P5", (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;                  //es el payload: email y password
    next();
  });
};

module.exports = checkJWT;