const express = require("express");
const app = express();

app.post("/addassignment", (req, res) => {
  res.send("<html><body>INSIDE TEACHER ADD ASSIGNMENT API...</body>");
});

app.get("/searchstudent", (req, res) => {
  res.send("<html><body>INSIDE TEACHER SEARCH STUDENT API...</body>");
});

app.delete("/removeassignment", (req, res) => {
  res.send("<html><body>INSIDE TEACHER REMOVE ASSIGNMENT API...</body>");
});

app.listen(5001, () => console.log("EXPRESS Server Started at Port No: 5001"));
