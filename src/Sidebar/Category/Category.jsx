import React from "react";
import Input from "../../Components/Input";
import "./Category.css";

export default function Category({ handleRadioChange }) {
  return (
    <section>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input
            onChange={handleRadioChange}
            type="radio"
            value=""
            name="test"
          />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleRadioChange={handleRadioChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleRadioChange={handleRadioChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleRadioChange={handleRadioChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </section>
  );
}
