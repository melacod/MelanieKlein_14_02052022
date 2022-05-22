// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

/**
 * Firebase configuration
 * @kind constant
 * @category Firebase
 */
const firebaseConfig = {
    apiKey: 'AIzaSyABhrGCT5DtaqjHx-gMXmGjL-K8DRR5JoE',
    authDomain: 'melacod-wealthhealth.firebaseapp.com',
    projectId: 'melacod-wealthhealth',
    storageBucket: 'melacod-wealthhealth.appspot.com',
    messagingSenderId: '882744758566',
    appId: '1:882744758566:web:fe696f6ba2b246a88cf1e7',
    measurementId: 'G-JFRNQLM0VQ',
}

/**
 * Firebase application
 * @kind constant
 * @category Firebase
 */
const firebaseApplication = initializeApp(firebaseConfig)

/**
 * Firebase application database (Firestore)
 * @kind constant
 * @category Firebase
 */
const firestore = getFirestore(firebaseApplication)

export default firestore
