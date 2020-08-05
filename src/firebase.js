import firebase from 'firebase';

    const firebaseConfig = {
        apiKey: "AIzaSyD9d3I_W9FMTHxIcq4ZnSAztMkXlPWmE2M",
        authDomain: "date-c957b.firebaseapp.com",
        databaseURL: "https://date-c957b.firebaseio.com",
        projectId: "date-c957b",
        storageBucket: "date-c957b.appspot.com",
        messagingSenderId: "383735385630",
        appId: "1:383735385630:web:b0a3330f7e3456e67c280f",
        measurementId: "G-JLNMQB98F4"
    };

    const firebaseApp = firebase.initializeApp(firebaseConfig);

    const database = firebase.firestore();

    export default database;