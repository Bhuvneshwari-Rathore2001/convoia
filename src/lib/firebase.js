
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: 'reactchatapp-23ff8.firebaseapp.com',
  projectId: 'reactchatapp-23ff8',
  storageBucket: 'reactchatapp-23ff8.appspot.com',
  messagingSenderId: '299403021775',
  appId: '1:299403021775:web:2338150fbccbd797ed56ba',
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()


