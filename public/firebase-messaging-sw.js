// Import Firebase scripts for messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Firebase configuration (ensure this matches your app config)
const firebaseConfig = {
    apiKey: "AIzaSyA1DvMUGM31daRodGQ1ZEgzNnuxRw-htLU",
    authDomain: "pj-ayurveda.firebaseapp.com",
    projectId: "pj-ayurveda",
    storageBucket: "pj-ayurveda.firebasestorage.app",
    messagingSenderId: "85578838465",
    appId: "1:85578838465:web:ab0093222e2ee550e73f40"
  };

// Initialize Firebase in the service worker
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message:', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png', // Replace with your app's icon
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});
