import React from "react";
import BookCards from "./BookCards";
import Navbar from "@/app/Search/Navbar";
import CategoryCarousel from "./CategoryCarousel";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <CategoryCarousel />
      <BookCards />
    </div>
  );
};

export default HomePage;
