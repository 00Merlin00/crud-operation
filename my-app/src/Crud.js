import React, { useState } from "react";
import "./Crud.css";
import { AddList } from "./AddList";

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
  return (
    <div className="crud">
      <div>
        <AddList setLists={setLists} />
        <table>
          <tbody>
            {lists.map((current) => (
              <tr>
                <td>{current.name}</td>
                <td>{current.price}</td>
                <td>
                  <button onClick={handleSubmit} className="edit">
                    Edit
                  </button>
                  <button className="delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Crud;
