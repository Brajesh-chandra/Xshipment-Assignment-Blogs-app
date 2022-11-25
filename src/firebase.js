import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGy5ZnL8zCkbfmTQVM7EjkUthxnPpt5VU",
  authDomain: "react-blog-app-33c95.firebaseapp.com",
  projectId: "react-blog-app-33c95",
  storageBucket: "react-blog-app-33c95.appspot.com",
  messagingSenderId: "404448670101",
  appId: "1:404448670101:web:f056786ffca392de4d069c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
