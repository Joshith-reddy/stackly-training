
// Import Mongoose
const mongoose = require("mongoose");

// Function responsible for connecting to MongoDB
const connectDB = async () => {
  try {
    // Connect using the MongoDB connection string
    const connection = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);

    // Stop the application if the database cannot be connected
    process.exit(1);
  }
};

// Export the connection function
module.exports = connectDB;