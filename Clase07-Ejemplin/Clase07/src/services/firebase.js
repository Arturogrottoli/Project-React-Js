import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ¿Qué es esto?
// - Firebase es una plataforma de Google con varios servicios. Acá usamos Firestore (BD NoSQL en la nube).
// - Primero "inicializamos" Firebase con los datos de tu proyecto (firebaseConfig).
// - Luego obtenemos "db", que es el cliente para hablar con Firestore.
// ¿Dónde se usa "db"?
// - En los contenedores (listado, detalle, checkout) para leer/escribir datos.
const firebaseConfig = {
  apiKey: "AIzaSyB_DCajogvsL9Dc-JABRBrhR2DRr7SgIsE",
  authDomain: "e-commerce-47b9d.firebaseapp.com",
  projectId: "e-commerce-47b9d",
  storageBucket: "e-commerce-47b9d.firebasestorage.app",
  messagingSenderId: "198792624290",
  appId: "1:198792624290:web:8fa2f7de52b60635d27ffb",
};

// app: instancia principal de Firebase (conecta tu app web a tu proyecto)
const app = initializeApp(firebaseConfig);
// db: cliente de Firestore (lo importamos donde necesitemos consultar/guardar datos)
export const db = getFirestore(app);
