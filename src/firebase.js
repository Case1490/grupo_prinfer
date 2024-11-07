// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Si usarás Firestore
import { getStorage } from "firebase/storage"; // Importa getStorage para Firebase Storage

const firebaseConfig = {
  apiKey: "AIzaSyCVu3iVpruPKlSkpiMeSODyhjeBxXitgNI",
  authDomain: "prinfer-72da9.firebaseapp.com",
  projectId: "prinfer-72da9",
  storageBucket: "prinfer-72da9.appspot.com",
  messagingSenderId: "754363131781",
  appId: "1:754363131781:web:30cee30e04900109b886ec",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore si lo necesitas
const db = getFirestore(app);

// Inicializar Firebase Storage
const storage = getStorage(app); // Aquí inicializamos el Storage

export { db, storage }; // Exportamos también el storage
