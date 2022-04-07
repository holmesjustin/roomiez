// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC5LjZZIcg_wp9Jca8lNqVz3_YRvesyg2E',
  authDomain: 'roomiez-89739.firebaseapp.com',
  projectId: 'roomiez-89739',
  storageBucket: 'roomiez-89739.appspot.com',
  messagingSenderId: '85769067633',
  appId: '1:85769067633:web:19a6b3ff849b331f240fd0',
}

const app = initializeApp(firebaseConfig)
// const db = getFirestore(app)

export default app
