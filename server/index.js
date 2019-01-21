const express = require("express");
const app = express();
const { json } = require("body-parser");
// const axios
const cors = require("cors");
const {
  readAllCoins,
  readTopTwenty,
  deleteCoins,
  editCoins,
  addCoins
} = require("./controllers/controller");
const port = 3001;

app.use(json());
app.use(cors());
// app.use(express.static(__dirname + "/../public/build"));

// const coins = [];

// app.get("/api/coins", read);

app.get("/api/coins", readTopTwenty);

app.delete("/api/coins/:symbol", deleteCoins);
// app.get("/api/coins/all", readAllCoins);
app.put("/api/coins/:symbol", editCoins);

app.post("/api/coins", addCoins);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
