import { useState } from "react";

export default RestaurantCatagory = ({ catagory }) => {
  const [showItem, setShowItem] = useState(true);
  const { title, itemCards } = catagory.card?.card;

  const showItemList = () => {
    setShowItem(!showItem);
  };

  return (
    <div>
      <div className="flex justify-between bg-gray-100 h-9 p-1 m-3 rounded-md shadow-md">
        <p className="font-bold text-xl">
          {title}({itemCards.length})
        </p>
        <button onClick={showItemList} className=" cursor-pointer">
          🔽
        </button>
      </div>
      <ul>
        {showItem &&
          itemCards.map((item) => (
            <Menu key={item.card.info.id} menuCard={item} />
          ))}
      </ul>
    </div>
  );
};
