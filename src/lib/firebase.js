
// here is the firebase configuration file

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {

  // Here we store apiKey in a variable in .env file and using that variable name here through import.

  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: 'reactchatapp-23ff8.firebaseapp.com',
  projectId: 'reactchatapp-23ff8',
  storageBucket: 'reactchatapp-23ff8.appspot.com',
  messagingSenderId: '299403021775',
  appId: '1:299403021775:web:2338150fbccbd797ed56ba',
};

 const app = initializeApp(firebaseConfig);

// exporting them because we are going to be using them on our login page for example -

// we are going to login or register by this auth
export const auth = getAuth()

//  create our user information by this db
export const db = getFirestore()

//  upload images by this storage.
export const storage = getStorage()


