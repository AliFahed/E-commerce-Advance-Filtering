import React from "react";
import "./Colors.css";

export default function Colors() {
  return (
    <section>
      <h2 className="sidebar-title-color-title">Colors</h2>

      <label htmlFor="" className="sidebar-label-container">
        <input type="radio" name="test3" />
        <span className="checkmark"></span>All
      </label>

      <label htmlFor="" className="sidebar-label-container">
        <input type="radio" name="test3" />
        <span className="checkmark"></span>Black
      </label>

      <label htmlFor="" className="sidebar-label-container">
        <input type="radio" name="test3" />
        <span className="checkmark"></span>Blue
      </label>

      <label htmlFor="" className="sidebar-label-container">
        <input type="radio" name="test3" />
        <span className="checkmark"></span>Red
      </label>

      <label htmlFor="" className="sidebar-label-container">
        <input type="radio" name="test3" />
        <span className="checkmark"></span>Green
      </label>

      <label htmlFor="" className="sidebar-label-container">
        <input type="radio" name="test3" />
        <span className="checkmark"></span>White
      </label>
    </section>
  );
}
