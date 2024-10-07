/** @format */

import ItemBody from "./ItemBody";
import ItemImage from "./ItemImage";

const CoverItem = ({ imageUrl, boardName, size }) => {
  return (
    <div className="cover-item">
      <ItemImage imageUrl={imageUrl} />
      <ItemBody boardName={boardName} size={size} />
    </div>
  );
};

export default CoverItem;
