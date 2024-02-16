import React from "react";
import "./Price.css";

export default function Price() {
  return (
    <section className="ml">
      <h2 className="sidebar-title-price-title">Price</h2>

      <label htmlFor="" className="sidebar-label-container">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>All
      </label>

      <label htmlFor="" className="sidebar-label-container">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>$0 -50
      </label>

      <label htmlFor="" className="sidebar-label-container">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>$50 -100
      </label>

      <label htmlFor="" className="sidebar-label-container">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>$100 - 150
      </label>

      <label htmlFor="" className="sidebar-label-container">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>Over $150
      </label>
    </section>
  );
}
