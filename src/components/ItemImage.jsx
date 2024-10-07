/** @format */

const ItemImage = ({ imageUrl }) => {
  return (
    <div className="item-image">
      <img src={imageUrl} alt="image item" height={300} />
    </div>
  );
};

export default ItemImage;
