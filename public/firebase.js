const firebaseConfig = {
  apiKey: "AIzaSyDuQULtYoC4rBUmHN9Kg1MVPPqLQS9Vy1Y",
  authDomain: "cloud-collab.firebaseapp.com",
  projectId: "cloud-collab",
  storageBucket: "cloud-collab.firebasestorage.app",
  messagingSenderId: "669000546229",
  appId: "1:669000546229:web:0d03a7465b2e6d921a4bfc"
};

// ✅ Initialize Firebase
firebase.initializeApp(firebaseConfig);

// ✅ Firebase Services
const auth = firebase.auth();
const db = firebase.firestore();
