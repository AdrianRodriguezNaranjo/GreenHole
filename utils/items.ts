export interface NewsItems {
  id: number;
  title: string;
  source: "BBC News" | "Reuters" | "The NYT" | "TOMRA";
  image: string;
  content: string;
  datetime: string;
}

export const items: NewsItems[] = [
  {
    id: 1,
    title: "Global Summit on Climate Change: Historic Agreement Reached",
    source: "BBC News",
    image: "https://i.ibb.co/zVjKp7c/image.png",
    content: `Talk of artificial intelligence (AI) has taken the recycling industry
    by storm and for good reason. When applied correctly, today’s emerging
    AI technologies has transformative powers, driving automation and
    efficiently enabling more granular sorting of complex material
    fractions. When not, however, it can be an enormous waste of both time
    and financial investment.`,
    datetime: "Jun 9, 2023"
  },
  {
    id: 2,
    title: "Climate Change Impact on Agriculture: Farmers Seek Solutions",
    source: "Reuters",
    image: "https://i.ibb.co/X3Nnx0P/image.png",
    content: `Talk of artificial intelligence (AI) has taken the recycling industry
    by storm and for good reason. When applied correctly, today’s emerging
    AI technologies has transformative powers, driving automation and
    efficiently enabling more granular sorting of complex material
    fractions. When not, however, it can be an enormous waste of both time
    and financial investment.`,
    datetime: "Jun 8, 2023"
  },
  {
    id: 3,
    title: "Rising Sea Levels Threaten Coastal Cities' Economies",
    source: "The NYT",
    image: "https://i.ibb.co/3mg1x04/image.png",
    content: `Talk of artificial intelligence (AI) has taken the recycling industry
    by storm and for good reason. When applied correctly, today’s emerging
    AI technologies has transformative powers, driving automation and
    efficiently enabling more granular sorting of complex material
    fractions. When not, however, it can be an enormous waste of both time
    and financial investment.`,
    datetime: "Jun 6, 2023",
  },
  {
    id: 4,
    title: "What’s AI doing for you? ",
    source: "TOMRA",
    image: "https://i.ibb.co/KWvYPPT/image.png",
    content: `Talk of artificial intelligence (AI) has taken the recycling industry
    by storm and for good reason. When applied correctly, today’s emerging
    AI technologies has transformative powers, driving automation and
    efficiently enabling more granular sorting of complex material
    fractions. When not, however, it can be an enormous waste of both time
    and financial investment.`,
    datetime: "Sep 27, 2023",
  },
];
