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
  const [updateState, setUpdateState] = useState();
  function handleEdit(id) {
    setUpdateState(id);
  }

  function handleDelete(e, id) {
    e.preventDefault();
    const newList = lists.filter((li) => li.id !== id);

    setLists(newList);
  }
  console.log(lists, "listlistlist");
  return (
    <div className="crud">
      <div>
        <AddList setLists={setList} />
        <form>
          <table>
            <tbody>
              {lists.map((current) =>
                updateState === current.id ? (
                  <EditList
                    current={current}
                    setUpdateState={setUpdateState}
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
                        className="delete"
                        onClick={(e) => handleDelete(e, current.id)}
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
