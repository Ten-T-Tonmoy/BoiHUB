"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { BookItem } from "@/lib/Interfaces/Books.Interface";
import { allBooks } from "@/lib/AllBooks";

type CategoryKey = keyof typeof allBooks;

interface BooksState {
  totalBooks: typeof allBooks; //shared interface
  favouriteBooks: BookItem[];
  addToFavourite: (bookId: number) => void;
  getBooksByWriter: (writerId: number) => BookItem[];
  getBooksByCategory: (category: CategoryKey) => BookItem[];
}

// create takes set,get
export const useBookStore = create<BooksState>()(
  persist(
    //get isnt much used
    (set, get) => ({
      totalBooks: allBooks,
      favouriteBooks: [],

      addToFavourite: (bookId) => {
        const allOfThem = Object.values(get().totalBooks).flat();
        const book = allOfThem.find((el) => el.id === bookId);

        if (book && !get().favouriteBooks.some((b) => b.id === bookId)) {
          set((state) => ({
            favouriteBooks: [...state.favouriteBooks, book],
          }));
          console.log(`${book.name} added to favourites`);
        }
      },

      getBooksByWriter: (writerId) => {
        const all = Object.values(get().totalBooks).flat();
        return all.filter((el) => el.writerId === writerId);
      },

      getBooksByCategory: (category) => get().totalBooks[category],
    }),
    {
      name: "book-store",
    }
  )
);
