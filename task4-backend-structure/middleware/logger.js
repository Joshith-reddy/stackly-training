// Logger middleware
const logger = (req, res, next) => {
  console.log(`Request: ${req.method} ${req.originalUrl}`);

  // Pass control to the next middleware/route handler
  next();
};

// Export middleware
module.exports = logger;