"use client";
import { useParams } from "next/navigation";
import { books } from "../../../data/books";

export default function BookDetailPage() {
  const { id } = useParams();
  const bookId = Number(id);
  const book = books.find((b) => b.id === bookId);

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">📘 รายละเอียดหนังสือ</h1>

      {!book ? (
        <div className="bg-white shadow rounded-lg p-4">ไม่พบหนังสือ</div>
      ) : (
        <div className="bg-white shadow rounded-lg p-4 space-y-2">
          <p><b>รหัสหนังสือ:</b> {book.id}</p>
          <p><b>ชื่อหนังสือ:</b> {book.title}</p>
          <p><b>ผู้แต่ง:</b> {book.author}</p>
          <p><b>หมวดหมู่:</b> {book.category}</p>
          <p><b>สถานะ:</b> พร้อมให้ยืม</p>
        </div>
      )}
    </div>
  );
}
