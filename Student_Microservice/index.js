const express = require("express");
const app = express();

// STUDENT LOGIN API (POST)
app.post("/studentlogin", (req, res) => {
  res.send("<html><body>INSIDE STUDENT LOGIN API...</body></html>");
});

// VIEW ASSIGNMENT API (GET)
app.get("/viewassignment", (req, res) => {
  res.send("<html><body>INSIDE STUDENT VIEW ASSIGNMENT API...</body></html>");
});

// UPDATE PROFILE API (PUT)
app.put("/studentupdateprofile", (req, res) => {
  res.send("<html><body>INSIDE STUDENT UPDATE PROFILE API.</body></html>");
});

// START THE EXPRESS SERVER ON PORT 5000
app.listen(5000, () => console.log("EXPRESS Server Started at Port No: 5000"));
