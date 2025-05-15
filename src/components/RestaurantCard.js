import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  return (
    <div data-testid="resCard" className="p-4 m-4 w-[240px] rounded-lg bg-gray-200 h-[350px] hover:bg-lime-200">
      <img
        className="rounded-lg h-36 w-full"
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt=""
      />
      <h3 className="font-bold">{resData.info.name}</h3>
      <h4 className="font-semibold">
        ✪{resData.info.avgRating} {"•" + resData.info.sla.slaString}
      </h4>
      <h4 className="break-words">{resData.info.cuisines.join(",")}</h4>
      <h4>{resData.info.costForTwo}</h4>
    </div>
  );
};

export const useWithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        {/* <label className="p-2- m-2 rounded-lg bg-black text-white">Promoted</label> */}
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
