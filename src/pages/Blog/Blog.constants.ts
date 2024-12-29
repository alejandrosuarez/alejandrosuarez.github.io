export interface BlogPost {
  date: string;  // ISO date string format
  title: string;
  description: string;
  slug: string;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "hello-world",
    title: "def helloWorld():",
    date: "December 9, 2024",
    description: "My first blog post! A short introduction to myself and what I hope to achieve with victorgoncalves.com.",
    tags: ["Introduction"],
  },
  {
    slug: "guide-to-investing",
    title: "A Practical Guide to Investing",
    date: "December 20, 2024",
    description: "A guide to investing tailored for young professionals & beginners.",
    tags: ["Personal Finance", "Investing"],
  },
];


