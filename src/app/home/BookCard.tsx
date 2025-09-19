import React from "react";

import { Button } from "@/components/ui/button";
import { FaHeart } from "react-icons/fa";
import { getRandomCover } from "./GetRandomCover";
import { useRouter } from "next/navigation";

const BookCard = ({ book }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/book/${book.id}`)}
      className="
          flex-shrink-0 flex justify-center group gap-1 border border-border py-2
          rounded-[4px] shadow-lg
          items-center flex-col w-full cursor-pointer h-full
          "
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
      <p className="text-xs text-black/50 text-center">by {book.writer}</p>
      {book.availableStock > 0 ? (
        <p className="text-xs text-green-400/80 text-center">
          Available in Stock
        </p>
      ) : (
        <p className="text-xs text-red-400/80 text-center">Out of Stock</p>
      )}

      {/* ----------price and cart--------------- */}
      <div className="flex justify-between items-center gap-1">
        <p className="font-semibold">TK {book.currentPrice}</p>
        <p className="text-xs font-semibold text-black/70 line-through">
          TK {book.originalPrice}
        </p>
      </div>
      <div className="flex justify-between items-center gap-2 ">
        <Button className="rounded-[3px] cursor-pointer" variant={"outline"}>
          Add to Cart
        </Button>

        <FaHeart
          className="text-white bg-primary h-9 w-10 border border-primary
                p-1 rounded-[3px] hover:text-primary hover:bg-background transition-colors
                duration-200 ease-in-out"
        />
      </div>
    </div>
  );
};

export default BookCard;
