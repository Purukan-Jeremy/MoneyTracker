// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBoRJWpIgMwZRPv76JlpEEfW5uCYQfciIM',
  authDomain: 'purukanmoneytracker.firebaseapp.com',
  projectId: 'purukanmoneytracker',
  storageBucket: 'purukanmoneytracker.firebasestorage.app',
  messagingSenderId: '635601295454',
  appId: '1:635601295454:web:770e3a0d0d6ca40e213ccf',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default app;