import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
function Content() {
  const [items, setitems] = useState([
    {
      id: 1,
      checked: false,
      item: "item 1 ",
    },
    {
      id: 2,
      checked: true,
      item: "item 2 ",
    },
    {
      id: 3,
      checked: false,
      item: "item 3 ",
    },
  ]);

  const handleCheck = (id) => {
    const listitem = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setitems(listitem);
    // to store the state in local storage verna refresh krna par deafult ho jayga
    localStorage.setItem("shoppinglist", JSON.stringify(listitem));
  };

  const handleDelete = (id) => {
    // id ko chod kr saab add ho jayege
    const listitem = items.filter((item) => item.id !== id);
    setitems(listitem);
    localStorage.setItem("shoppinglist", JSON.stringify(listitem));
  };

  return (
    <main>
      {/* {} expresstion hota h  */}
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
              />
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
              <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ fontSize: "100px" }}>item list is empty</p>
      )}
    </main>
  );
}

export default Content;
