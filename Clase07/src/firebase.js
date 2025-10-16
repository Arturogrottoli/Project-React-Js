import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkDnZ41ocLNQHz9aHE-cGBO06ReiDMNXg",
  authDomain: "e-commerce-c9e50.firebaseapp.com",
  projectId: "e-commerce-c9e50",
  storageBucket: "e-commerce-c9e50.appspot.com",
  messagingSenderId: "710720671962",
  appId: "1:710720671962:web:e7c0cf299a82eaf90f95e3"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const coleccionProductos = collection( db, 'productos')
export const coleccionOrdenes = collection(db, 'ordenes')