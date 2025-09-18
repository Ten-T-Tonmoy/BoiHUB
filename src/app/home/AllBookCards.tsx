"use client";
import React, { useState } from "react";
import { useBookStore } from "@/store/book.app";
import { BookItem } from "@/lib/Interfaces/Books.Interface";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaHeart } from "react-icons/fa";
import { getRandomCover } from "./GetRandomCover";
import PaginationComp from "./PaginationComp";

const BookCards = () => {
  const { totalBooks } = useBookStore();
  const allBooks = Object.values(totalBooks).flat() as BookItem[];
  // const [showAll, setShowAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage: number = 4;

  const totalPages: number = Math.ceil(allBooks.length / booksPerPage);

  //slice for pages
  const startIdx: number = (currentPage - 1) * booksPerPage;
  const displayedBooks = allBooks.slice(startIdx, startIdx + booksPerPage);

  return (
    <div className="w-full p-4">
      {/* {Object.values(totalBooks).flat().length} */}
      <div
        className="bg-background rounded-sm p-4 grid grid-cols-2 justify-items-center
      gap-4 md:grid-cols-6 gap-y-4"
      >
        <h1
          className=" text-center col-span-2 text-lg mb-4 border-b w-full border-primary
         font-semibold md:col-span-6 "
        >
          সবগুলো বই অন্বেষণ করুন
        </h1>
        {displayedBooks.map((book: BookItem) => (
          // --------------card element----------------
          /**
           * writer
           * stock
           * price
           * add to cart
           * add to favourite
           */
          <div
            className="
          flex-shrink-0 flex justify-center group gap-1 border border-border py-2
          rounded-[4px] shadow-lg
          items-center flex-col w-full cursor-pointer h-full
          "
            key={book.id}
          >
            <p
              className=" transition-colors duration-300 group-hover:text-primary
              line-clamp-1 text-sm text-center "
            >
              {book.name}
            </p>
            <div className="rounded-sm h-52 w-36 overflow-hidden ">
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
            <p className="text-xs text-black/50 text-center">
              by {book.writer}
            </p>
            {book.availableStock > 0 ? (
              <p className="text-xs text-green-400/80 text-center">
                Available in Stock
              </p>
            ) : (
              <p className="text-xs text-red-400/80 text-center">
                Out of Stock
              </p>
            )}

            {/* ----------price and cart--------------- */}
            <div className="flex justify-between items-center gap-1">
              <p className="font-semibold">TK {book.currentPrice}</p>
              <p className="text-xs font-semibold text-black/70 line-through">
                TK {book.originalPrice}
              </p>
            </div>
            <div className="flex justify-between items-center gap-2 ">
              <Button
                className="rounded-[3px] cursor-pointer"
                variant={"outline"}
              >
                Add to Cart
              </Button>

              <FaHeart
                className="text-white bg-primary h-9 w-10 border border-primary
                p-1 rounded-[3px] hover:text-primary hover:bg-background transition-colors
                duration-200 ease-in-out"
              />
            </div>
          </div>
        ))}

        {/* ------------------------pagination---------------------------- */}
        <div className=" col-span-2  ">
          <PaginationComp
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default BookCards;
