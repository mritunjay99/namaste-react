import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategoryCard = ({ data, showItems, setShowIndex }) => {
  console.log(showItems);
  // const handleClick = () => {
  //   setShowIndex();
  // };
  console.log(data.itemCards);
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={setShowIndex}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{!showItems ? "🔽" : "🔼"}</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategoryCard;
