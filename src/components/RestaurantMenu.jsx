import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCatagory from "./RestaurantCatagory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(MENU_URL + resId);

    const json = await data.json();
    setResInfo(json.data);
    setMenuItems(
      json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  };
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, locality, avgRatingString, totalRatingsString } =
    resInfo?.cards[0]?.card?.card?.info;
  const { slaString, lastMileTravelString } =
    resInfo?.cards[0]?.card?.card?.info?.sla;

  const catagories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="mx-56 my-10">
      <div className="m-3 flex justify-between">
        <div>
          <p className="text-2xl font-bold">{name}</p>
          <p className="text-gray-500">{cuisines.join(",")}</p>
          <p className="text-gray-500">{locality}</p>
        </div>
        <div>
          <p className="text-2xl font-bold">{avgRatingString}⭐</p>
          <p className="text-gray-500">{totalRatingsString}</p>
        </div>
      </div>
      <hr />
      <div className="m-3 flex justify-between">
        <div className="flex">
          <i className="fa-solid fa-clock text-sm mx-1"></i>
          <p className="text-base font-bold">{slaString} | </p>
          <i className="fa-solid fa-road text-sm mx-1"></i>
          <p className="text-base font-bold"> {lastMileTravelString}</p>
        </div>
        <div className="flex">
          <p className="text-base font-bold">
            {resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}
          </p>
        </div>
      </div>
      <hr />
      <div className="flex h-16 items-center">
        <p className="text-xl">Veg Only</p>
        <button
          className="h-6 w-6 ml-3 cursor-pointer bg-gray-300 border-2 rounded-md"
          onClick={() =>
            setMenuItems(menuItems.filter((menu) => menu.card.info.isVeg))
          }
        ></button>
      </div>
      <hr />
      <ul className="mt-7">
        {catagories.map((c) => (
          <li>
            <RestaurantCatagory key={c.card?.card?.title} catagory={c} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
