import { initializeApp } from "firebase/app"
import "firebase/auth"

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