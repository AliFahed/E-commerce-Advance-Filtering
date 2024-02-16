import React from "react";
import Navigation from "./Navigation/Navigation";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";

export default function App() {
  return (
    <>
      <Navigation />
      <Recommended />
      <Products />
    </>
  );
}
