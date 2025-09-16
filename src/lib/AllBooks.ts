import {
  selfDevelopmentBooks,
  literatureBooks,
  islamicBooks,
  scienceBooks,
  historyBooks,
  childrenBooks,
  poetryBooks,
  academicBooks,
  businessBooks,
} from "./BookDb";

import { BookItem } from "./Interfaces/Books.Interface";

// Combining all books
export const allBooks: BookItem[] = [
  ...selfDevelopmentBooks,
  ...literatureBooks,
  ...islamicBooks,
  ...scienceBooks,
  ...historyBooks,
  ...childrenBooks,
  ...poetryBooks,
  ...academicBooks,
  ...businessBooks,
];

// Books by category
export const booksByCategory = {
  "আত্ম উন্নয়ন ও মোটিভেশন": selfDevelopmentBooks,
  "সাহিত্য ও উপন্যাস": literatureBooks,
  "ইসলামী বই": islamicBooks,
  "বিজ্ঞান ও প্রযুক্তি": scienceBooks,
  "ইতিহাস ও ঐতিহ্য": historyBooks,
  "শিশুতোষ বই": childrenBooks,
  কবিতা: poetryBooks,
  "একাডেমিক বই": academicBooks,
  "ব্যবসা ও অর্থনীতি": businessBooks,
};
