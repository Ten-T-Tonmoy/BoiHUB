import { BookItem } from "./Interfaces/Books.Interface";


// Categories list
export const categories = [
  "আত্ম উন্নয়ন ও মোটিভেশন",
  "সাহিত্য ও উপন্যাস",
  "ইসলামী বই",
  "বিজ্ঞান ও প্রযুক্তি",
  "ইতিহাস ও ঐতিহ্য",
  "শিশুতোষ বই",
  "কবিতা",
  "একাডেমিক বই",
  "ব্যবসা ও অর্থনীতি",
];

// Self Development & Motivation Books
export const selfDevelopmentBooks: BookItem[] = [
  {
    id: 11,
    name: "পার্সোনালিটির শক্তি",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Power_of_Personality-Shafi_Shaon-d8325-454484.jpg",
    subDescription: "ব্যক্তিত্ব বিকাশের গোপন সূত্র",
    writer: "শাফি শাওন",
    writerId: 201,
    category: "আত্ম উন্নয়ন ও মোটিভেশন",
    ratings: {
      numberOfRating: 8,
      totalRating: 124,
    },
    favouritedBy: 245,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Power_of_Personality-Shafi_Shaon-d8325-454484.jpg",
      summary: `আমরা যখন এক জন আরেক জনের পার্সনালিটি টাইপ সম্পর্কে জানতে পারবো তখন আমাদের ধারনা এসে যাবে- একজন কিভাবে তার চারপাশের সাথে ইন্ট্যারেক্ট করে, কিভাবে ইনফর্মেশন নেয়, কিভাবে ডিসিসন নেয়- তখন অনেক ভুল বোঝাবুঝিরই অবসান হবে।`,
    },
    publishedAt: "12 July 2014",
    availableStock: 14,
    originalPrice: 520,
    currentPrice: 400,
  },
  {
    id: 12,
    name: "জীবন যেখানে যেমন",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/9aa729284_212665.jpg",
    subDescription: "জীবনের সহজ সত্যগুলো আবিষ্কারের গল্প",
    writer: "হুমায়ূন আহমেদ",
    writerId: 101,
    category: "আত্ম উন্নয়ন ও মোটিভেশন",
    ratings: {
      numberOfRating: 9,
      totalRating: 142,
    },
    favouritedBy: 287,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/9aa729284_212665.jpg",
      summary: `জীবনের প্রতিটি ক্ষেত্রে আমরা কিছু সিদ্ধান্ত নিই, কিছু পছন্দ করি। এই বইয়ে লেখক জীবনের এমনই কিছু গুরুত্বপূর্ণ মুহূর্তের কথা বলেছেন যা আমাদের ভবিষ্যৎ নির্ধারণ করে।`,
    },
    publishedAt: "15 March 2018",
    availableStock: 22,
    originalPrice: 350,
    currentPrice: 280,
  },
  {
    id: 13,
    name: "সফল মানুষের ৭টি অভ্যাস",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/7_Habits-Stephen_Covey-d8325-454486.jpg",
    subDescription: "কার্যকর ব্যক্তিত্ব গড়ার পথনির্দেশ",
    writer: "স্টিফেন আর কভি",
    writerId: 302,
    category: "আত্ম উন্নয়ন ও মোটিভেশন",
    ratings: {
      numberOfRating: 10,
      totalRating: 198,
    },
    favouritedBy: 445,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/7_Habits-Stephen_Covey-d8325-454486.jpg",
      summary: `একজন সফল মানুষ হওয়ার জন্য প্রয়োজন সঠিক অভ্যাস গড়ে তোলা। এই বইয়ে ৭টি মৌলিক অভ্যাস নিয়ে আলোচনা করা হয়েছে যা আপনার জীবনকে সম্পূর্ণ বদলে দিতে পারে।`,
    },
    publishedAt: "8 January 2019",
    availableStock: 35,
    originalPrice: 480,
    currentPrice: 420,
  },
  {
    id: 14,
    name: "মনের জোর",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Moner_Jor-Kazi_Nazrul-d8325-454487.jpg",
    subDescription: "মানসিক শক্তি বৃদ্ধির কার্যকর উপায়",
    writer: "কাজী আনোয়ার হোসেন",
    writerId: 178,
    category: "আত্ম উন্নয়ন ও মোটিভেশন",
    ratings: {
      numberOfRating: 8,
      totalRating: 89,
    },
    favouritedBy: 167,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Moner_Jor-Kazi_Nazrul-d8325-454487.jpg",
      summary: `মানসিক শক্তি আমাদের জীবনের সবচেয়ে বড় সম্পদ। এই বইয়ে বলা হয়েছে কিভাবে আমরা আমাদের মানসিক শক্তি বাড়াতে পারি এবং জীবনের চ্যালেঞ্জগুলো মোকাবেলা করতে পারি।`,
    },
    publishedAt: "22 September 2020",
    availableStock: 18,
    originalPrice: 320,
    currentPrice: 260,
  },
  {
    id: 15,
    name: "স্বপ্ন দেখার সাহস",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Shopno_Dekhar_Sahosh-d8325-454488.jpg",
    subDescription: "বড় স্বপ্ন দেখুন, সাহসী হয়ে এগিয়ে যান",
    writer: "ড. মুহাম্মদ জাফর ইকবাল",
    writerId: 125,
    category: "আত্ম উন্নয়ন ও মোটিভেশন",
    ratings: {
      numberOfRating: 9,
      totalRating: 156,
    },
    favouritedBy: 324,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Shopno_Dekhar_Sahosh-d8325-454488.jpg",
      summary: `স্বপ্ন দেখার মধ্যেই লুকিয়ে আছে সাফল্যের বীজ। এই বইয়ে লেখক তরুণদের উৎসাহিত করেছেন বড় স্বপ্ন দেখতে এবং সেই স্বপ্ন পূরণের জন্য কঠোর পরিশ্রম করতে।`,
    },
    publishedAt: "10 February 2021",
    availableStock: 28,
    originalPrice: 380,
    currentPrice: 310,
  },
  {
    id: 16,
    name: "নেতৃত্ব গুণাবলী",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Leadership_Qualities-d8325-454489.jpg",
    subDescription: "একজন সফল নেতা হওয়ার পথ",
    writer: "জন সি ম্যাক্সওয়েল",
    writerId: 303,
    category: "আত্ম উন্নয়ন ও মোটিভেশন",
    ratings: {
      numberOfRating: 9,
      totalRating: 178,
    },
    favouritedBy: 389,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Leadership_Qualities-d8325-454489.jpg",
      summary: `নেতৃত্ব একটি শিল্প যা শেখা যায়। এই বইয়ে নেতৃত্বের মৌলিক নীতিমালা, টিম ম্যানেজমেন্ট এবং কিভাবে অন্যদের অনুপ্রাণিত করা যায় তার কার্যকর কৌশল বর্ণনা করা হয়েছে।`,
    },
    publishedAt: "5 November 2019",
    availableStock: 31,
    originalPrice: 550,
    currentPrice: 470,
  },
  {
    id: 17,
    name: "আত্মবিশ্বাসের চাবিকাঠি",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Confidence_Key-d8325-454490.jpg",
    subDescription: "আত্মবিশ্বাস বৃদ্ধির বৈজ্ঞানিক পদ্ধতি",
    writer: "ব্রায়ান ট্রেসি",
    writerId: 304,
    category: "আত্ম উন্নয়ন ও মোটিভেশন",
    ratings: {
      numberOfRating: 8,
      totalRating: 134,
    },
    favouritedBy: 267,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Confidence_Key-d8325-454490.jpg",
      summary: `আত্মবিশ্বাস সফলতার মূল চাবিকাঠি। এই বইয়ে প্রমাণিত বৈজ্ঞানিক পদ্ধতিতে আত্মবিশ্বাস বৃদ্ধির কৌশল, নেগেটিভ চিন্তা দূর করার উপায় এবং পজিটিভ মানসিকতা তৈরির গোপন সূত্র আলোচনা করা হয়েছে।`,
    },
    publishedAt: "18 June 2020",
    availableStock: 25,
    originalPrice: 420,
    currentPrice: 350,
  },
  {
    id: 18,
    name: "সময় ব্যবস্থাপনা",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Time_Management-d8325-454491.jpg",
    subDescription: "সময়ের সদ্ব্যবহারে সাফল্যের পথ",
    writer: "স্টিফেন কোভি",
    writerId: 302,
    category: "আত্ম উন্নয়ন ও মোটিভেশন",
    ratings: {
      numberOfRating: 9,
      totalRating: 165,
    },
    favouritedBy: 312,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Time_Management-d8325-454491.jpg",
      summary: `সময়ই আমাদের সবচেয়ে মূল্যবান সম্পদ। এই বইয়ে সময়ের সঠিক ব্যবহার, অগ্রাধিকার নির্ধারণ, কাজের পরিকল্পনা এবং দৈনন্দিন জীবনে উৎপাদনশীলতা বৃদ্ধির কার্যকর কৌশল শেখানো হয়েছে।`,
    },
    publishedAt: "3 April 2021",
    availableStock: 33,
    originalPrice: 460,
    currentPrice: 390,
  },
  {
    id: 19,
    name: "ইতিবাচক চিন্তার শক্তি",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Positive_Thinking-d8325-454492.jpg",
    subDescription: "ইতিবাচক মানসিকতা গড়ে তোলার উপায়",
    writer: "নর্মান ভিনসেন্ট পিল",
    writerId: 305,
    category: "আত্ম উন্নয়ন ও মোটিভেশন",
    ratings: {
      numberOfRating: 10,
      totalRating: 201,
    },
    favouritedBy: 456,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Positive_Thinking-d8325-454492.jpg",
      summary: `ইতিবাচক চিন্তাভাবনা জীবনে অসাধারণ পরিবর্তন আনতে পারে। এই বইয়ে দেখানো হয়েছে কিভাবে নেতিবাচক চিন্তা পরিহার করে, ইতিবাচক দৃষ্টিভঙ্গি গড়ে তুলতে হয় এবং সেই শক্তি দিয়ে জীবনের লক্ষ্য অর্জন করতে হয়।`,
    },
    publishedAt: "27 August 2019",
    availableStock: 29,
    originalPrice: 390,
    currentPrice: 320,
  },
  {
    id: 20,
    name: "ক্যারিয়ার গড়ার কৌশল",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Career_Building-d8325-454493.jpg",
    subDescription: "সফল ক্যারিয়ার গড়ার পূর্ণাঙ্গ গাইড",
    writer: "রিচার্ড নেলসন বোলস",
    writerId: 306,
    category: "আত্ম উন্নয়ন ও মোটিভেশন",
    ratings: {
      numberOfRating: 8,
      totalRating: 143,
    },
    favouritedBy: 278,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Career_Building-d8325-454493.jpg",
      summary: `একটি সফল ক্যারিয়ার গড়তে চাইলে সঠিক পরিকল্পনা এবং কৌশল জানা জরুরি। এই বইয়ে ক্যারিয়ার নির্বাচন, দক্ষতা উন্নয়ন, নেটওয়ার্কিং, চাকরির ইন্টারভিউ এবং পেশাগত জীবনে এগিয়ে চলার সব কৌশল বর্ণনা করা হয়েছে।`,
    },
    publishedAt: "16 January 2022",
    availableStock: 37,
    originalPrice: 580,
    currentPrice: 490,
  },
];

// History Books
export const historyBooks: BookItem[] = [
  {
    id: 51,
    name: "বাংলাদেশের স্বাধীনতা যুদ্ধ",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Bangladesh_Independence_War-d8325-454504.jpg",
    subDescription: "মুক্তিযুদ্ধের সম্পূর্ণ ইতিহাস",
    writer: "ড. গোলাম ওয়াহেদ চৌধুরী",
    writerId: 601,
    category: "ইতিহাস ও ঐতিহ্য",
    ratings: {
      numberOfRating: 10,
      totalRating: 987,
    },
    favouritedBy: 2134,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Bangladesh_Independence_War-d8325-454504.jpg",
      summary: `১৯৭১ সালের মহান মুক্তিযুদ্ধের বিস্তারিত ইতিহাস এই বইয়ে তুলে ধরা হয়েছে। বীর মুক্তিযোদ্ধাদের আত্মত্যাগ এবং স্বাধীনতার সংগ্রামের প্রতিটি মুহূর্ত এখানে বর্ণিত।`,
    },
    publishedAt: "26 March 2020",
    availableStock: 56,
    originalPrice: 750,
    currentPrice: 650,
  },
  {
    id: 52,
    name: "মুঘল সাম্রাজ্যের ইতিহাস",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Mughal_Empire-d8325-454505.jpg",
    subDescription: "ভারতবর্ষে মুঘল শাসনের কাহিনী",
    writer: "প্রফেসর সিরাজুল ইসলাম চৌধুরী",
    writerId: 602,
    category: "ইতিহাস ও ঐতিহ্য",
    ratings: {
      numberOfRating: 9,
      totalRating: 678,
    },
    favouritedBy: 1456,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Mughal_Empire-d8325-454505.jpg",
      summary: `মুঘল সাম্রাজ্যের উত্থান থেকে পতন পর্যন্ত সম্পূর্ণ ইতিহাস এই বইয়ে লিপিবদ্ধ। আকবর, শাহজাহান, আওরঙ্গজেবের মতো সম্রাটদের শাসনকাল নিয়ে বিস্তারিত আলোচনা রয়েছে।`,
    },
    publishedAt: "14 August 2017",
    availableStock: 43,
    originalPrice: 680,
    currentPrice: 580,
  },
  {
    id: 53,
    name: "বাংলার সুলতানি আমল",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Bengal_Sultanate-d8325-454506.jpg",
    subDescription: "মধ্যযুগীয় বাংলার মুসলিম শাসন",
    writer: "ড. এ কে এম শাহনাওয়াজ",
    writerId: 603,
    category: "ইতিহাস ও ঐতিহ্য",
    ratings: {
      numberOfRating: 8,
      totalRating: 345,
    },
    favouritedBy: 789,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Bengal_Sultanate-d8325-454506.jpg",
      summary: `বাংলার সুলতানি আমলে এ অঞ্চলের রাজনৈতিক, সামাজিক ও সাংস্কৃতিক উন্নতির চিত্র তুলে ধরা হয়েছে এই বইয়ে। সুলতানদের শাসনামল এবং তাদের অবদান নিয়ে বিস্তারিত আলোচনা রয়েছে।`,
    },
    publishedAt: "2 December 2019",
    availableStock: 31,
    originalPrice: 520,
    currentPrice: 460,
  },
  {
    id: 54,
    name: "আমাদের স্বাধীনতা সংগ্রাম",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Our_Freedom_Struggle-d8325-454507.jpg",
    subDescription: "ব্রিটিশ বিরোধী আন্দোলনের ইতিহাস",
    writer: "আবুল মনসুর আহমদ",
    writerId: 604,
    category: "ইতিহাস ও ঐতিহ্য",
    ratings: {
      numberOfRating: 9,
      totalRating: 456,
    },
    favouritedBy: 987,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Our_Freedom_Struggle-d8325-454507.jpg",
      summary: `ব্রিটিশ শাসনের বিরুদ্ধে বাঙালিদের স্বাধীনতা সংগ্রামের এক অনন্য দলিল এই বই। ঐতিহাসিক ঘটনা এবং মহান ব্যক্তিত্বদের অবদান এখানে বিবৃত হয়েছে।`,
    },
    publishedAt: "21 February 2016",
    availableStock: 38,
    originalPrice: 420,
    currentPrice: 370,
  },
  {
    id: 55,
    name: "বঙ্গবন্ধুর জীবনী",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Bangabandhu_Biography-d8325-454508.jpg",
    subDescription: "জাতির পিতার সংগ্রামী জীবন",
    writer: "শেখ মুজিবুর রহমান (আত্মজীবনী)",
    writerId: 605,
    category: "ইতিহাস ও ঐতিহ্য",
    ratings: {
      numberOfRating: 10,
      totalRating: 1567,
    },
    favouritedBy: 3456,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Bangabandhu_Biography-d8325-454508.jpg",
      summary: `জাতির পিতা বঙ্গবন্ধু শেখ মুজিবুর রহমানের জীবন ছিল সংগ্রামের এক অধ্যায়। এই বইয়ে তার রাজনৈতিক জীবন, আন্দোলন-সংগ্রাম এবং বাংলাদেশ প্রতিষ্ঠায় তার অবদানের কথা বলা হয়েছে।`,
    },
    publishedAt: "15 August 2018",
    availableStock: 78,
    originalPrice: 650,
    currentPrice: 550,
  },
];

// Children's Books
export const childrenBooks: BookItem[] = [
  {
    id: 61,
    name: "দিপু নাম্বার টু",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Dipu_Number_Two-Humayun_Ahmed-d8325-454509.jpg",
    subDescription: "শিশুদের প্রিয় দিপুর কাহিনী",
    writer: "হুমায়ূন আহমেদ",
    writerId: 101,
    category: "শিশুতোষ বই",
    ratings: {
      numberOfRating: 10,
      totalRating: 789,
    },
    favouritedBy: 1678,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Dipu_Number_Two-Humayun_Ahmed-d8325-454509.jpg",
      summary: `দিপু একটি সাহসী ছেলে যার নানা রকম অ্যাডভেঞ্চার ও রোমাঞ্চকর গল্প। শিশুরা দিপুর সাথে একাত্ম হয়ে গল্পের মজা নেয় এবং সাহস ও বন্ধুত্বের শিক্ষা পায়।`,
    },
    publishedAt: "10 June 2000",
    availableStock: 45,
    originalPrice: 250,
    currentPrice: 200,
  },
  {
    id: 62,
    name: "আমার ছেলেবেলা",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Amar_Chelebela-Jagadish_Chandra_Bose-d8325-454510.jpg",
    subDescription: "জগদীশচন্দ্র বসুর শৈশবের গল্প",
    writer: "জগদীশচন্দ্র বসু",
    writerId: 701,
    category: "শিশুতোষ বই",
    ratings: {
      numberOfRating: 9,
      totalRating: 456,
    },
    favouritedBy: 879,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Amar_Chelebela-Jagadish_Chandra_Bose-d8325-454510.jpg",
      summary: `বিখ্যাত বিজ্ঞানী জগদীশচন্দ্র বসুর শৈশবের স্মৃতিকথা। শিশুরা এই বই পড়ে জানতে পারবে কিভাবে একটি সাধারণ শিশু পরবর্তীতে একজন মহান বিজ্ঞানী হয়ে উঠেছিলেন।`,
    },
    publishedAt: "5 September 1998",
    availableStock: 33,
    originalPrice: 180,
    currentPrice: 150,
  },
  {
    id: 63,
    name: "হাসি খুশির গল্প",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Hasi_Khushir_Golpo-d8325-454511.jpg",
    subDescription: "শিশুদের জন্য মজার মজার গল্প",
    writer: "শিশু সাহিত্যিক ফরিদা খান",
    writerId: 702,
    category: "শিশুতোষ বই",
    ratings: {
      numberOfRating: 8,
      totalRating: 345,
    },
    favouritedBy: 567,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Hasi_Khushir_Golpo-d8325-454511.jpg",
      summary: `ছোটদের মন ভালো করার জন্য অনেকগুলো হাসির গল্প নিয়ে সাজানো এই বইটি। প্রতিটি গল্পে আছে শিক্ষণীয় বিষয় যা শিশুদের চরিত্র গঠনে সাহায্য করবে।`,
    },
    publishedAt: "20 January 2021",
    availableStock: 52,
    originalPrice: 220,
    currentPrice: 180,
  },
  {
    id: 64,
    name: "বুদ্ধু ভূত",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Buddhu_Bhut-Leela_Majumder-d8325-454512.jpg",
    subDescription: "লীলা মজুমদারের মজার ভূতের গল্প",
    writer: "লীলা মজুমদার",
    writerId: 703,
    category: "শিশুতোষ বই",
    ratings: {
      numberOfRating: 9,
      totalRating: 567,
    },
    favouritedBy: 1234,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Buddhu_Bhut-Leela_Majumder-d8325-454512.jpg",
      summary: `বুদ্ধু নামের এক মজার ভূতের গল্প যে কিনা একদমই ভয়ংকর নয়, বরং অত্যন্ত বোকা এবং হাস্যকর। শিশুরা এই গল্প পড়ে ভূতের ভয় ভুলে গিয়ে হাসতে হাসতে পড়বে।`,
    },
    publishedAt: "12 October 1995",
    availableStock: 41,
    originalPrice: 200,
    currentPrice: 170,
  },
  {
    id: 65,
    name: "পশু পাখির গল্প",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Poshu_Pakhir_Golpo-d8325-454513.jpg",
    subDescription: "প্রাণী জগতের শিক্ষণীয় গল্প",
    writer: "আকবর আলী খান",
    writerId: 704,
    category: "শিশুতোষ বই",
    ratings: {
      numberOfRating: 8,
      totalRating: 234,
    },
    favouritedBy: 445,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Poshu_Pakhir_Golpo-d8325-454513.jpg",
      summary: `বিভিন্ন পশুপাখির মাধ্যমে নৈতিক শিক্ষার গল্প সংকলন। প্রতিটি গল্পে আছে একটি করে শিক্ষা যা শিশুদের চরিত্র গঠনে সাহায্য করবে এবং তাদের পশুপাখির প্রতি ভালোবাসা তৈরি করবে।`,
    },
    publishedAt: "8 March 2019",
    availableStock: 29,
    originalPrice: 190,
    currentPrice: 160,
  },
];

// Poetry Books
export const poetryBooks: BookItem[] = [
  {
    id: 71,
    name: "গীতাঞ্জলি",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Gitanjali-Rabindranath_Tagore-d8325-454514.jpg",
    subDescription: "রবীন্দ্রনাথের অমর কাব্যগ্রন্থ",
    writer: "রবীন্দ্রনাথ ঠাকুর",
    writerId: 1,
    category: "কবিতা",
    ratings: {
      numberOfRating: 10,
      totalRating: 1456,
    },
    favouritedBy: 2789,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Gitanjali-Rabindranath_Tagore-d8325-454514.jpg",
      summary: `গীতাঞ্জলি বিশ্বকবি রবীন্দ্রনাথ ঠাকুরের নোবেল পুরস্কার প্রাপ্ত কাব্যগ্রন্থ। এতে রয়েছে আধ্যাত্মিকতা, প্রেম এবং প্রকৃতির অনন্য কবিতা যা পাঠকদের হৃদয় স্পর্শ করে।`,
    },
    publishedAt: "15 August 1910",
    availableStock: 67,
    originalPrice: 420,
    currentPrice: 350,
  },
  {
    id: 72,
    name: "বিদ্রোহী",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Bidrohi-Kazi_Nazrul_Islam-d8325-454515.jpg",
    subDescription: "কাজী নজরুল ইসলামের বিখ্যাত কবিতা",
    writer: "কাজী নজরুল ইসলাম",
    writerId: 801,
    category: "কবিতা",
    ratings: {
      numberOfRating: 10,
      totalRating: 987,
    },
    favouritedBy: 1867,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Bidrohi-Kazi_Nazrul_Islam-d8325-454515.jpg",
      summary: `বিদ্রোহী কবিতাটি নজরুলের সবচেয়ে বিখ্যাত রচনা। এই কবিতায় কবি অন্যায়ের বিরুদ্ধে বিদ্রোহের কথা বলেছেন এবং মানুষের মধ্যে সাহস ও শক্তি সঞ্চার করেছেন।`,
    },
    publishedAt: "12 January 1922",
    availableStock: 54,
    originalPrice: 280,
    currentPrice: 230,
  },
  {
    id: 73,
    name: "রূপসী বাংলা",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Ruposhi_Bangla-Jibanananda_Das-d8325-454516.jpg",
    subDescription: "জীবনানন্দ দাশের প্রকৃতি প্রেমের কবিতা",
    writer: "জীবনানন্দ দাশ",
    writerId: 802,
    category: "কবিতা",
    ratings: {
      numberOfRating: 9,
      totalRating: 678,
    },
    favouritedBy: 1345,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Ruposhi_Bangla-Jibanananda_Das-d8325-454516.jpg",
      summary: `রূপসী বাংলা জীবনানন্দ দাশের অন্যতম শ্রেষ্ঠ কাব্যগ্রন্থ। এতে বাংলার প্রকৃতি, গ্রামের সৌন্দর্য এবং মাতৃভূমির প্রতি ভালোবাসার অপূর্ব বর্ণনা রয়েছে।`,
    },
    publishedAt: "25 October 1957",
    availableStock: 38,
    originalPrice: 360,
    currentPrice: 300,
  },
  {
    id: 74,
    name: "আমার সোনার বাংলা",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Amar_Sonar_Bangla-d8325-454517.jpg",
    subDescription: "জাতীয় সংগীতসহ রবীন্দ্রনাথের দেশাত্মবোধক কবিতা",
    writer: "রবীন্দ্রনাথ ঠাকুর",
    writerId: 1,
    category: "কবিতা",
    ratings: {
      numberOfRating: 10,
      totalRating: 1234,
    },
    favouritedBy: 2456,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Amar_Sonar_Bangla-d8325-454517.jpg",
      summary: `আমার সোনার বাংলা আমি তোমায় ভালোবাসি - এই অমর কবিতাটি আজ আমাদের জাতীয় সংগীত। এই সংকলনে রয়েছে রবীন্দ্রনাথের দেশপ্রেমমূলক অনেক কবিতা।`,
    },
    publishedAt: "30 April 1906",
    availableStock: 89,
    originalPrice: 320,
    currentPrice: 270,
  },
  {
    id: 75,
    name: "চলো চলো চলো",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Cholo_Cholo_Cholo-d8325-454518.jpg",
    subDescription: "নজরুলের উৎসাহব্যঞ্জক কবিতা সংকলন",
    writer: "কাজী নজরুল ইসলাম",
    writerId: 801,
    category: "কবিতা",
    ratings: {
      numberOfRating: 9,
      totalRating: 445,
    },
    favouritedBy: 789,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Cholo_Cholo_Cholo-d8325-454518.jpg",
      summary: `চলো চলো চলো উর্ধ্বগগনে বাজে মাদল - এই কবিতাসহ নজরুলের অনেক উৎসাহব্যঞ্জক কবিতার সংকলন। এই কবিতাগুলো পাঠকদের মধ্যে কর্মপ্রেরণা সৃষ্টি করে।`,
    },
    publishedAt: "18 May 1928",
    availableStock: 43,
    originalPrice: 290,
    currentPrice: 250,
  },
];

// Academic Books
export const academicBooks: BookItem[] = [
  {
    id: 81,
    name: "উচ্চতর গণিত",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Higher_Mathematics-d8325-454519.jpg",
    subDescription: "একাদশ-দ্বাদশ শ্রেণীর গণিত",
    writer: "ড. সরদার আবুল কাশেম",
    writerId: 901,
    category: "একাডেমিক বই",
    ratings: {
      numberOfRating: 8,
      totalRating: 567,
    },
    favouritedBy: 1234,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Higher_Mathematics-d8325-454519.jpg",
      summary: `একাদশ ও দ্বাদশ শ্রেণীর শিক্ষার্থীদের জন্য উচ্চতর গণিতের সম্পূর্ণ সিলেবাস এই বইয়ে রয়েছে। ক্যালকুলাস, অ্যালজেব্রা এবং জ্যামিতির জটিল বিষয়গুলো সহজভাবে ব্যাখ্যা করা হয়েছে।`,
    },
    publishedAt: "1 January 2022",
    availableStock: 76,
    originalPrice: 820,
    currentPrice: 720,
  },
  {
    id: 82,
    name: "বাংলা ব্যাকরণ ও নির্মিতি",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Bangla_Grammar-d8325-454520.jpg",
    subDescription: "বাংলা ভাষার সম্পূর্ণ ব্যাকরণ",
    writer: "ড. হায়াত মামুদ",
    writerId: 902,
    category: "একাডেমিক বই",
    ratings: {
      numberOfRating: 9,
      totalRating: 789,
    },
    favouritedBy: 1567,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Bangla_Grammar-d8325-454520.jpg",
      summary: `বাংলা ভাষার ব্যাকরণের সকল নিয়মকানুন এবং নির্মিতি এই বইয়ে বিস্তারিতভাবে আলোচিত হয়েছে। ছাত্রছাত্রীদের জন্য এটি একটি অপরিহার্য গ্রন্থ।`,
    },
    publishedAt: "15 February 2021",
    availableStock: 92,
    originalPrice: 650,
    currentPrice: 550,
  },
  {
    id: 83,
    name: "পদার্থবিজ্ঞান (দ্বিতীয় পত্র)",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Physics_Second_Paper-d8325-454521.jpg",
    subDescription: "একাদশ-দ্বাদশ শ্রেণীর পদার্থবিজ্ঞান",
    writer: "প্রফেসর শাজাহান তাপাদার",
    writerId: 903,
    category: "একাডেমিক বই",
    ratings: {
      numberOfRating: 8,
      totalRating: 456,
    },
    favouritedBy: 987,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Physics_Second_Paper-d8325-454521.jpg",
      summary: `পদার্থবিজ্ঞানের জটিল বিষয়গুলো সহজ ভাষায় ব্যাখ্যা করা হয়েছে এই বইয়ে। তড়িৎ, চুম্বক, আলো এবং আধুনিক পদার্থবিজ্ঞানের বিভিন্ন বিষয় অন্তর্ভুক্ত রয়েছে।`,
    },
    publishedAt: "10 March 2020",
    availableStock: 58,
    originalPrice: 750,
    currentPrice: 650,
  },
  {
    id: 84,
    name: "রসায়ন (প্রথম পত্র)",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Chemistry_First_Paper-d8325-454522.jpg",
    subDescription: "উচ্চ মাধ্যমিক রসায়ন বই",
    writer: "ড. মোহাম্মদ আজিজুর রহমান",
    writerId: 904,
    category: "একাডেমিক বই",
    ratings: {
      numberOfRating: 8,
      totalRating: 345,
    },
    favouritedBy: 678,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Chemistry_First_Paper-d8325-454522.jpg",
      summary: `রসায়নের মৌলিক ধারণা থেকে শুরু করে জৈব রসায়নের বিভিন্ন বিষয় এই বইয়ে সুন্দরভাবে সাজানো হয়েছে। পরীক্ষার প্রস্তুতির জন্য এটি একটি আদর্শ বই।`,
    },
    publishedAt: "22 April 2019",
    availableStock: 64,
    originalPrice: 680,
    currentPrice: 580,
  },
  {
    id: 85,
    name: "ইংরেজি ব্যাকরণ ও রচনা",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/English_Grammar-d8325-454523.jpg",
    subDescription: "ইংরেজি ভাষা শিক্ষার সম্পূর্ণ গাইড",
    writer: "প্রফেসর আব্দুস সাত্তার",
    writerId: 905,
    category: "একাডেমিক বই",
    ratings: {
      numberOfRating: 9,
      totalRating: 567,
    },
    favouritedBy: 1123,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/English_Grammar-d8325-454523.jpg",
      summary: `ইংরেজি ব্যাকরণের নিয়মকানুন এবং রচনা লেখার কৌশল এই বইয়ে বিস্তারিতভাবে আলোচিত হয়েছে। ইংরেজি ভাষা শেখার জন্য এটি একটি অপরিহার্য সহায়ক বই।`,
    },
    publishedAt: "5 July 2020",
    availableStock: 47,
    originalPrice: 520,
    currentPrice: 450,
  },
];

// Business & Economics Books
export const businessBooks: BookItem[] = [
  {
    id: 91,
    name: "ব্যবসায় সফলতার কৌশল",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Business_Success_Strategy-d8325-454524.jpg",
    subDescription: "আধুনিক ব্যবসায়িক কৌশল ও পরিকল্পনা",
    writer: "এনায়েত করিম",
    writerId: 1001,
    category: "ব্যবসা ও অর্থনীতি",
    ratings: {
      numberOfRating: 8,
      totalRating: 345,
    },
    favouritedBy: 678,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Business_Success_Strategy-d8325-454524.jpg",
      summary: `ব্যবসায় সফল হওয়ার জন্য প্রয়োজন সঠিক পরিকল্পনা ও কৌশল। এই বইয়ে আধুনিক ব্যবসায়িক পদ্ধতি, মার্কেটিং কৌশল এবং আর্থিক ব্যবস্থাপনার বিভিন্ন দিক নিয়ে আলোচনা করা হয়েছে।`,
    },
    publishedAt: "12 September 2021",
    availableStock: 34,
    originalPrice: 580,
    currentPrice: 480,
  },
  {
    id: 92,
    name: "বাংলাদেশের অর্থনীতি",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Bangladesh_Economy-d8325-454525.jpg",
    subDescription: "বাংলাদেশের অর্থনৈতিক ইতিহাস ও বর্তমান অবস্থা",
    writer: "ড. আতিউর রহমান",
    writerId: 1002,
    category: "ব্যবসা ও অর্থনীতি",
    ratings: {
      numberOfRating: 9,
      totalRating: 456,
    },
    favouritedBy: 789,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Bangladesh_Economy-d8325-454525.jpg",
      summary: `স্বাধীনতার পর থেকে বাংলাদেশের অর্থনৈতিক উন্নতির ধারাবাহিক চিত্র এই বইয়ে তুলে ধরা হয়েছে। কৃষি, শিল্প, সেবা খাতের বিকাশ এবং ভবিষ্যৎ সম্ভাবনা নিয়ে বিস্তারিত আলোচনা রয়েছে।`,
    },
    publishedAt: "26 March 2019",
    availableStock: 45,
    originalPrice: 650,
    currentPrice: 550,
  },
  {
    id: 93,
    name: "অর্থনীতির মৌলিক বিষয়",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Basic_Economics-d8325-454526.jpg",
    subDescription: "অর্থনীতির প্রাথমিক ধারণা ও নীতিমালা",
    writer: "প্রফেসর নুরুল ইসলাম",
    writerId: 1003,
    category: "ব্যবসা ও অর্থনীতি",
    ratings: {
      numberOfRating: 8,
      totalRating: 234,
    },
    favouritedBy: 456,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Basic_Economics-d8325-454526.jpg",
      summary: `অর্থনীতির মূল ধারণা, চাহিদা ও যোগান, বাজার ব্যবস্থা, মুদ্রাস্ফীতি ইত্যাদি বিষয় সহজ ভাষায় ব্যাখ্যা করা হয়েছে। অর্থনীতি বিষয়ে আগ্রহীদের জন্য একটি প্রাথমিক বই।`,
    },
    publishedAt: "18 June 2020",
    availableStock: 52,
    originalPrice: 420,
    currentPrice: 360,
  },
  {
    id: 94,
    name: "ব্যাংকিং ও বীমা",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Banking_Insurance-d8325-454527.jpg",
    subDescription: "ব্যাংকিং ও বীমা ব্যবসার পূর্ণাঙ্গ গাইড",
    writer: "খোন্দকার ইব্রাহিম খালেদ",
    writerId: 1004,
    category: "ব্যবসা ও অর্থনীতি",
    ratings: {
      numberOfRating: 8,
      totalRating: 189,
    },
    favouritedBy: 367,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Banking_Insurance-d8325-454527.jpg",
      summary: `ব্যাংকিং ও বীমা খাতের কার্যক্রম, নীতিমালা এবং বিভিন্ন সেবা সম্পর্কে বিস্তারিত তথ্য এই বইয়ে দেওয়া হয়েছে। এই ক্ষেত্রে ক্যারিয়ার গড়তে ইচ্ছুকদের জন্য এটি একটি সহায়ক গ্রন্থ।`,
    },
    publishedAt: "30 November 2018",
    availableStock: 28,
    originalPrice: 480,
    currentPrice: 420,
  },
  {
    id: 95,
    name: "উদ্যোক্তা হওয়ার পথ",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Path_to_Entrepreneur-d8325-454528.jpg",
    subDescription: "সফল উদ্যোক্তা হওয়ার দিকনির্দেশনা",
    writer: "রাগিব হাসান",
    writerId: 1005,
    category: "ব্যবসা ও অর্থনীতি",
    ratings: {
      numberOfRating: 9,
      totalRating: 567,
    },
    favouritedBy: 1234,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Path_to_Entrepreneur-d8325-454528.jpg",
      summary: `উদ্যোক্তা হওয়ার জন্য প্রয়োজনীয় গুণাবলী, ব্যবসায়িক পরিকল্পনা প্রণয়ন, অর্থায়ন এবং ঝুঁকি ব্যবস্থাপনার বিভিন্ন দিক নিয়ে আলোচনা করা হয়েছে। নতুন উদ্যোক্তাদের জন্য একটি প্রয়োজনীয় বই।`,
    },
    publishedAt: "7 August 2021",
    availableStock: 41,
    originalPrice: 520,
    currentPrice: 450,
  },
];

// Literature & Fiction Books
export const literatureBooks: BookItem[] = [
  {
    id: 21,
    name: "মিসির আলি সমগ্র ১",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Misir_Ali_Somogro_1-Humayun_Ahmed-d8325-454489.jpg",
    subDescription: "রহস্যময় মিসির আলির প্রথম সংকলন",
    writer: "হুমায়ূন আহমেদ",
    writerId: 101,
    category: "সাহিত্য ও উপন্যাস",
    ratings: {
      numberOfRating: 10,
      totalRating: 342,
    },
    favouritedBy: 789,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Misir_Ali_Somogro_1-Humayun_Ahmed-d8325-454489.jpg",
      summary: `মিসির আলি হুমায়ূন আহমেদের সৃষ্ট এক অবিস্মরণীয় চরিত্র। একজন মনোবিজ্ঞানী হিসেবে তিনি সমাধান করেন নানা রহস্যময় ঘটনার। এই সংকলনে রয়েছে তার প্রথম দিকের কয়েকটি উপন্যাস।`,
    },
    publishedAt: "5 April 2005",
    availableStock: 45,
    originalPrice: 650,
    currentPrice: 520,
  },
  {
    id: 22,
    name: "আমি তপু",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Ami_Tapu-Buddhadeb_Guha-d8325-454490.jpg",
    subDescription: "বুদ্ধদেব গুহের অমর সৃষ্টি তপুর গল্প",
    writer: "বুদ্ধদেব গুহ",
    writerId: 205,
    category: "সাহিত্য ও উপন্যাস",
    ratings: {
      numberOfRating: 9,
      totalRating: 287,
    },
    favouritedBy: 623,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Ami_Tapu-Buddhadeb_Guha-d8325-454490.jpg",
      summary: `তপু একটি চরিত্র যার মধ্যে দিয়ে লেখক প্রকৃতি ও মানুষের সম্পর্কের এক অনন্য চিত্র তুলে ধরেছেন। জঙ্গল আর পাহাড়ের কাহিনী বলা এই উপন্যাসটি পাঠকদের হৃদয় ছুঁয়ে যায়।`,
    },
    publishedAt: "12 November 2003",
    availableStock: 33,
    originalPrice: 420,
    currentPrice: 350,
  },
  {
    id: 23,
    name: "কালো বরফ",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Kalo_Borof-Humayun_Ahmed-d8325-454491.jpg",
    subDescription: "একটি রহস্যময় প্রেমের গল্প",
    writer: "হুমায়ূন আহমেদ",
    writerId: 101,
    category: "সাহিত্য ও উপন্যাস",
    ratings: {
      numberOfRating: 8,
      totalRating: 198,
    },
    favouritedBy: 456,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Kalo_Borof-Humayun_Ahmed-d8325-454491.jpg",
      summary: `কালো বরফ একটি রহস্যময় উপন্যাস যেখানে প্রেম, বিরহ আর রহস্যের এক অদ্ভুত মেলবন্ধন। হুমায়ূন আহমেদের এই বইটি পাঠকদের মনে গভীর প্রভাব ফেলে।`,
    },
    publishedAt: "18 August 2001",
    availableStock: 27,
    originalPrice: 380,
    currentPrice: 320,
  },
  {
    id: 24,
    name: "পদ্মা নদীর মাঝি",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Padma_Nadir_Majhi-Manik_Bandopadhyay-d8325-454492.jpg",
    subDescription: "মানিক বন্দ্যোপাধ্যায়ের অবিস্মরণীয় কৃতি",
    writer: "মানিক বন্দ্যোপাধ্যায়",
    writerId: 157,
    category: "সাহিত্য ও উপন্যাস",
    ratings: {
      numberOfRating: 10,
      totalRating: 445,
    },
    favouritedBy: 892,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Padma_Nadir_Majhi-Manik_Bandopadhyay-d8325-454492.jpg",
      summary: `পদ্মা নদীর মাঝিরা যে জীবনযাত্রার মধ্য দিয়ে দিনাতিপাত করে, তার এক বাস্তব চিত্র এই উপন্যাসে। দারিদ্র্য, সংগ্রাম আর প্রেমের এক অনন্য কাহিনী এটি।`,
    },
    publishedAt: "25 June 1936",
    availableStock: 52,
    originalPrice: 450,
    currentPrice: 380,
  },
  {
    id: 25,
    name: "শেষের কবিতা",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Shesher_Kobita-Rabindranath_Tagore-d8325-454493.jpg",
    subDescription: "রবীন্দ্রনাথ ঠাকুরের প্রেমের উপন্যাস",
    writer: "রবীন্দ্রনাথ ঠাকুর",
    writerId: 0o1,
    category: "সাহিত্য ও উপন্যাস",
    ratings: {
      numberOfRating: 10,
      totalRating: 567,
    },
    favouritedBy: 1245,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Shesher_Kobita-Rabindranath_Tagore-d8325-454493.jpg",
      summary: `শেষের কবিতা রবীন্দ্রনাথের একটি অনন্য সৃষ্টি যেখানে প্রেম, কবিতা আর দর্শনের এক অপূর্ব সংমিশ্রণ ঘটেছে। অমিত আর লাবণ্যের প্রেমের গল্পটি আজও পাঠকদের হৃদয় স্পর্শ করে।`,
    },
    publishedAt: "10 January 1929",
    availableStock: 67,
    originalPrice: 520,
    currentPrice: 450,
  },
];

// Islamic Books
export const islamicBooks: BookItem[] = [
  {
    id: 31,
    name: "কুরআন মজীদ (বাংলা অনুবাদ)",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Quran_Majid_Bangla-d8325-454494.jpg",
    subDescription: "পবিত্র কুরআনের সহজ বাংলা অনুবাদ",
    writer: "মাওলানা মুহিউদ্দীন খান",
    writerId: 401,
    category: "ইসলামী বই",
    ratings: {
      numberOfRating: 10,
      totalRating: 1234,
    },
    favouritedBy: 2345,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Quran_Majid_Bangla-d8325-454494.jpg",
      summary: `পবিত্র কুরআনের এই অনুবাদটি সহজ ও সাবলীল বাংলায় করা হয়েছে যাতে সকল স্তরের পাঠকরা আল্লাহর বাণী বুঝতে পারেন। প্রতিটি আয়াতের ব্যাখ্যা সহ উপস্থাপন করা হয়েছে।`,
    },
    publishedAt: "15 Ramadan 1995",
    availableStock: 89,
    originalPrice: 850,
    currentPrice: 750,
  },
  {
    id: 32,
    name: "রিয়াদুস সালেহীন",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Riyadus_Saleheen-d8325-454495.jpg",
    subDescription: "হাদীস সংকলনের অমূল্য গ্রন্থ",
    writer: "ইমাম নববী",
    writerId: 402,
    category: "ইসলামী বই",
    ratings: {
      numberOfRating: 9,
      totalRating: 678,
    },
    favouritedBy: 1456,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Riyadus_Saleheen-d8325-454495.jpg",
      summary: `রিয়াদুস সালেহীন ইসলামী জীবনযাত্রার জন্য একটি গুরুত্বপূর্ণ গ্রন্থ। এতে রয়েছে নবী (সা.) এর হাদীসের মাধ্যমে জীবন পরিচালনার দিকনির্দেশনা।`,
    },
    publishedAt: "3 Shawwal 2010",
    availableStock: 47,
    originalPrice: 680,
    currentPrice: 580,
  },
  {
    id: 33,
    name: "সীরাতুন নবী",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Siratun_Nabi-d8325-454496.jpg",
    subDescription: "রাসূল (সা.) এর পবিত্র জীবনী",
    writer: "আল্লামা শিবলী নোমানী",
    writerId: 403,
    category: "ইসলামী বই",
    ratings: {
      numberOfRating: 10,
      totalRating: 892,
    },
    favouritedBy: 1789,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Siratun_Nabi-d8325-454496.jpg",
      summary: `মহানবী হযরত মুহাম্মদ (সা.) এর জীবনের প্রতিটি দিক নিয়ে বিস্তারিত আলোচনা করা হয়েছে এই গ্রন্থে। একজন মুসলিমের জন্য এটি অপরিহার্য পাঠ্য।`,
    },
    publishedAt: "20 Rabi ul Awwal 2008",
    availableStock: 35,
    originalPrice: 920,
    currentPrice: 820,
  },
  {
    id: 34,
    name: "তাফসীর ইবনে কাছীর (সংক্ষিপ্ত)",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Tafsir_Ibn_Kasir-d8325-454497.jpg",
    subDescription: "কুরআনের তাফসীরের বিশুদ্ধ গ্রন্থ",
    writer: "ইমাম ইবনে কাছীর",
    writerId: 404,
    category: "ইসলামী বই",
    ratings: {
      numberOfRating: 9,
      totalRating: 456,
    },
    favouritedBy: 987,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Tafsir_Ibn_Kasir-d8325-454497.jpg",
      summary: `কুরআনের আয়াতসমূহের গভীর ব্যাখ্যা পাওয়া যায় এই তাফসীরে। প্রতিটি আয়াতের প্রেক্ষাপট, অর্থ ও শিক্ষা বিস্তারিতভাবে উপস্থাপিত হয়েছে।`,
    },
    publishedAt: "12 Dhul Hijjah 2012",
    availableStock: 29,
    originalPrice: 1200,
    currentPrice: 1050,
  },
  {
    id: 35,
    name: "নামাযের গুরুত্ব ও ফযীলত",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Namazer_Gurotto-d8325-454498.jpg",
    subDescription: "সালাতের মর্যাদা ও উপকারিতা",
    writer: "মাওলানা আশরাফ আলী থানভী",
    writerId: 405,
    category: "ইসলামী বই",
    ratings: {
      numberOfRating: 8,
      totalRating: 234,
    },
    favouritedBy: 567,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Namazer_Gurotto-d8325-454498.jpg",
      summary: `নামায মুসলমানদের জীবনের স্তম্ভ। এই বইয়ে নামাযের গুরুত্ব, ফযীলত এবং সঠিক পদ্ধতি সম্পর্কে বিস্তারিত আলোচনা করা হয়েছে।`,
    },
    publishedAt: "5 Rajab 2015",
    availableStock: 41,
    originalPrice: 320,
    currentPrice: 280,
  },
];

// Science & Technology Books
export const scienceBooks: BookItem[] = [
  {
    id: 41,
    name: "কসমস",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Cosmos-Carl_Sagan-d8325-454499.jpg",
    subDescription: "মহাবিশ্বের রহস্য উন্মোচন",
    writer: "কার্ল সেগান",
    writerId: 501,
    category: "বিজ্ঞান ও প্রযুক্তি",
    ratings: {
      numberOfRating: 10,
      totalRating: 789,
    },
    favouritedBy: 1567,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Cosmos-Carl_Sagan-d8325-454499.jpg",
      summary: `কসমস বইটি মহাবিশ্বের অসীম রহস্য সম্পর্কে আমাদের ধারণা দেয়। তারা, গ্রহ-নক্ষত্র, গ্যালাক্সি এবং মহাবিশ্বের সৃষ্টি সম্পর্কে বিস্তারিত আলোচনা রয়েছে এতে।`,
    },
    publishedAt: "25 October 2019",
    availableStock: 38,
    originalPrice: 650,
    currentPrice: 550,
  },
  {
    id: 42,
    name: "কোয়ান্টাম মেকানিক্স পরিচিতি",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Quantum_Mechanics-d8325-454500.jpg",
    subDescription: "কোয়ান্টাম জগতের সহজ ব্যাখ্যা",
    writer: "ড. আব্দুল্লাহ আল মুতী শরফুদ্দীন",
    writerId: 502,
    category: "বিজ্ঞান ও প্রযুক্তি",
    ratings: {
      numberOfRating: 9,
      totalRating: 456,
    },
    favouritedBy: 789,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Quantum_Mechanics-d8325-454500.jpg",
      summary: `কোয়ান্টাম মেকানিক্স পদার্থবিজ্ঞানের একটি জটিল শাখা। এই বইয়ে সহজ ভাষায় কোয়ান্টাম জগতের নিয়মকানুন এবং এর আশ্চর্যজনক বৈশিষ্ট্যগুলো ব্যাখ্যা করা হয়েছে।`,
    },
    publishedAt: "14 March 2020",
    availableStock: 25,
    originalPrice: 580,
    currentPrice: 490,
  },
  {
    id: 43,
    name: "আর্টিফিশিয়াল ইন্টেলিজেন্স",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/AI_Bangla-d8325-454501.jpg",
    subDescription: "কৃত্রিম বুদ্ধিমত্তার ভবিষ্যৎ",
    writer: "তামিম শাহরিয়ার সুবীন",
    writerId: 503,
    category: "বিজ্ঞান ও প্রযুক্তি",
    ratings: {
      numberOfRating: 8,
      totalRating: 345,
    },
    favouritedBy: 678,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/AI_Bangla-d8325-454501.jpg",
      summary: `আর্টিফিশিয়াল ইন্টেলিজেন্স আজকের যুগের সবচেয়ে গুরুত্বপূর্ণ প্রযুক্তি। এই বইয়ে কৃত্রিম বুদ্ধিমত্তার বর্তমান অবস্থা, ভবিষ্যতের সম্ভাবনা এবং মানবজীবনে এর প্রভাব নিয়ে আলোচনা করা হয়েছে।`,
    },
    publishedAt: "8 July 2021",
    availableStock: 42,
    originalPrice: 720,
    currentPrice: 600,
  },
  {
    id: 44,
    name: "জিনতত্ত্ব ও বংশগতি",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Genetics-d8325-454502.jpg",
    subDescription: "ডিএনএ থেকে বংশগতির রহস্য",
    writer: "প্রফেসর ড. মোহাম্মদ কায়কোবাদ",
    writerId: 504,
    category: "বিজ্ঞান ও প্রযুক্তি",
    ratings: {
      numberOfRating: 9,
      totalRating: 567,
    },
    favouritedBy: 934,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Genetics-d8325-454502.jpg",
      summary: `জিনতত্ত্ব জীবনের মূল রহস্য উন্মোচন করে। এই বইয়ে ডিএনএ, জিন, ক্রোমোজোম এবং বংশগতির নিয়মাবলী সম্পর্কে বিস্তারিত আলোচনা করা হয়েছে। আধুনিক জেনেটিক ইঞ্জিনিয়ারিং ও জিন থেরাপি নিয়েও আলোচনা রয়েছে।`,
    },
    publishedAt: "12 November 2020",
    availableStock: 31,
    originalPrice: 680,
    currentPrice: 580,
  },
  {
    id: 45,
    name: "রসায়নের আশ্চর্য জগৎ",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Chemistry-d8325-454503.jpg",
    subDescription: "পরমাণু থেকে অণুর জগৎ",
    writer: "ড. মুহম্মদ জাফর ইকবাল",
    writerId: 505,
    category: "বিজ্ঞান ও প্রযুক্তি",
    ratings: {
      numberOfRating: 9,
      totalRating: 678,
    },
    favouritedBy: 1234,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Chemistry-d8325-454503.jpg",
      summary: `রসায়ন আমাদের চারপাশের সবকিছুতেই রয়েছে। এই বইয়ে পরমাণুর গঠন, রাসায়নিক বিক্রিয়া, অজৈব ও জৈব রসায়নের মূল বিষয়গুলো সহজ ভাষায় ব্যাখ্যা করা হয়েছে।`,
    },
    publishedAt: "3 September 2019",
    availableStock: 47,
    originalPrice: 520,
    currentPrice: 450,
  },
  {
    id: 46,
    name: "পরিবেশ বিজ্ঞান",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Environmental_Science-d8325-454504.jpg",
    subDescription: "পৃথিবীর ভবিষ্যৎ রক্ষায় বিজ্ঞান",
    writer: "ড. রশীদ আহমেদ",
    writerId: 506,
    category: "বিজ্ঞান ও প্রযুক্তি",
    ratings: {
      numberOfRating: 8,
      totalRating: 432,
    },
    favouritedBy: 765,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Environmental_Science-d8325-454504.jpg",
      summary: `পরিবেশ দূষণ আজকের সময়ের সবচেয়ে বড় সমস্যা। এই বইয়ে পরিবেশের বিভিন্ন উপাদান, দূষণের কারণ ও প্রভাব এবং পরিবেশ সংরক্ষণের উপায় নিয়ে বিস্তারিত আলোচনা রয়েছে।`,
    },
    publishedAt: "18 February 2021",
    availableStock: 29,
    originalPrice: 590,
    currentPrice: 510,
  },
  {
    id: 47,
    name: "স্পেস এক্সপ্লোরেশন",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Space_Exploration-d8325-454505.jpg",
    subDescription: "মহাকাশ অভিযানের রোমাঞ্চকর ইতিহাস",
    writer: "ড. দীপেন ভট্টাচার্য",
    writerId: 507,
    category: "বিজ্ঞান ও প্রযুক্তি",
    ratings: {
      numberOfRating: 9,
      totalRating: 634,
    },
    favouritedBy: 1098,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Space_Exploration-d8325-454505.jpg",
      summary: `মানুষের মহাকাশ অভিযান শুরু হয়েছে মাত্র কয়েক দশক আগে। এই বইয়ে চাঁদে পদার্পণ থেকে শুরু করে মঙ্গল গ্রহের অভিযান পর্যন্ত মহাকাশ গবেষণার সব গুরুত্বপূর্ণ মাইলফলক তুলে ধরা হয়েছে।`,
    },
    publishedAt: "7 June 2022",
    availableStock: 33,
    originalPrice: 750,
    currentPrice: 650,
  },
  {
    id: 48,
    name: "নিউরোসায়েন্স পরিচিতি",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Neuroscience-d8325-454506.jpg",
    subDescription: "মানুষের মস্তিষ্কের রহস্য",
    writer: "ড. সাইফুল ইসলাম",
    writerId: 508,
    category: "বিজ্ঞান ও প্রযুক্তি",
    ratings: {
      numberOfRating: 8,
      totalRating: 389,
    },
    favouritedBy: 567,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Neuroscience-d8325-454506.jpg",
      summary: `মানুষের মস্তিষ্ক সবচেয়ে জটিল এবং রহস্যময় অঙ্গ। এই বইয়ে নিউরোনের কাজকর্ম, স্মৃতি গঠনের প্রক্রিয়া, চেতনার উৎপত্তি এবং মানসিক রোগের কারণ নিয়ে আলোচনা করা হয়েছে।`,
    },
    publishedAt: "23 April 2021",
    availableStock: 26,
    originalPrice: 620,
    currentPrice: 530,
  },
  {
    id: 49,
    name: "জলবায়ু পরিবর্তন ও বৈশ্বিক উষ্ণায়ন",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Climate_Change-d8325-454507.jpg",
    subDescription: "পৃথিবীর জলবায়ুর পরিবর্তনের বিজ্ঞান",
    writer: "প্রফেসর আইনুন নিশাত",
    writerId: 509,
    category: "বিজ্ঞান ও প্রযুক্তি",
    ratings: {
      numberOfRating: 9,
      totalRating: 723,
    },
    favouritedBy: 1345,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Climate_Change-d8325-454507.jpg",
      summary: `জলবায়ু পরিবর্তন আজকের সময়ের সবচেয়ে জরুরি সমস্যা। এই বইয়ে গ্রিনহাউজ এফেক্ট, বৈশ্বিক উষ্ণতা বৃদ্ধি, এর কারণ ও প্রভাব এবং প্রতিকারের উপায় নিয়ে বিজ্ঞানভিত্তিক আলোচনা রয়েছে।`,
    },
    publishedAt: "15 January 2022",
    availableStock: 35,
    originalPrice: 690,
    currentPrice: 590,
  },
  {
    id: 50,
    name: "বায়োইনফরমেটিক্স",
    bookCover:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Bioinformatics-d8325-454508.jpg",
    subDescription: "জীববিজ্ঞান ও কম্পিউটার সায়েন্সের মেলবন্ধন",
    writer: "ড. মাকসুদুল আলম",
    writerId: 510,
    category: "বিজ্ঞান ও প্রযুক্তি",
    ratings: {
      numberOfRating: 7,
      totalRating: 298,
    },
    favouritedBy: 456,
    about: {
      aboutImgUrl:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Bioinformatics-d8325-454508.jpg",
      summary: `বায়োইনফরমেটিক্স হলো জীববিজ্ঞান ও তথ্যপ্রযুক্তির সমন্বিত ক্ষেত্র। এই বইয়ে জিনোম সিকোয়েন্সিং, প্রোটিন স্ট্রাকচার অ্যানালাইসিস এবং বায়োলজিক্যাল ডেটা প্রসেসিং এর বিষয়গুলো তুলে ধরা হয়েছে।`,
    },
    publishedAt: "30 August 2021",
    availableStock: 19,
    originalPrice: 800,
    currentPrice: 700,
  },
];
