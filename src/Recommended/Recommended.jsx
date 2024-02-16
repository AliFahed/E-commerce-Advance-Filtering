import React from "react";
import "./Recommended.css";
import Button from "../Components/Button";

export default function Recommended({ handleButtonChange }) {
  return (
    <>
      <section className="recommended-section">
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleButtonChange} value="" title="All" />
          <Button
            onClickHandler={handleButtonChange}
            value="Nike"
            title="Nike"
          />
          <Button
            onClickHandler={handleButtonChange}
            value="Puma"
            title="Puma"
          />
          <Button
            onClickHandler={handleButtonChange}
            value="Vans"
            title="Vans"
          />
        </div>
      </section>
    </>
  );
}
