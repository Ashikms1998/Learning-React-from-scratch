import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import React, { useState,useEffect } from 'react'
//App Body

//should add key while using map to make it unique but dont try to use
// INDEX AS KEY!!!!(not a good practice as mentioned in React DOC )
// insted use a unique ID key from data as a KEY

const Body = () =>{
const [res,setRes] = useState(resList);

useEffect(()=>{
    console.log("This is useState")//this will render second
},[]);

console.log("This is just a console in body")//this will render first then the one above in use Effect

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                //filter logic
                onClick={()=>{
                    const filterdList = resList.filter(
                        (res)=>res.info.avgRating > 4.5
                    );
                    setRes(filterdList);
            }}
            >
                Top Rated Restaurants</button>
            </div>
            <div className="search">Search</div>
            <div className="restaurant-container">
                {res.map((restaurant) =>{ return(

                    < RestaurantCard key={restaurant?.info?.id} resData={restaurant?.info}/>
                )})}
            </div>
        </div>
    );
};

export default Body