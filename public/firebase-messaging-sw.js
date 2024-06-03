// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyBbu6l6VhuMHW_1mM9feN8IVvMIVYDZv1A",
  authDomain: "careful-cosine-374318.firebaseapp.com",
  projectId: "careful-cosine-374318",
  storageBucket: "careful-cosine-374318.appspot.com",
  messagingSenderId: "966289357508",
  appId: "1:966289357508:web:c8d27764a98bfb552d2791",
  measurementId: "G-VT5Z8PH7Z1",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
