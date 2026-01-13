"use client";
import Protected from "@/components/Protected";

export default function ReturnBook() {
  return (
    <Protected>
      <h1 className="text-xl font-bold mb-4">📗 คืนหนังสือ</h1>

      <input
        className="border p-2 mr-2"
        placeholder="ชื่อหนังสือ"
      />

      <button className="bg-green-600 text-white px-4 py-2">
        คืน
      </button>
    </Protected>
  );
}
