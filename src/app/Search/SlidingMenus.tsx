"use client";
import React, { useState } from "react";
import { booksByCategory } from "@/lib/AllBooks";

const SlidingMenus = () => {
  const [selected, setSelected] = useState("হোমপেজ");
  const categories: Record<string, string> = {
    home: "হোমপেজ",
    ebook: "ই-বুক",
    class11: "একাদশ শ্রেণির বই",
    class12: "দ্বাদশ শ্রেণির বই",
    admission: "ভর্তি পরীক্ষার বই",
    electronics: "ইলেকট্রনিক্স",
    supershop: "সুপারশপ",
    voucher: "ভাউচার",
    literature: "সাহিত্য ও উপন্যাস",
    poetry: "কবিতা",
    islamic: "ইসলামী বই",
    science: "বিজ্ঞান ও প্রযুক্তি",
    history: "ইতিহাস ও ঐতিহ্য",
    children: "শিশুতোষ বই",
    selfDevelopment: "আত্ম উন্নয়ন ও মোটিভেশন",
    academic: "একাডেমিক বই",
    business: "ব্যবসা ও অর্থনীতি",
  };
  return (
    <div
      className="flex overflow-x-scroll border-b border-border p-2
    overflow-y-hidden scrollbar-hide gap-4 text-black/50 bg-background"
    >
      {Object.values(categories).map((category, idx) => (
        <div
          className={`flex-shrink-0 cursor-pointer
        rounded-full border border-border p-2  transition-all duration-200 ease-in-out
        ${
          selected === category
            ? "bg-primary text-white"
            : "hover:bg-primary-foreground hover:text-primary"
        }
        `}
          onClick={() => setSelected(category)}
          key={idx}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default SlidingMenus;
