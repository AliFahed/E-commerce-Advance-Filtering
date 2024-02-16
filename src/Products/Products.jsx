import React from "react";
import "./Products.css";

export default function Products({ filteredResult }) {
  return <section className="card-container">{filteredResult}</section>;
}
