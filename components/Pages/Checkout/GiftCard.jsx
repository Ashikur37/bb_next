import React from "react";
import { useState } from "react";

function GiftCard({ img, name, id, price, giftHandler }) {
  const tapHandler = () => {
    giftHandler(id, name, price, img);
  };
  return (
    <div
      className="gift__card"
      
      style={{
        cursor: "pointer",
        display: "flex",
        boxShadow: "0px 2px 5px 1px rgba(0,0,0,0.15)",
        padding: "5px 8px",
        borderRadius: 4,
        margin: 5,
        alignItems: "center",
      }}
    >
      <img style={{ width: 60, height: 60, marginRight: 8 }} src={img} alt="" />
      <div className="name__price">
        <div className="name">{name}</div>
        <div className="price">
          <del>{price}</del> <span style={{ marginLeft: 10 }}>QAR 0.00</span>
        </div>
      </div>
    </div>
  );
}

export default GiftCard;
