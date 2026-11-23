import express from "express";

// Create express application
const app = express();

const port = 5000;

// Create a basic route
app.get("/",(req,res) => {
    res.send("welcome to Node.js API server");
});

// Start server
app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});