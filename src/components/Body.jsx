import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export default Body = () => {
    const [localRestaurants, setLocalRestaurants] = useState([]);
    const [tempRestaurants, setTempRestaurants] = useState([]);
    const [searchName, setsearchName] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.27060&lng=85.83340&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        console.log(json)
        setLocalRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setTempRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return <h1>Looks like you are Offline !!! , please check your internet connenction</h1>
    }

    return localRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="top-body-sec">
                <a className="filter" href="#"
                    onClick={() => setTempRestaurants(localRestaurants.filter(
                        res => res.info.avgRating > 4.4
                    ))}>
                    Wanna to see the <i>Top Restaurants ???...</i>
                </a>
                <div className="search">
                    <input type="text"
                        placeholder="enter the restaurant name..."
                        value={searchName}
                        onChange={e => setsearchName(e.target.value)} />
                    <button className="search-icon"
                        onClick={() => setTempRestaurants(localRestaurants.filter(
                            res => res.info.name.toLowerCase().includes(searchName.toLowerCase())
                        ))}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </div>

            <div className="restaurant-container">
                {tempRestaurants.map(restaurant => 
                    <Link
                        to={"restaurant/" + restaurant.info.id}
                        key={restaurant.info.id}>
                        <RestaurantCard resData={restaurant} />
                    </Link>
                )}
            </div>
        </div>
    )
}