"use client";

import React, { useState, useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/navigation";
import app from "@/config";
import Dashboard from "@/app/dashboard/page";  // ตรวจสอบให้แน่ใจว่า Dashboard มีอยู่ใน path ที่ถูกต้อง

const Home = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  
  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider); // ใช้ signInWithPopup
      router.push("/dashboard");
    } catch (error) {
      console.error("Error signing in with Google:", error instanceof Error ? error.message : error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {user ? (
        <Dashboard /> // ถ้ามี user, ไปที่หน้า Dashboard
      ) : (
        <button
          onClick={signInWithGoogle}  // ปรับให้ถูกต้อง
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign In with Google
        </button>
      )}
    </div>
  );
};

export default Home;
