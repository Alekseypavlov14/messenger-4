// Import the functions you need from the SDKs you need
import { getFirestore, QueryDocumentSnapshot } from "firebase/firestore"
import { initializeApp } from "firebase/app"
import { env } from '@shared/utils/env'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: env('VITE_FIREBASE_API_KEY'),
  authDomain: env('VITE_FIREBASE_AUTH_DOMAIN'),
  projectId: env('VITE_FIREBASE_PROJECT_ID'),
  storageBucket: env('VITE_FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: env('VITE_FIREBASE_MESSAGING_SENDER_ID'),
  appId: env('VITE_FIREBASE_APP_ID')
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// converter
export const converter = <T>() => ({
  toFirestore: (data: T) => data,
  fromFirestore: (snap: QueryDocumentSnapshot<T>) => snap.data()
})

export { db }