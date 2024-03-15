import { CARD_IMG_URL } from "../utils/constants";

export default RestaurantCard = (props) => {
    const { resData } = props;
    return (
        <div className="res-cards">
            <img src={CARD_IMG_URL + resData.info.cloudinaryImageId} />
            <div className="res-card-details">
                <div className="left">
                    <h3>{resData.info.name}</h3>
                    <p>{resData.info.cuisines.join(",")}</p>
                    <p>{resData.info.areaName}</p>
                </div>
                <div className="right">
                    <h4>{resData.info.avgRating + " *"} </h4>
                    <h4>{resData.info.sla.deliveryTime + "mins"}</h4>
                </div>
            </div>
        </div >
    )
}