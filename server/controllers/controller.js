const axios = require("axios");
let coins = [];
const trackCoins = [];

module.exports = {
  //   read: (req, res) => {
  //     axios.get("https://chasing-coins.com/api/v1/coins").then(res => {
  //       console.log(res);
  //       res.status(200).json(coins);
  //     });
  //   },

  readTopTwenty: (req, res) => {
    axios
      .get("https://chasing-coins.com/api/v1/top-coins/20")
      .then(response => {
        let coinsObj = response.data;
        // console.log(coinsObj);
        coins = Object.keys(coinsObj).map(i => coinsObj[i]);
        console.log(coins);
        res.status(200).json(coins);
      });
  },

  deleteCoins: (req, res) => {
    console.log(req.params.symbol);
    // console.log(coins);
    let symbol = req.params.symbol;
    let index = coins.findIndex(coins => coins.symbol === symbol);
    console.log(index);
    coins.splice(index, 1);
    res.json(coins);
  },

  editCoins: (req, res) => {
    let symbol = req.params.symbol;
    let index = coins.findIndex(coins => coins.symbol === symbol);
    coins[index].symbol = req.body.symbol;
    res.json(coins);
  },

  addCoins: (req, res) => {
    console.log(req.body);
    coins.unshift(req.body);
    res.json(coins);
  }

  // //   readAllCoins: (req, res) => {
  //     axios.get("https://chasing-coins.com/api/v1/coins").then(response => {
  //       let coinsObj = response.data;
  //       console.log(coinsObj);
  //       coins.push(Object.keys(coinsObj).map(i => coinsObj[i]));
  //       console.log(response.data);
  //       res.status(200).json(coins);
  //     });
  //   }
};
