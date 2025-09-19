"use client";
import React from "react";
import MainView from "../MainView";
import { useBookStore } from "@/store/book.app";
import { BookItem } from "@/lib/Interfaces/Books.Interface";
import { useParams } from "next/navigation";

const BookSpecificPage = () => {
  const { totalBooks } = useBookStore();
  const allBooks: BookItem[] = Object.values(totalBooks).flat();
  const params = useParams();
  const bookId: number = Number(params.id);

  const book = allBooks.find((b) => b.id === bookId);
  return (
    <div className="p-4 md:p-[10vw] bg-gray-100">
      <MainView book={book} />
    </div>
  );
};

export default BookSpecificPage;
