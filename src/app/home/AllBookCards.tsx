"use client";
import React, { useState } from "react";
import { useBookStore } from "@/store/book.app";
import { BookItem } from "@/lib/Interfaces/Books.Interface";
import Image from "next/image";
import PaginationComp from "./PaginationComp";
import BookCard from "./BookCard";

const BookCards = () => {
  const { totalBooks } = useBookStore();
  const allBooks = Object.values(totalBooks).flat() as BookItem[];
  // const [showAll, setShowAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage: number = 8;

  const totalPages: number = Math.ceil(allBooks.length / booksPerPage);

  //slice for pages
  const startIdx: number = (currentPage - 1) * booksPerPage;
  const displayedBooks = allBooks.slice(startIdx, startIdx + booksPerPage);

  return (
    <div className="w-full p-4">
      {/* {Object.values(totalBooks).flat().length} */}
      <div
        className="bg-background rounded-sm p-4 grid grid-cols-2 justify-items-center
      gap-4 md:grid-cols-4 gap-y-4 lg:px-[10vw] mx-auto"
      >
        <h1
          className=" text-center col-span-2 text-lg mb-4 border-b w-full border-primary
         font-semibold md:col-span-4 "
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
          <BookCard key={book.id} book={book} />
        ))}

        {/* ------------------------pagination---------------------------- */}
        <div className=" col-span-2 md:col-span-4  ">
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
