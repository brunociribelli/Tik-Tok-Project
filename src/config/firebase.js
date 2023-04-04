
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyABZEsU9E6DoGMZiY0fIsM18NXDN1LViDQ",
  authDomain: "tiktok---jornada-ac28e.firebaseapp.com",
  projectId: "tiktok---jornada-ac28e",
  storageBucket: "tiktok---jornada-ac28e.appspot.com",
  messagingSenderId: "985370826092",
  appId: "1:985370826092:web:181a06fb93335caebb8f49"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default  db;