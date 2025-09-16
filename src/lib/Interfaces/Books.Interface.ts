interface Rating {
  numberOfRating: number;
  totalRating: number;
}

interface About {
  aboutImgUrl: string;
  summary: string;
}

export interface BookItem {
  id: number;
  name: string;
  bookCover: string;
  subDescription: string;
  writer: string;
  writerId: number;
  category: string;
  ratings: Rating;
  favouritedBy: number;
  about: About;
  publishedAt: string;
  availableStock: number;
  originalPrice: number;
  currentPrice: number;
}
