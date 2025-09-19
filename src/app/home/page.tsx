import React from "react";
import BookCards from "./AllBookCards";
import CategoryCarousel from "./CategoryCarousel";
import SlidingMenus from "../Search/SlidingMenus";

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      <SlidingMenus />
      <CategoryCarousel />
      <BookCards />
    </div>
  );
};

export default HomePage;
