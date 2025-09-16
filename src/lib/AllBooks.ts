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

interface AllBooks {
  selfDevelopmentBooks: BookItem[];
  literatureBooks: BookItem[];
  islamicBooks: BookItem[];
  scienceBooks: BookItem[];
  historyBooks: BookItem[];
  childrenBooks: BookItem[];
  poetryBooks: BookItem[];
  academicBooks: BookItem[];
  businessBooks: BookItem[];
}
// Combining all books
export const allBooks: AllBooks = {
  selfDevelopmentBooks,
  literatureBooks,
  islamicBooks,
  scienceBooks,
  historyBooks,
  childrenBooks,
  poetryBooks,
  academicBooks,
  businessBooks,
};

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
