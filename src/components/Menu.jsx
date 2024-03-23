import { MENU_IMG_URL, NONVEG_MARK, VEG_MARK } from "../utils/constants";

export default Menu = (props) => {
  const { menuCard } = props;
  const { isVeg, name, price, defaultPrice, description, imageId } =
    menuCard?.card?.info;
  return (
    <div className="flex my-6 w-full">
      <div className="w-4/5 my-1">
        {isVeg ? (
          <img className="w-5" src={VEG_MARK} />
        ) : (
          <img className="w-9" src={NONVEG_MARK} />
        )}
        <p className="my-1 text-xl font-bold ">{name}</p>
        <p className="my-1 text-xl">₹ {defaultPrice / 100 || price / 100}</p>
        <p className="my-1 text-gray-500">{description}</p>
      </div>
      <div className="right">
        <img
          className="w-40 h-32 object-cover rounded-md"
          src={MENU_IMG_URL + imageId}
        />
        <button className="w-24 h-8 -my-28 mx-8 border-2 border-solid border-gray-200 rounded-md text-green-500 font-bold bg-white cursor-pointer">
          Add +
        </button>
      </div>
      <hr />
    </div>
  );
};
