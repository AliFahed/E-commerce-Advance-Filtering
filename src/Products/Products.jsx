import React from "react";
import "./Products.css";
import { FaStar } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

export default function Products() {
  return (
    <section className="card-container">
      <div className="card">
        <img
          src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
          alt="Shoe"
        />

        <div className="card-details">
          <h3 className="card-title">Shoe</h3>
          <div className="card-reviews">
            <FaStar className="rating-star" />
            <FaStar className="rating-star" />
            <FaStar className="rating-star" />
            <FaStar className="rating-star" />
            <span className="total-reviews"></span>
          </div>
        </div>

        <div className="card-price">
          <p className="price">$300</p>
          <div className="bag">
            <FaBagShopping className="bag-icon" />
          </div>
        </div>
      </div>
    </section>
  );
}
