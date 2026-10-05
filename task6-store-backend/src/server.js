require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/api/status", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "Store API is running"
    });
});

app.use("/api/users", userRoutes);

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
};

startServer();