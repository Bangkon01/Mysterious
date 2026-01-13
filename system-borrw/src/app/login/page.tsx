"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // ตัวอย่าง user สำหรับโปรเจกต์ (ไม่ใช้ backend)
    if (username === "admin" && password === "1234") {
      localStorage.setItem("isLogin", "true");
      localStorage.setItem("user", username);
      router.push("/");
    } else {
      setError("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    }
    if (username === "End_user" && password === "******") {
      localStorage.setItem("isLogin", "true");
      localStorage.setItem("user", username);
      router.push("/");
    } else {
      setError("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    }
     if (username === "krubank" && password === "******") {
      localStorage.setItem("isLogin", "true");
      localStorage.setItem("user", username);
      router.push("/");
    } else {
      setError("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    }
  };

  return (
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

      {/* Glass Card */}
      <div className="w-full max-w-sm bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 text-white">

        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-4xl mb-2">📚</div>
          <h1 className="text-2xl font-bold">PLMS SYSTEM</h1>
          <p className="text-sm text-slate-300 mt-1">
            Library Management Login
          </p>
        </div>

        {/* Input */}
        <div className="space-y-4">
          <div>
            <label className="text-sm text-slate-300">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="
                w-full mt-1 px-4 py-2 rounded-lg
                bg-slate-800/80 border border-slate-700
                focus:outline-none focus:ring-2 focus:ring-blue-500
                placeholder:text-slate-400
              "
            />
             <input
          type="password"
          className="border p-2 w-full mb-4"
          placeholder="รหัสผ่าน"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
          </div>

          {/* Button */}
          <button
            onClick={handleLogin}
            className="
              w-full py-2 rounded-lg font-semibold
              bg-gradient-to-r from-blue-600 to-indigo-600
              hover:from-blue-500 hover:to-indigo-500
              transition-all duration-200
              shadow-lg
            "
          >
            🔐 Login
          </button>
        </div>

        {/* Footer */}
        <p className="text-xs text-center text-slate-400 mt-6">
          © 2026 PLMS Library System
        </p>

      </div>
    </div>
  );
}