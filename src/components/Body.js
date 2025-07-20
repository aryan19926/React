import { IMAGE_URL, restaurantData } from "./config";
import { useState } from "react";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines }) => {
    return (
        <div className="restaurant-card">
            <img className="restaurant-image" src={IMAGE_URL + cloudinaryImageId}
                alt="restaurant-image" />
            <h2>{name}</h2>
            <h3>{cuisines.join(' , ')}</h3>
        </div>
    );
}


// in react to create local state variables , we use useState()
// two way binding --> value is set in the input field and the value is set in the state variable

// The Two Directions:
// State → UI (Downward flow): The value={searchText} prop ensures that whatever is stored in the searchText state variable is displayed in the input field.
// UI → State (Upward flow): The onChange handler updates the state when the user types in the input field.
// Key Components:
// State variable: searchText holds the current value
// Setter function: setSearchText updates the state
// Value prop: value={searchText} displays the state in the UI
// Change handler: onChange captures user input and updates state


// to make the variable in sync with UI , we use useState()


//Body Component
const Body = () => {

    const [searchText, setSearchText] = useState("");  // returns an array = [var name, set function]
    const [restaurantList, setRestaurantList] = useState(restaurantData);

    const filterRestaurant = (searchText) => {
        const filteredRestaurant = restaurantData.filter((restaurant) => restaurant.info.name.includes(searchText));
        setRestaurantList(filteredRestaurant);
    }

    return (
        <>
            <div>
                <input
                    type="text"
                    value={searchText}
                    placeholder="Search Restaurant"
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                ></input>
                <button onClick={() => filterRestaurant(searchText)}> Search</button>
                {searchText}
            </div>
            <div className="body">
                {
                    restaurantList.map((restaurant) => {
                        return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
                    }
                    )
                }
                {/* <RestaurantCard {...restaurantData[0].info} />
            {/* <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard /> */}
            </div>
        </>

    );
};

export default Body;