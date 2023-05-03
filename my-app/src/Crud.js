import React, { useState } from "react";
import "./Crud.css";
import { AddList } from "./AddList";
import EditList from "./EditList";

function Crud() {
  const list = [
    {
      id: 1,
      name: "HP",
      price: "2222",
    },
    {
      id: 2,
      name: "Dell",
      price: "2445",
    },
  ];

  const [lists, setLists] = useState(list);
  const [updateState, setUpdateState] = useState(-1);
  function handleEdit(id) {
    setUpdateState(id);
  }

  function handleDelete(id) {
    const newList = lists.filter((li) => li.id !== id);
    setLists(newList);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const price = event.target.elements.price.value;
    const newList = lists.map((li) =>
      li.id === updateState ? { ...li, name: name, price: price } : li
    );

    setLists(newList);
    setUpdateState(-1);
  }

  return (
    <div className="crud">
      <div>
        <AddList setLists={setLists} />
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              {lists.map((current) =>
                updateState === current.id ? (
                  <EditList
                    current={current}
                    lists={lists}
                    setLists={setLists}
                  />
                ) : (
                  <tr>
                    <td>{current.name}</td>
                    <td>{current.price}</td>
                    <td>
                      <button
                        onClick={() => handleEdit(current.id)}
                        className="edit"
                      >
                        Edit
                      </button>
                      <button
                        type="submit"
                        className="delet"
                        onClick={() => handleDelete(current.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}

export default Crud;
