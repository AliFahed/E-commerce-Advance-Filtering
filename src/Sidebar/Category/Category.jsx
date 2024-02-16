import React from "react";
import Input from "../../Components/Input";
import "./Category.css";

export default function Category() {
  return (
    <section>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
    </section>
  );
}
