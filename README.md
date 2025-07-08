<img src = "https://raw.githubusercontent.com/Faris4166/Simple-Checklist-Application-in-Python/refs/heads/main/BG.jpg">

# 🌟 Google-Login-with-Next.js

---

## 📋 ขั้นตอนการนำโค้ดไปใช้งาน

<ol>
  <li>ดาวน์โหลดและติดตั้งไฟล์ทั้งหมดที่แนบมาในโปรเจกต์นี้</li>
  <li>ไปที่เว็บไซต์ <a href="https://console.firebase.google.com/u/0/">Firebase Console</a></li>
  <li>ลงชื่อเข้าสู่ระบบ Firebase ให้เรียบร้อย</li>
  <li>คลิกที่ "Create a Firebase project"</li>
  <li>ตั้งชื่อโปรเจกต์และดำเนินการตามขั้นตอนต่างๆ ให้เสร็จสมบูรณ์</li>
  <li>Firebase จะสร้างโค้ดสำหรับ Initializing Firebase App:
    <pre><code>
import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "##############################",
  authDomain: "##############################",
  projectId: "##############################",
  storageBucket: "##############################",
  messagingSenderId: "##############################",
  appId: "##############################",
  measurementId: "##############################"
};

const app = initializeApp(firebaseConfig);
export default app;
    </code></pre>
  </li>
  <li>นำโค้ด Firebase Configuration ที่ได้ ไปใส่ในไฟล์ <code>config.js</code> ในโปรเจกต์ของคุณ</li>
  <li>กลับไปที่ Firebase Console คลิกเมนู "Authentication"</li>
  <li>เลือกแท็บ "Sign-in method"</li>
  <li>คลิก "Add new provider"</li>
  <li>เลือก "Google" และกดเปิดใช้งาน ("Enable")</li>
  <li>เมื่อตั้งค่า Google Sign-in ใน Firebase เสร็จแล้ว ให้เปิด Terminal ในโฟลเดอร์โปรเจกต์ของคุณ แล้วรันคำสั่ง:
    <pre><code>
npm run dev
    </code></pre>
  </li>
  
  ---
  
<div align="center">
  <img src="https://giffiles.alphacoders.com/219/219234.gif" alt="centered gif">
    <h1>ผมศึกษาจาก <a href="https://console.firebase.google.com/u/0/](https://www.youtube.com/watch?v=n7Em_HH0jWI">คลิกเพื่อดู</a></h1>
</div>
