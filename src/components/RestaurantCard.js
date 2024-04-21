import { CDN_URL } from "../utils/constants";
import resList from "../utils/mockData";
//Restaurant Card 

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,cloudinaryImageId,cuisines,avgRating,sla} = resData;
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" alt="foodLogo1" src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4 className="res-Cusine" >{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard