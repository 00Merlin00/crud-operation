import React, { useState } from "react";
import "./Crud.css";

export const AddList = ({ setLists }) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
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
    setInput1("");
    setInput2("");
  }

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input1}
        name="name"
        placeholder="Enter Name"
        onChange={(e) => setInput1(e.target.value)}
      ></input>
      <input
        type="text"
        value={input2}
        name="price"
        placeholder="Enter Price"
        onChange={(e) => setInput2(e.target.value)}
      ></input>
      <button type="submit">Add</button>
    </form>
  );
};
