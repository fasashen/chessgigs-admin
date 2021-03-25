import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from 'react-admin-firebase';

const firebaseConfig = {
  apiKey: "AIzaSyANAib0iK7vf18ANYqphkrE71WxiNzloHc",
  authDomain: "chess-gigs.firebaseapp.com",
  projectId: "chess-gigs",
  storageBucket: "chess-gigs.appspot.com",
  messagingSenderId: "980716728398",
  appId: "1:980716728398:web:5d37128bcdbb49fc07d31f",
  measurementId: "G-3YGX1Y4Z4Y"
};

const reactAdminFirebaseOptions = {
  logging: true,
  useFileNamesInStorage: true
};

export const firebaseDataProvider = FirebaseDataProvider(firebaseConfig, reactAdminFirebaseOptions);
export const firebaseAuthProvider = FirebaseAuthProvider(firebaseConfig, reactAdminFirebaseOptions);
