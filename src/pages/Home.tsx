import {  useEffect, useState } from "react";
import {  restaurantImage, type Restaurant } from "../mocks/restList";
import ShimmerCard from "../components/Shimmer";

const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
  const { name, cloudinaryImageId, areaName,isOpen, avgRating, totalRatingsString, cuisines } = restaurant;
  return (
    <div className={`resCard ${isOpen ? "open" : "closed"}`} >
      <img src={restaurantImage(cloudinaryImageId)} alt={name} />
      <div>{name} 
          <span className="starrating">{avgRating}</span>
          <span className="subText">({totalRatingsString})</span>
        </div>
      <div>{areaName}</div>
      <div className="subText">{cuisines.join(", ")}</div>
    </div>
  );
};

export default function Home() {
  const [restaurantList, setRestaurantList] = useState<Restaurant[]>([]);

  useEffect(() => {
     fetchRestaurants();
     return () => {
       restaurantList.length = 0; // Cleanup function to reset the restaurant list when the component unmounts
       setRestaurantList([]); // Reset the state to an empty array
     }
}, []);
  
  const fetchRestaurants = async () => {
    const  resturantData =await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING');
    const restaurants = await resturantData.json();
    setRestaurantList(restaurants?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}

  function getTopRatedRestaurants() {
    const topRatedRestaurants = restaurantList.filter((restaurant) => restaurant.info.avgRating >= 4.1);
    setRestaurantList(topRatedRestaurants);
  }

  function searchRestaurants(event: React.ChangeEvent<HTMLInputElement>) {
    const searchText = event.target.value.toLowerCase();
    // If search box cleared, reload the full list
    if (!searchText.trim()) {
      fetchRestaurants();
      return;
    }
    const filteredRestaurants = restaurantList.filter((restaurant) =>
      ((restaurant.info?.name ?? restaurant.name ?? '').toLowerCase().includes(searchText) ||
       (restaurant.info?.areaName ?? restaurant.areaName ?? '').toLowerCase().includes(searchText))
    );
    setRestaurantList(filteredRestaurants);
  }


  return (
    <div>
      <h1>Restaurant List</h1>
      <div><input type="text" placeholder="Search restaurants..."  onChange={searchRestaurants}/></div>
      <div>
        
        <button onClick={fetchRestaurants}>All restaurants</button>
        <button onClick={() => setRestaurantList(restaurantList.filter((restaurant) => restaurant.info.isOpen))}>Open restaurants</button>
        <button onClick={getTopRatedRestaurants}>Top rated restaurants</button>
      </div>
      <div className="resContainer">
        {restaurantList.length === 0
          ? <ShimmerCard />
          : restaurantList.map(rest => <RestaurantCard restaurant={rest.info} key={rest.info.id} />)
        }
    </div>
    </div>
  );
}

