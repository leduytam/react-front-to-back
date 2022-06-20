import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCAoIoxs7yIySr4O1JkGwNpnHaCIX-vyIw',
  authDomain: 'house-marketplace-app-af67d.firebaseapp.com',
  projectId: 'house-marketplace-app-af67d',
  storageBucket: 'house-marketplace-app-af67d.appspot.com',
  messagingSenderId: '295065418230',
  appId: '1:295065418230:web:3b7b3b45db103839612fd7'
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
