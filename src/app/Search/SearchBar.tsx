"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
  const [shownText, setShownText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const placeholderTexts: string[] = [
    "বই খুঁজুন যেমন রবীন্দ্রনাথ ঠাকুরের সাহিত্য ভ্রমণ",
    "কাজী নজরুল ইসলামের কবিতা অন্বেষণ",
    "বাংলা ইতিহাস ও ঐতিহ্যের বই আবিষ্কার করুন",
    "ঘুরে দেখুন আধুনিক বাংলা উপন্যাসে নতুন দিগন্ত",
    "ঘুরে দেখুন শিশুদের জন্য সেরা গল্প ও ছড়া",
  ];
  const typingSpeed = 30;
  const deletingSpeed = 50;
  const pauseBeforeDelete = 400;

  useEffect(() => {
    const currentWord = placeholderTexts[wordIdx];
    let timeout: NodeJS.Timeout;

    if (!deleting) {
      timeout = setTimeout(() => {
        setShownText(currentWord.slice(0, charIdx + 1));
        setCharIdx(charIdx + 1);

        if (charIdx + 1 === currentWord.length) {
          // pause delay
          setTimeout(() => setDeleting(true), pauseBeforeDelete);
        }
      }, typingSpeed);
    } else {
      timeout = setTimeout(() => {
        setShownText(currentWord.slice(0, charIdx - 1));
        setCharIdx(charIdx - 1);

        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx((wordIdx + 1) % placeholderTexts.length);
        }
      }, deletingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx]);

  return (
    <div className="w-full p-4 border-border border-b">
      <div className="w-full relative ">
        <Input
          placeholder={shownText}
          className="rounded-full text-[1.1rem] px-8 border-primary/40"
          type="text"
        />
        <IoMdSearch
          className="absolute rounded-full bg-primary text-white
        text-4xl top-0 right-0 p-1  rounded-l cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SearchBar;
