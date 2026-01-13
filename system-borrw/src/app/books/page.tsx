"use client";
import Link from "next/link";
import { books } from "../../data/books";

export default function BooksPage() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">📚 รายการหนังสือ</h1>

        {/* ปุ่มเพิ่มหนังสือ */}
        <Link
          href="/books/add"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
        >
          ➕ เพิ่มหนังสือ
        </Link>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3">ชื่อหนังสือ</th>
              <th className="p-3">ผู้แต่ง</th>
              <th className="p-3">หมวดหมู่</th>
              <th className="p-3 text-center">จัดการ</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id} className="border-t">
                <td className="p-3">{book.title}</td>
                <td className="p-3">{book.author}</td>
                <td className="p-3">{book.category}</td>
                <td className="p-3 text-center">
                  <Link
                    href={`/books/${book.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    🔍 รายละเอียด
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
