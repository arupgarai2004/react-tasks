import { useState } from "react";
import { restaurants, restaurantImage, type Restaurant } from "../mocks/restList";

const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
  const { name, cloudinaryImageId, areaName,isOpen } = restaurant;

  return (
    <div className={`resCard ${isOpen ? "open" : "closed"}`} >
      <img src={restaurantImage(cloudinaryImageId)} alt={name} />
      <div>{name}</div>
      <div>{areaName}</div>
    </div>
  );
};
export default function Home() {
  const [restaurantList, setRestaurantList] = useState<Restaurant[]>(restaurants);

  function getTopRatedRestaurants() {
    const topRatedRestaurants = restaurants.filter((restaurant) => restaurant.avgRating >= 4.0);
    setRestaurantList(topRatedRestaurants);
  }

  return (
    <div>
      <h1>Restaurant List</h1>
      <div>
        <button onClick={() => setRestaurantList(restaurants)}>All restaurants</button>
        <button onClick={() => setRestaurantList(restaurants.filter((restaurant) => restaurant.isOpen))}>Open restaurants</button>
        <button onClick={getTopRatedRestaurants}>Top rated restaurants</button>
      </div>
      <div className="resContainer">
        {restaurantList.map((rest) => (
          <RestaurantCard restaurant={rest} key={rest.id} />
        ))}
      </div>
    </div>
  );
}


