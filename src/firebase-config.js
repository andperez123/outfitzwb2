import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAVMCJb6aYbZxoxMGVN5G95Yfi9_uV4K7g",
  authDomain: "outfitzwb.firebaseapp.com",
  projectId: "outfitzwb",
  storageBucket: "outfitzwb.firebasestorage.app",
  messagingSenderId: "257728645620",
  appId: "1:257728645620:web:8a16a95bc680698a9391a1",
  measurementId: "G-G13JVDZE9P"
};

// For debugging
console.log('Firebase config:', firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };