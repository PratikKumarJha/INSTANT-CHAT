import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBr1noNL8Xgs284R3DUFQC0Qes3IP1BS3s",
//   authDomain: "instant-chat-a0d35.firebaseapp.com",
//   projectId: "instant-chat-a0d35",
//   storageBucket: "instant-chat-a0d35.firebasestorage.app",
//   messagingSenderId: "368317514164",
//   appId: "1:368317514164:web:59d81fb3113f7964ebb2e1"
// };
const firebaseConfig = {
  apiKey: "AIzaSyCrRYI37oVVf7QuXPTlsiEhSqzqsAKKKeY",
  authDomain: "reactchat-671a9.firebaseapp.com",
  projectId: "reactchat-671a9",
  storageBucket: "reactchat-671a9.appspot.com",
  messagingSenderId: "535154207621",
  appId: "1:535154207621:web:dab7cf733ad4d1cc96b2ec"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
