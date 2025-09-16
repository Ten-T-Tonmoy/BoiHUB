"use client";
import React from "react";
import { useBookStore } from "@/store/book.app";
import { BookItem } from "@/lib/Interfaces/Books.Interface";
import Image from "next/image";

const BookCards = () => {
  const placeholders = [
    "/coverholder/cover1.png",
    "/coverholder/cover2.png",
    "/coverholder/cover3.png",
  ];

  function getRandomCover() {
    const idx = Math.floor(Math.random() * placeholders.length);
    return placeholders[idx];
  }
  const { totalBooks } = useBookStore();
  return (
    <div>
      {Object.values(totalBooks).flat().length}
      {Object.values(totalBooks)
        .flat()
        .map((book) => (
          <div
            className="
          h-fit
          "
            key={book.id}
          >
            {book.name}
            <img
              src={book.bookCover}
              alt={book.name}
              width={100}
              height={50}
              className="object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = getRandomCover();
              }}
            />
          </div>
        ))}
    </div>
  );
};

export default BookCards;
