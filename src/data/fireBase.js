// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMwmKTJKWu2Pzd0vcYZpSIT_LlA40rmKA",
  authDomain: "practice-97d8c.firebaseapp.com",
  projectId: "practice-97d8c",
  storageBucket: "practice-97d8c.appspot.com",
  messagingSenderId: "45155343364",
  appId: "1:45155343364:web:aaaf95ac82f3c1613e2951",
  measurementId: "G-5D3WMQ13VQ"
};

// Initialize Firebase
// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };