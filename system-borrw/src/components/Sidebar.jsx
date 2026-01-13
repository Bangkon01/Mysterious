"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const username = localStorage.getItem("user");
    if (username) setUser(username);
  }, []);

  const handleAuth = () => {
    if (user) {
      // 👉 Logout
      localStorage.removeItem("user");
      setUser(null);
      router.push("/login");
    } else {
      // 👉 Login
      router.push("/login");
    }
  };

  return (
    <div className="w-70 h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white flex flex-col">

      {/* 🔼 เมนูด้านบน */}
      <div className="p-4">
        <h1 className="text-xl font-bold mb-6">PLMS-SYSTEM</h1>

        <ul className="space-y-3">
          <li><Link href="/">หน้าแรก</Link></li>
          <li><Link href="/categories">หมวดหมู่</Link></li>
          <li><Link href="/borrow">ยืม</Link></li>
          <li><Link href="/return">คืน</Link></li>
          <li><Link href="/about">เกี่ยวกับห้องสมุด</Link></li>
          <li><Link href="/cart">ตระกร้าหนังสือ</Link></li>
        </ul>
      </div>

      {/* 🔽 ส่วนล่างสุด */}
      <div className="mt-auto p-4 border-t border-slate-700 text-center">
        {user && (
          <p className="text-sm text-slate-300 mb-2">
            👤 {user}
          </p>
        )}

        <button
          onClick={handleAuth}
          className={`w-full py-2 rounded text-sm font-medium
            ${user
              ? "Logout" : "Login"
              ? "bg-red-500 hover:bg-red-600"
              : "bg-emerald-500 hover:bg-emerald-600"}
          `}
        >
          {user ? "🚪 ออกจากระบบ" : "🔐 เข้าสู่ระบบ"}
        </button>
      </div>
    </div>
  );
}
