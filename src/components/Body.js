import RestaurantCard, { useWithPromotedLabel } from "./RestaurantCard";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import Shimmer from "./Shimmer";

const Body = ({}) => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onLineStatus = useOnlineStatus();
  const { setUserName } = useContext(UserContext);
  const RestaurantPromoted = useWithPromotedLabel(RestaurantCard);
  if (onLineStatus === false) {
    return <h1>Looks like you are offline!;</h1>;
  }
  // console.log("rendered");
  //Whenever a state variable will change, react will re-render the component.
  //let list = [];
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    // console.log(
    //   data.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setListOfRestaurants(
      data.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      data.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Conditional rendering
  // if (listOfRestaurants?.length === 0) {
  //   return <Shimmer />;
  // }
  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body pt-4">
      <div className="flex pb-4 justify-between">
        <div className="search">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black rounded-full px-4 "
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="border border-solid border-black  bg-lime-300 px-4 m-4 rounded-lg "
            onClick={() => {
              let filteredSearch = listOfRestaurants?.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredSearch);
              setSearchText("");
            }}
          >
            Search
          </button>
          <button
            className="px-4 m-4 border border-solid border-black rounded-lg bg-blue-200"
            onClick={() => {
              let filteredList = listOfRestaurants?.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
          <input
            type="text"
            className="px-4 border border-black"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/* <RestaurantCard resData={restaurant} /> */}
            <RestaurantPromoted resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
