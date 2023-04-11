import React from "react";
import "./Crud.css";

export const AddList = ({ setLists }) => {
  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const price = event.target.elements.price.value;
    const newList = {
      id: 3,
      name,
      price,
    };

    setLists((prevList) => {
      return prevList.concat(newList);
    });
  }
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Enter Name"></input>
      <input type="text" name="price" placeholder="Enter Price"></input>
      <button type="submit">Add</button>
    </form>
  );
};
