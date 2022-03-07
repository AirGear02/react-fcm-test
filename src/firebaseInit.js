import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const publicKey = process.env.REACT_APP_VAPID_KEY;

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestForToken = async (setTokenCallback) => {
    try {
        const currentToken = await getToken(messaging, { vapidKey: publicKey });
        console.log('Fcm token: ', currentToken);
        setTokenCallback(currentToken);
        return currentToken;
    } catch (error) {
        console.log("An error occurred while retrieving token. ", error);
    }
};

export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            console.log(payload, payload);
            resolve(payload);
        });
    });