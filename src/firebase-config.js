import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  // apiKey: process.env.FIREBASE_API_KEY,
  // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.FIREBASE_PROJECT_ID,
  // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  // messaginSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.FIREBASE_APP_ID,
  // measurementId: process.env.FIREBASE_MEASUREMENT_ID,

  apiKey: 'AIzaSyCgkyjM8TFU09-jKR7GHcaLsJMGMzHncFM',
  authDomain: 'photo-tagging-f4cb8.firebaseapp.com',
  projectId: 'photo-tagging-f4cb8',
  storageBucket: 'photo-tagging-f4cb8.appspot.com',
  messagingSenderId: '191864224935',
  appId: '1:191864224935:web:680d7eef9b2c5c1f312f82',
  measurementId: 'G-4HM01JZL69',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
