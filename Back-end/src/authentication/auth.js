const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
dotenv.config();

module.exports = function (req, res, next) {
  try {
    // Check if Authorization header is present and has bearer token
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      // Extract token from Authorization header
      const token = req.headers.authorization.split(" ")[1];
      
      // Verify token using the TOKEN_KEY
      jwt.verify(token, process.env.TOKEN_KEY, (err, user) => {
        if (err) {
          // If token verification fails, send 403 Forbidden error
          console.error("JWT verification failed:", err);
          return res.status(403).json({ message: "Forbidden" });
        }
        
        // Attach user data to request object for further processing
        req.user = user;
        next();
      });
    } else {
      // If Authorization header is missing or doesn't have bearer token, send 401 Unauthorized error
      return res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    // If any unexpected error occurs, send 500 Internal Server Error
    console.error("Authentication error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
