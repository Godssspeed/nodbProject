import React from "react";
import "./Header.css";

const Header = props => {
  let { coinNameFn, addCoinFn, newCoinObj, displayFn } = props;
  return (
    <div className="header">
      <h1>
        Crypto Coin <span onClick={() => displayFn()}>Cap</span>
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
