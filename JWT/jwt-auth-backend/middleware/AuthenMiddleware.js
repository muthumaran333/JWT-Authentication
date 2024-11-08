const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // Check if token exists
  if (token) {
    jwt.verify(token, 'muthumarana@$##@@$%^&$#@#$@%&^&**&^%&^', (err, decodedToken) => {
      if (err) {
        console.error("JWT verification failed:", err.message);
        return res.status(401).json({ error: "Unauthorized" });
      } else {
        // Token is valid, set user ID in request object
        req.userId = decodedToken.id;
        next();
      }
    });
  } else {
    return res.status(401).json({ error: "Unauthorized, no token provided" });
  }
};

module.exports = { requireAuth };
