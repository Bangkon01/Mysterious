import Link from "next/link";
type Category = {
  id: number;
  name: string;
};

const categories: Category[] = [
  { id: 1, name: "คอมพิวเตอร์" },
  { id: 2, name: "นิยาย" },
  { id: 3, name: "การศึกษา" },
  { id: 4, name: "ประวัติศาสตร์" },
];

export default function Categories() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">📂 หมวดหมู่หนังสือ</h1>

      {/* 🔽 ตรงนี้แหละ สำคัญ */}
      <div className="grid grid-cols-2 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/categories/${cat.id}`}
            className="bg-white p-4 rounded shadow hover:bg-gray-100 block"
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
