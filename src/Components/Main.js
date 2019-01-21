import React, { Component } from "react";
import axios from "axios";
import Card from "./Cards/Card";
import Header from "./Header";
import "./Main.css";
// import "./Card.css";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      topTwenty: [],
      topFifty: [],
      display: false,
      userInput: "",
      coinName: "",
      coinPrice: "",
      coinCap: ""
    };
  }

  //   removeExtraArray(){
  //     const topTwentyFiltered = this.state.topTwenty.map((e, i) => {
  //         console.log(e[0]);
  //         return e.map((f, j) => {
  //             this.setState({topTwenty: topTwentyFiltered})
  //         }
  //   }

  componentDidMount() {
    axios.get("/api/coins").then(response => {
      console.log(response.data);
      this.setState({ topTwenty: response.data });
    });

    this.handleDelete = symbol => {
      console.log(symbol);
      axios.delete(`/api/coins/${symbol}`).then(response => {
        console.log(response);

        this.setState({ topTwenty: response.data });
        // let deleteCoin = this.state.topTwenty;
      });
    };

    this.handleChange = e => {
      this.setState({ userInput: e.target.value });
    };

    this.handleClick = symbol => {
      console.log(symbol);
      axios
        .put(`/api/coins/${symbol}`, { symbol: this.state.userInput })
        .then(response => {
          console.log(response.data);
          this.setState({ topTwenty: response.data });
        });
    };

    // Add New Coin Section

    this.handleCoinName = a => {
      let randomPrice = Math.floor(Math.random() * 25000 + 1);
      let randomCap = Math.floor(Math.random() * 9999999999 + 250000);

      console.log(randomPrice, randomCap);
      this.setState({ coinPrice: randomPrice, coinCap: randomCap });
      this.setState({ coinName: a.target.value });
    };

    this.handleAddCoin = () => {
      const { coinName, coinPrice, coinCap } = this.state;
      axios
        .post(`/api/coins/`, {
          symbol: coinName,
          price: coinPrice,
          cap: coinCap
        })
        .then(response => {
          console.log(response);
          this.setState({ topTwenty: response.data });
        });
    };
  }

  render() {
    const { coinName, coinPrice, coinCap } = this.state;
    const key = {
      symbol: coinName,
      price: coinPrice,
      cap: coinCap
    };
    console.log(this.state.coinName, this.state.coinPrice, this.state.coinCap);
    const dataDisplay = this.state.topTwenty.map((e, i) => {
      // console.log(e);
      return (
        <Card
          key={i}
          id={e.id}
          name={e.symbol}
          price={e.price}
          marketCap={e.cap}
          deleteFn={this.handleDelete}
          onChangeFn={this.handleChange}
          onClickFn={this.handleClick}
        />
      );
    });
    console.log(this.state.userInput);
    return (
      <div className="body">
        <Header
          coinNameFn={this.handleCoinName}
          coinPriceFn={this.handleCoinPrice}
          coinCapFn={this.handleCoinCap}
          addCoinFn={this.handleAddCoin}
          newCoinObj={key}
        />
        <div className="display">{dataDisplay}</div>
      </div>
    );
  }
}

export default Main;
