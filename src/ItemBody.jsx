/** @format */

import React from "react";

const ItemBody = ({ boardName, size }) => {
  return (
    <div className="item_body">
      <h3 className="item_board">{boardName}</h3>
      <p className="item_size"> {size}</p>
    </div>
  );
};

export default ItemBody;
