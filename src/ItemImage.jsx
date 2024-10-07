/** @format */

const ItemImage = ({ imageUrl }) => {
  return (
    <div className="item_image">
      <img src={imageUrl} alt="image item" />
    </div>
  );
};

export default ItemImage;
