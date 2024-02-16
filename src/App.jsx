import React, { useState } from "react";
import Navigation from "./Navigation/Navigation";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import { v4 as uuidv4 } from "uuid";

// get all db data as products
import products from "./db/data";

export default function App() {
  // selected category
  const [selectedCategory, setSelectedCategory] = useState(null);

  // *** input filter ***
  const [query, setQuery] = useState("");

  // get value of search field
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // get filtered items using search field & store it
  const filteredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  );

  // *** Radio filter ***
  const handleRadioChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // *** Radio filter ***
  const handleButtonChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    //filtering input items
    if (query) {
      filteredProducts = filteredItems;
    }

    // selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={uuidv4()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const filterResult = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar />
      <Navigation />
      <Recommended />
      <Products />
    </>
  );
}
