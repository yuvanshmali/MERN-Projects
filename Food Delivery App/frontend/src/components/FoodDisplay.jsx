import React, { useContext } from "react";
import { StoreContext } from "../contexts/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({category}) => {

    const { food_list } = useContext(StoreContext)

    return (
        <div className="my-10" id="food-display">
            <h2 className="text-[max(2.2vw,24px)] font-bold" >Top Dishes Near You</h2>
            <div className="food-display-list grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {food_list.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        return <FoodItem key={index} id={item._id} name={item.name} image={item.image} description={item.description} price={item.price} category={item.category} />
                    }
                    
                })}
            </div>
        </div>
    ) 
}

export default FoodDisplay;