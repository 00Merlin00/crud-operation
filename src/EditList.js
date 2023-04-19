import React from "react";

const EditList = ({ current, lists, setLists, setUpdateState }) => {
  function handleInputName(event) {
    const value = event.target.value;
    const newList = lists.map((li) =>
      li.id === current.id ? { ...li, name: value } : li
    );

    setLists(newList);
  }
  function handleInputPrice(event) {
    const value = event.target.value;
    const newList = lists.map((li) =>
      li.id === current.id ? { ...li, price: value } : li
    );

    setLists(newList);
  }
  return (
    <tr>
      <td>
        <input
          type="text"
          onChange={handleInputName}
          name="name"
          value={current.name}
        ></input>
      </td>
      <td>
        <input
          type="text"
          onChange={handleInputPrice}
          name="price"
          value={current.price}
        ></input>
      </td>
      <td>
        <button type="submit" onClick={() => setUpdateState()}>
          Update
        </button>
      </td>
    </tr>
  );
};

export default EditList;
