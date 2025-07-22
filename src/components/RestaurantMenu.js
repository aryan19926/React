import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ShimmerUI } from "./ShimmerUI";


// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=750311&catalog_qa=undefined&submitAction=ENTER

const RestaurantMenu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel);
        setMenuItems(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel || []);
    }


    if (menuItems.length === 0) {
        return <ShimmerUI />
    }

    // to iterate over object we use Object.keys(object) --> returns an array of keys or Object.values(object) --> returns an array of values 
    return (
        <div>
            <h1>Restaurant id :{id}</h1>
            <h2>Menu</h2>
            <ul>
                {menuItems.map((item) => (
                    <li key={item.dish.info.id}>{item.dish.info.name} - {item.dish.info.price / 100}</li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;