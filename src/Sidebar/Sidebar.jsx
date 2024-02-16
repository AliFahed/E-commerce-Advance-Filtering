import React from "react";
import "./Sidebar.css";
import { FaShoppingCart } from "react-icons/fa";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

export default function Sidebar() {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <FaShoppingCart className="sidebar-icons" />
      </div>

      <Category />
      <Price />
      <Colors />
    </section>
  );
}
