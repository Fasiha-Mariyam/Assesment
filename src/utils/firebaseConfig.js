
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBptdZM1NDulxJKDFCUiK8ONlPVzyrUl8A",
  authDomain: "uploadimage-14f2b.firebaseapp.com",
  projectId: "uploadimage-14f2b",
  storageBucket: "uploadimage-14f2b.appspot.com",
  messagingSenderId: "933417367823",
  appId: "1:933417367823:web:6327902ca14eab3109a67a",
  measurementId: "G-Y5VQB3Y37B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);