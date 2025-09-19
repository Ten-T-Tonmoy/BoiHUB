import React from "react";
import { BookItem } from "@/lib/Interfaces/Books.Interface";
import { getRandomCover } from "../home/GetRandomCover";

// inline props validation suks
const MainView = ({ book }: { book: BookItem }) => {
  return (
    <div className="p-4 border bg-background rounded-[5px] ">
      {/* ------- 2 col | 3 col | 1 col ------------ */}

      <div className="md:grid  md:grid-cols-6">
        {/* --------------------------------image part------------------- */}
        <div className=" flex flex-col md:col-span-2 items-center w-full justify-center p-4">
          <div className="rounded-sm h-80 w-52   relative">
            <img
              src={book.bookCover}
              alt={book.name}
              className="object-cover h-full w-full rounded-md z-30 relative 
            transform transition-transform duration-300 ease-in-out hover:scale-110 "
              onError={(e) => {
                (e.target as HTMLImageElement).src = getRandomCover();
              }}
            />
            <div
              className="w-52 h-80 border border-primary absolute
            -top-4 -left-4 z-10 rounded-[4px]"
            ></div>
            <div
              className="w-52 h-80 border border-black absolute
            top-4 left-4 z-10 rounded-[4px]"
            ></div>
          </div>
          {/* ----------two boxes------------- */}
        </div>

        {/* ---------------------infos nd stuffs-------------------------- */}

        <div className="md:col-span-3 bg-green-400">info col</div>

        {/* --------------------------- sugg books ------------------------------- */}
        <div className="hidden md:col-span-1 bg-blue-400">sugg col</div>
      </div>
    </div>
  );
};

export default MainView;
