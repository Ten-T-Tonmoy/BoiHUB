import React from "react";
import { BookItem } from "@/lib/Interfaces/Books.Interface";
import { getRandomCover } from "../home/GetRandomCover";
import { Button } from "@/components/ui/button";

import { FaRegFolderOpen } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";

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
            {/* ----------two boxes------------- */}
            <div
              className="w-52 h-80 border border-primary absolute
            -top-4 -left-4 z-10 rounded-[4px]"
            ></div>
            <div
              className="w-52 h-80 border border-black absolute
            top-4 left-4 z-10 rounded-[4px]"
            ></div>
          </div>

          <div className="flex">
            <Button className="rounded-[4px] mt-8 rounded-r-none border-r cursor-pointer">
              Want to Read
            </Button>
            <Button className="rounded-[4px] text-xl mt-8 rounded-l-none cursor-pointer">
              <FaRegFolderOpen />
            </Button>
          </div>
        </div>

        {/* ---------------------infos nd stuffs-------------------------- */}

        <div className="md:col-span-3  ">
          <h1 className="font-semibold text-xl text-center">{book.name}</h1>
          <h2 className="gap-2 flex items-center justify-center">
            by
            <span className="text-primary ">{book.writer}</span>
          </h2>

          {/* --------ratings---------- */}
          <div>
            <p>{book.ratings.numberOfRating} Score</p>
            <p>{book.ratings.totalRating} Ratings</p>
          </div>

          <p className="border-y border-border p-2 ">
            <span className="font-black text-muted-foreground">
              {book.name} এর ভূমিকা :{" "}
            </span>
            {book.about.summary}
          </p>

          {/* --------price--------- */}
          <div className="flex justify-around items-center py-2  w-full border-b border-border">
            <p className="text-2xl font-semibold text-muted-foreground line-through">
              TK. {book.originalPrice}
            </p>
            <p className="text-2xl font-semibold ">TK. {book.currentPrice}</p>
            <p className="text-green-400 bg-green-400/20 text-lg px-2 rounded-[3px]">
              You save {book.originalPrice - book.currentPrice} TK.{" ( "}
              {((book.originalPrice - book.currentPrice) / book.originalPrice) *
                100}{" "}
              %{" )"}
            </p>
          </div>
          {/* --------fav add---------- */}
          <div className="flex justify-around p-2  ">
            <div className="flex gap-2 items-center justify-center">
              <BiDetail
                className="hover bg-primary/70 text-3xl text-white cursor-pointer
              transition-all duration-200 ease-in-out hover:text-primary hover:bg-white rounded-[3px] p-1"
              />
              <span className="text-muted-foreground ">Check out Reviews</span>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <FaHeart
                className="hover bg-primary/70 text-3xl text-white cursor-pointer
              transition-all duration-200 ease-in-out hover:text-primary hover:bg-white rounded-[3px] p-1"
              />
              <span className="text-muted-foreground ">Save</span>
            </div>
          </div>

          <Button
            className="rounded-[3px] w-full cursor-pointer py-5 text-lg"
            variant="outline"
          >
            <FaShareAlt className="scale-125" /> বন্ধুর সাথে শেয়ার করুন
          </Button>

          {/* --------------stock------------- */}
          <div className="p-2">
            <div className="flex text-green-400 items-center justify-start gap-2">
              <FaCheckCircle className="" />
              <p>In Stock ( {book.availableStock} copies available)</p>
            </div>
            <p className="text-muted-foreground text-sm ml-4">
              * স্টক আউট হওয়ার আগেই অর্ডার করুন
            </p>
          </div>

          <div
            className=" bg-destructive/5
          p-2 border border-destructive/60 rounded-[4px]"
          >
            <div className="flex items-center justify-start gap-2 text-sm">
              <MdDiscount className="text-destructive text-lg" />
              <p>৬০% পর্যন্ত ছাড় বাংলা-ইংরেজিসহ স্টকে থাকা বিদেশি বইয়ে!</p>
            </div>
            <h2 className="text-center text-primary cursor-pointer">
              আরও দেখুন {">"}
            </h2>
          </div>
        </div>

        {/* --------------------------- sugg books ------------------------------- */}
        <div className="hidden md:col-span-1 bg-blue-400">sugg col</div>
      </div>
    </div>
  );
};

export default MainView;
