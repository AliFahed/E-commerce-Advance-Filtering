import React from "react";
import Input from "../../Components/Input";
import "./Colors.css";

export default function Colors({ handleRadioChange }) {
  return (
    <section>
      <h2 className="sidebar-title-color-title">Colors</h2>

      <label className="sidebar-label-container">
        <input
          onChange={handleRadioChange}
          type="radio"
          value=""
          name="test3"
        />
        <span className="checkmark all"></span>All
      </label>

      <Input
        handleRadioChange={handleRadioChange}
        value="black"
        title="Black"
        name="test3"
        color="black"
      />

      <Input
        handleRadioChange={handleRadioChange}
        value="blue"
        title="Blue"
        name="test3"
        color="blue"
      />

      <Input
        handleRadioChange={handleRadioChange}
        value="red"
        title="Red"
        name="test3"
        color="red"
      />

      <Input
        handleRadioChange={handleRadioChange}
        value="green"
        title="Green"
        name="test3"
        color="green"
      />

      <label className="sidebar-label-container">
        <input
          onChange={handleRadioChange}
          type="radio"
          value="white"
          name="test3"
        />
        <span
          className="checkmark"
          style={{ background: "white", border: "1px solid black" }}
        ></span>
        White
      </label>
    </section>
  );
}
