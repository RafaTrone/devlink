
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBmgQNvMAdCgiMmpBz28xSEqOlfj1WA02s",
  authDomain: "devlinks-db8f7.firebaseapp.com",
  projectId: "devlinks-db8f7",
  storageBucket: "devlinks-db8f7.appspot.com",
  messagingSenderId: "388662899783",
  appId: "1:388662899783:web:d34cd3dfcd261fbb562d62"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };