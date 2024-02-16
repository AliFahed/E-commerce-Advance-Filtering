import React from "react";
import { FaStar } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

export default function Card({
  img,
  title,
  stars,
  reviews,
  //prevPrice,
  newPrice,
}) {
  return (
    <div className="card">
      <img src={img} alt={title} className="card-img" />

      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <div className="card-reviews">
          {Array.from({ length: stars }, (_, index) => (
            <FaStar key={index} className="rating-star" />
          ))}
          <span className="total-reviews">{reviews}</span>
        </div>
      </div>

      <div className="card-price">
        <p className="price">{"$" + newPrice}</p>
        <div className="bag">
          <FaBagShopping className="bag-icon" />
        </div>
      </div>
    </div>
  );
}
