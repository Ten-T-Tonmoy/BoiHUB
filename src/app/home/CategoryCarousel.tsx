"use client";
import React from "react";
import { useBookStore } from "@/store/book.app";
import { BookItem } from "@/lib/Interfaces/Books.Interface";
import Image from "next/image";
import { booksByCategory } from "@/lib/AllBooks";
import { Button } from "@/components/ui/button";

const CategoryCarousel = () => {
  const placeholders = [
    "/coverholder/cover1.png",
    "/coverholder/cover2.png",
    "/coverholder/cover3.png",
  ];

  function getRandomCover() {
    const idx = Math.floor(Math.random() * placeholders.length);
    return placeholders[idx];
  }
  const booksCateg = booksByCategory;
  return (
    <div
      className="flex overflow-x-scroll border-b border-border p-4 
    overflow-y-hidden scrollbar-hide gap-4"
    >
      {Object.entries(booksCateg).map(([category, books]) => (
        //  -------------category card-----------------
        <div
          className=" flex-shrink-0 flex flex-col rounded-sm 
        items-center justify-start bg-card  border border-border"
          key={category}
        >
          <p className="my-2 line-clamp-2">{category}</p>
          <div className="grid grid-cols-2 grid-rows-2 gap-2 px-2  ">
            {books.slice(0, 4).map((book) => (
              // --------------card element----------------
              <div
                className="
                 flex-shrink-0 flex justify-center group
                items-center flex-col w-[130px] cursor-pointer
                "
                key={book.id}
              >
                <div className="rounded-sm h-38 w-26 overflow-hidden ">
                  <img
                    src={book.bookCover}
                    alt={book.name}
                    className="object-cover h-full w-full
                  transform transition-transform duration-300 ease-in-out hover:scale-110 "
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = getRandomCover();
                    }}
                  />
                </div>
                <p
                  className="max-w-[60%] transition-colors duration-300 group-hover:text-primary
                line-clamp-2 text-xs text-center"
                >
                  {book.name}
                </p>
              </div>
            ))}
          </div>
          <Button
            className="mx-auto my-1 rounded-[3px]
          cursor-pointer "
          >
            See More {">"}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default CategoryCarousel;
