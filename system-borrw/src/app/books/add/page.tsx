"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddBookPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  const handleSave = () => {
    alert("บันทึกหนังสือเรียบร้อย (ตัวอย่าง)");
    router.push("/books");
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">➕ เพิ่มหนังสือ</h1>

      <div className="space-y-4">
        <input
          placeholder="ชื่อหนังสือ"
          className="w-full p-2 border rounded"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="ผู้แต่ง"
          className="w-full p-2 border rounded"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          placeholder="หมวดหมู่"
          className="w-full p-2 border rounded"
          onChange={(e) => setCategory(e.target.value)}
        />

        <button
          onClick={handleSave}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-500"
        >
          💾 บันทึก
        </button>
      </div>
    </div>
  );
}
