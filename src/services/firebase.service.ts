import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyClkNFP1DpZ5-4mqhtXaHw31SsYu6kNQok',
  authDomain: 'mangastuff-98127.firebaseapp.com',
  projectId: 'mangastuff-98127',
  storageBucket: 'mangastuff-98127.appspot.com',
  messagingSenderId: '955845935816',
  appId: '1:955845935816:web:6edb33f3312b3b017a9bfd',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export async function googleLogin() {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
  const token = await auth?.currentUser?.getIdToken(true);
  console.log(token);
  if (!token) {
    throw new Error('Firebase error');
  }
  return token;
}

export async function loginEmail(email, pass): Promise<string> {
  await signInWithEmailAndPassword(auth, email, pass);

  const token = await auth?.currentUser?.getIdToken(true);
  if (!token) {
    throw new Error('Firebase error');
  }
  console.log(token);
  return token;
}

export async function registerEmail(email, pass) {
  await createUserWithEmailAndPassword(auth, email, pass);
  const token = await auth?.currentUser?.getIdToken(true);
  console.log(token);
  if (!token) {
    throw new Error('Firebase error');
  }
  return token;
}

export async function getToken() {
  const token = await auth?.currentUser?.getIdToken();
  console.log(token);
  if (!token) {
    throw new Error('Firebase error');
  }

  return token;
}

export async function getUser() {
  const user = await auth?.currentUser?.getIdTokenResult();
  console.log(user);
  return user?.claims;
}
