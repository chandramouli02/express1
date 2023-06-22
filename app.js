let express = require("express");

let app = express();

//get api..
module.exports = app.get("/", (req, res) => {
  res.send("Express JS");
});

app.listen(3000);
