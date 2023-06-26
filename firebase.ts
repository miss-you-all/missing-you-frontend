import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCx6ZviBFDZx7YZiTJnS98FraSvt0nAhRI',
  authDomain: 'missingyou-3a59b.firebaseapp.com',
  projectId: 'missingyou-3a59b',
  storageBucket: 'missingyou-3a59b.appspot.com',
  messagingSenderId: '958940457872',
  appId: '1:958940457872:web:51dd2475ca2c21990ce115',
  measurementId: 'G-TVCNZ5K5BV',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
