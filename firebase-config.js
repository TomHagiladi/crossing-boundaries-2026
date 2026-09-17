// Firebase web config for the Crossing Boundaries workshop app.
//
// This file is PUBLIC by design. A Firebase web config ships inside every
// client that talks to the database - it identifies the project, it does not
// authorise anything. The security boundary is app/firestore.rules: create and
// read one collection of cards, never edit or delete anyone else's, every
// field capped, and the whole thing stops working after 9 October 2026.
window.CB_FIREBASE = {
  apiKey: "AIzaSyBp5oWgNcI1Os3lIRNeU6bGdRtMyjocipQ",
  authDomain: "crossing-boundaries-2026.firebaseapp.com",
  projectId: "crossing-boundaries-2026",
  storageBucket: "crossing-boundaries-2026.firebasestorage.app",
  messagingSenderId: "557595022780",
  appId: "1:557595022780:web:f960e87a73d6d0557787b9"
};
