import React from "react";
import Lineitem from "./Lineitem";
function Itemlist({ items, handleCheck, handleDelete }) {
  return (
    <ul>
      {items.map((item) => (
        <Lineitem
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default Itemlist;
