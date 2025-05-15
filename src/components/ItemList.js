import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = (items) => {
  console.log(items.items);
  const dispatc = useDispatch();
  const handleAddItem = (item) => {
    //dispatch an action
    dispatc(addItem(item));
  };
  return (
    // <div>Hi</div>
    <div>
      <div>
        {items.items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex"
          >
            <div className="py-2 w-9/12">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 px-2">
              <div className="absolute ">
                <button
                  className="p-2 mx-16 bg-black text-white rounded-lg shadow-lg "
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
              <img src={CDN_URL + item.card.info.imageId} className="w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
