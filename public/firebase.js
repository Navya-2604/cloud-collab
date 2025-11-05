// ✅ Import Firebase SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, enableIndexedDbPersistence } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// ✅ Firebase Project Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuQULtYoC4rBUmHN9Kg1MVPPqLQS9Vy1Y",
  authDomain: "cloud-collab.firebaseapp.com",
  projectId: "cloud-collab",
  storageBucket: "cloud-collab.firebasestorage.app",
  messagingSenderId: "669000546229",
  appId: "1:669000546229:web:0d03a7465b2e6d921a4bfc"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firebase Authentication & Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);

// ✅ Enable Offline Firestore (IMPORTANT for your project)
enableIndexedDbPersistence(db)
  .then(() => {
    console.log("✅ Firestore persistence enabled (Offline mode working)");
  })
  .catch((err) => {
    console.error("⚠️ Firestore persistence error:", err.code);
  });

console.log("✅ Firebase initialized successfully");
