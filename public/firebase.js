// ✅ Firebase Configuration — paste your own config below
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "cloud-collab.firebaseapp.com",
    projectId: "cloud-collab",
    storageBucket: "cloud-collab.appspot.com",
    messagingSenderId: "YOUR_ID",
    appId: "YOUR_APP_ID"
};


// ✅ Initialize Firebase (compat mode)
firebase.initializeApp(firebaseConfig);

// ✅ Firebase Services References
const auth = firebase.auth();
const db = firebase.firestore();