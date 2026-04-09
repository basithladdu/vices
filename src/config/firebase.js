import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// ⚠️ REPLACE WITH YOUR FIREBASE CONFIG
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || 'REPLACE_ME',
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || 'REPLACE_ME',
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || 'REPLACE_ME',
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || 'REPLACE_ME',
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || 'REPLACE_ME',
  appId: process.env.REACT_APP_FIREBASE_APP_ID || 'REPLACE_ME',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase services
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app
