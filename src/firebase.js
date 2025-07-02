// ✅ Modular Firebase imports (v9+)
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBJKXJcKEGs2xG_xaRSO-5EJD5pVA4uJIo",
  authDomain: "disney-clone-231db.firebaseapp.com",
  projectId: "disney-clone-231db",
  storageBucket: "disney-clone-231db.appspot.com", // 🔧 FIXED typo here (was ".app")
  messagingSenderId: "359517980323",
  appId: "1:359517980323:web:6f8c893b8a5bc0d7776116",
  measurementId: "G-FXJ3ZLDW15"
};

// ✅ Initialize app
const firebaseApp = initializeApp(firebaseConfig);

// ✅ Get services
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

// ✅ Export them for use
export { auth, provider, storage };
export default db;
