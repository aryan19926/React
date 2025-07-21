import { IMAGE_URL, restaurantData } from "./config";
import { useState, useEffect } from "react";
import { ShimmerUI } from "./ShimmerUI";


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
// swiggy api --> https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.656158&lng=77.2315589&page_type=DESKTOP_WEB_LISTING

//Body Component
const Body = () => {

    const [searchText, setSearchText] = useState("");  // returns an array = [var name, set function]
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
    console.log("aryan2 ")

    const filterRestaurant = (searchText) => {
        const filteredRestaurant = restaurantList.filter((restaurant) => restaurant.info.name.includes(searchText));
        setFilteredRestaurantList(filteredRestaurant);
    }

    // useEffect is called after component renders
    // empty array means that the useEffect is called only once after the component renders
    // if the array is [searchText] , then the useEffect is called after intial render and after every rerender of the component when the searchText changes 
    useEffect(() => {
        console.log("Aryan")
        getRestaurantList();
    }, [])

    async function getRestaurantList() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.656158&lng=77.2315589&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // show restaurant data in the console
        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    // conditional rendering
    if (restaurantList.length === 0) {
        return <ShimmerUI />
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

            {
                // javascript expressions can be used in the return statement inside the {}, not statements
                filteredRestaurantList.length === 0 && <div>No restaurants found</div>
            }

            <div className="body">
                {
                    filteredRestaurantList.map((restaurant) => {
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