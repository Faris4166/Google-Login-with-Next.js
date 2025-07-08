"use client";  // เพิ่มบรรทัดนี้ที่ส่วนบนสุดของไฟล์ เพื่อให้เป็น Client-Side Component

import React, { useState, useEffect } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation"; // ใช้ useRouter จาก next/navigation แทน next/router
import app from "@/config";

function Dashboard() {
  const auth = getAuth(app);
  const router = useRouter();  // ตอนนี้ใช้ได้แล้ว
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push("/");  // ถ้าไม่มี user ให้ redirect ไปหน้า home
      }
    });

    return () => unsubscribe();
  }, [auth, router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");  // หลัง logout redirect ไปหน้าหลัก
    } catch (error) {
      console.error("Error signing out:", error instanceof Error ? error.message : error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">
          Welcome to the Dashboard, {user ? user.displayName : "Guest"}!
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
