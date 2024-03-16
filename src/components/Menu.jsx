import { MENU_IMG_URL, NONVEG_MARK, VEG_MARK } from "../utils/constants";

export default Menu = (props) => {

    const { menuCard } = props;
    const {isVeg , name , price , defaultPrice , description , imageId} = menuCard?.card?.info;
    return (
        <div className="menu">
            <div className="left">
                {isVeg ? 
                    <img className="veg" src={VEG_MARK}/> : <img className="nonveg" src={NONVEG_MARK}/>}
                <p className="item-name">{name}</p>
                <p className="price">₹ {defaultPrice/100 || price/100}</p>
                <p className="item-desc">{description}</p>
            </div>
            <div className="right">
                <img src={MENU_IMG_URL + imageId} />
                <button>Add  +</button>
            </div>
            <hr />
        </div>
    )
}