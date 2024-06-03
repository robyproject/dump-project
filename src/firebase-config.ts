import { initializeApp } from "firebase/app";

import { getMessaging } from "firebase/messaging";

export const firebaseConfig = {
  apiKey: "AIzaSyBbu6l6VhuMHW_1mM9feN8IVvMIVYDZv1A",
  authDomain: "careful-cosine-374318.firebaseapp.com",
  projectId: "careful-cosine-374318",
  storageBucket: "careful-cosine-374318.appspot.com",
  messagingSenderId: "966289357508",
  appId: "1:966289357508:web:c8d27764a98bfb552d2791",
  measurementId: "G-VT5Z8PH7Z1",
};

export const vapidKey =
  "BPczkxeSkA4aYX4J7_v-pRUlTvEsX5__JNasWpqlEJyNSuN3ivroOYAhSUuWTCNSBFOogfgw38f1BcnLUkPvpgs";
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Messaging service
export const messaging = getMessaging(app);
