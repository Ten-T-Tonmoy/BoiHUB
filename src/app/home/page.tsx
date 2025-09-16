import React from "react";
import BookCards from "./AllBookCards";
import Navbar from "@/app/Search/Navbar";
import CategoryCarousel from "./CategoryCarousel";

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <CategoryCarousel />
      <BookCards />
    </div>
  );
};

export default HomePage;
