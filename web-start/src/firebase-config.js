/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgDK81mG6jMdlyhTFFg0Yd0d7gcmfuz4g",
  authDomain: "friendlychat-4dfaa.firebaseapp.com",
  databaseURL: "https://friendlychat-4dfaa.firebaseio.com",
  projectId: "friendlychat-4dfaa",
  storageBucket: "friendlychat-4dfaa.appspot.com",
  messagingSenderId: "336186523878",
  appId: "1:336186523878:web:c89a80b00f5cff43253b27",
  measurementId: "G-8WCB2XJWGW"
};

export function getFirebaseConfig() {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return firebaseConfig;
  }
}
