import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import Menu from "./Menu";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () =>{
    
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    const [menuItems , setMenuItems] = useState(useRestaurantMenu(resId)?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);

    // useEffect(() =>{
    //     setMenuItems(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    // } , [])

    console.log(menuItems)

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

export default RestaurantMenu;