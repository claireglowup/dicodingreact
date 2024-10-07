/** @format */

const ItemBody = ({ boardName, size }) => {
  return (
    <div className="item-body">
      <h3 className="item_board">{boardName}</h3>
      <p className="item_size"> {size}</p>
    </div>
  );
};

export default ItemBody;
