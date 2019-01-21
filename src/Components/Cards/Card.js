import React, { Component } from "react";
import Button from "./Button";
import Tracker from "./Tracker";
import "./Card.css";

const Card = props => {
  let { name, price, marketCap, deleteFn, onChangeFn, onClickFn } = props;

  return (
    <div className="border">
      <div className="card">
        <div className="coin-info">
          <h2>{name}</h2>
          <input className="input" onChange={e => onChangeFn(e)} />
          <button onClick={() => onClickFn(name)}>Update</button>
          <span>Price: ${price}</span>
          <span>Market Cap: ${marketCap}</span>
          <button className="remove-btn" onClick={() => deleteFn(name)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
