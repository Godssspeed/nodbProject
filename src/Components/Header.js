import React from "react";
import "./Header.css";

const Header = props => {
  console.log(newCoinObj);
  let { coinNameFn, coinPriceFn, coinCapFn, addCoinFn, newCoinObj } = props;
  return (
    <div className="header">
      <h1>
        Crypto Coin <span>Cap</span>
      </h1>
      {/* <span>by Will Young</span> */}
      {/* <span>Add New Coin</span> */}
      <div className="addCoin">
        <input className="input" type="text" onChange={a => coinNameFn(a)} />
        <button onClick={() => addCoinFn(newCoinObj)}>Add New Coin</button>
      </div>
    </div>
  );
};

export default Header;
