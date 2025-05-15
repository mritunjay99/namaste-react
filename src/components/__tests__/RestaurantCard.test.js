import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/mockResCardData.json"
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";


it("Should render RestaurantCard component with props data",()=>{

    render(<RestaurantCard resData={MOCK_DATA}/>);

    const ResName=screen.getByText("Chinese Wok");
    expect(ResName).toBeInTheDocument();

})