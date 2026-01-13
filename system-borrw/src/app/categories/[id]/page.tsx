import BookCard from "../../../components/BookCard";

const books = [
  {
    id: 1,
    title: "วรรณคดีไทย",
    image: "/books/thai.jpg",
    categoryId: 1,
  },
  {
    id: 2,
    title: "วรรณคดีไทย เล่ม 2",
    image: "/books/thai.jpg",
    categoryId: 1,
  },
  {
    id: 3,
    title: "วิทยาศาสตร์",
    image: "/books/sci.jpg",
    categoryId: 2,
  },
];

export default function CategoryBooksPage({ params }: { params: { id: string } }) {
  const categoryId = Number(params.id);

  const filteredBooks = books.filter((book) => book.categoryId === categoryId);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-6 text-center">
        หนังสือในหมวด
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      {/* กรณีไม่มีหนังสือ */}
      {filteredBooks.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          ไม่มีหนังสือในหมวดนี้
        </p>
      )}

    </div>
  );
}
