import express from "express";
const app = express()

// Run app on free port
app.listen(8800, () => {
    console.log("Connected to backend");
})