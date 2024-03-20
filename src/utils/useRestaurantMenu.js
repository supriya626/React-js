import { useState , useEffect } from "react";
import { MENU_URL } from "../utils/constants";

export default useRestaurantMenu = (resId) => {

    const [resInfo , setResInfo] = useState(null);

    useEffect(() => {
        fetchMenuData()
    } , []);

    const fetchMenuData = async () => {
        const data = await fetch(MENU_URL + resId);

        const json = await data.json();
        setResInfo(json.data);
    }

    return resInfo;
}