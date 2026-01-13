export type Book = {
  id: number;
  title: string;
  author: string;
  categoryId: number;
  category: string;
};

export const books: Book[] = [
  { id: 1, title: "Next.js เบื้องต้น", author: "Admin", categoryId: 1, category: "Web" },
  { id: 2, title: "JavaScript Advance", author: "PLMS", categoryId: 2, category: "Programming" },
  { id: 3, title: "React สำหรับมือใหม่", author: "End_user", categoryId: 1, category: "Web" },
  { id: 4, title: "CSS สวยๆ", author: "krubank", categoryId: 3, category: "Design" },
];
