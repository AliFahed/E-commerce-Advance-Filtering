import React from "react";
import "./Navigation.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <input type="text" className="search-input" placeholder="Search" />
      </div>

      <div className="profile-container">
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}
