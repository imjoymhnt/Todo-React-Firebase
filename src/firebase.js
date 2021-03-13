import firebase from "firebase";
const firebaseApp = firenase.initializeApp({
  apiKey: "AIzaSyAYFvoSgxco1dLnfsGt6v45PhtS6vSumK4",
  authDomain: "todo-app-515eb.firebaseapp.com",
  projectId: "todo-app-515eb",
  storageBucket: "todo-app-515eb.appspot.com",
  messagingSenderId: "324456100303",
  appId: "1:324456100303:web:6dae223e942383caf7a2ba",
  measurementId: "G-D884WKKEPW",
});

const db = firebaseApp.firestore();
export { db };
