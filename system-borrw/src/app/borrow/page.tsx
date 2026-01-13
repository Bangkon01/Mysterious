"use client";
import Protected from "@/components/Protected";
export default function Borrow() {
  return (
      <Protected>
        <h1 className="text-xl font-bold mb-4">📕 ยืมหนังสือ</h1>

      <input
        className="border p-2 mr-2"
        placeholder="ชื่อผู้ยืม"
      />
      <input
        className="border p-2 mr-2"
        placeholder="ชื่อหนังสือ"
      />

      <button className="bg-blue-600 text-white px-4 py-2">
        ยืม
      </button>
    </Protected>
  );
}
