/** @format */

import CoverItem from "./components/CoverItem";
import FormAddProduct from "./components/FormAddProduct";
import { getData } from "./utils/data";

function App() {
  const dataBoard = getData();

  return (
    <div className="list-item">
      <FormAddProduct />
      {dataBoard.map((item) => (
        <CoverItem imageUrl={item.imageUrl} size={item.size} boardName={item.boardName} key={item.id} />
      ))}
    </div>
  );
}

export default App;
