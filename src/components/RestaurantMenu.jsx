import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import Menu from "./Menu";

export default RestaurantMenu = () =>{
    
    const { resId } = useParams();
    const [menuItems , setMenuItems] = useState([]);
    const [resInfo , setResInfo] = useState(null);
    useEffect(() => {
        fetchMenuData()
    } , []);

    const fetchMenuData = async () => {
        const data = await fetch(MENU_URL + resId);

        const json = await data.json();
        setResInfo(json.data);
        setMenuItems(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    }

    if(resInfo === null) return <Shimmer/>
    
    const {name , cuisines , locality , avgRatingString , totalRatingsString } = resInfo?.cards[0]?.card?.card?.info;
    const {slaString , lastMileTravelString} = resInfo?.cards[0]?.card?.card?.info?.sla;

    return(
        <div className="res-menu">
            <div className="res-details">
                <div className="left-details">
                    <h2>{name}</h2>
                    <p>{cuisines.join(",")}</p>
                    <p>{locality}</p>
                </div>
                <div className="right-details">
                    <h3>{avgRatingString}*</h3>
                    <p>{totalRatingsString}</p>
                </div>
            </div>
            <hr />
            <div className="fee-details">
                <div className="time ">
                    <i className="fa-solid fa-clock"></i>
                    <h4>{slaString} | </h4>
                    <i className="fa-solid fa-road"></i>
                    <h4> {lastMileTravelString}</h4>
                </div>
                <div className="cost">
                    <h3>{resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
                </div>
            </div>
            <hr />
            <div className="choice">
                <p>Veg Only</p>
                <button onClick={() => 
                    setMenuItems(menuItems.filter((menu) => menu.card.info.isVeg))}>
                </button>
            </div>
            <hr />
            <h2>Recommended({menuItems.length})</h2>
            <ul>
               {menuItems.map(res => <Menu key={res.card.info.id} menuCard = {res}/>)}
            </ul>
        </div>
    )
}