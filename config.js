import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    
        apiKey: "AIzaSyC-abV9jj8RYedgLX4MCRajh7je5s46PWk",
        authDomain: "team-voting-app-a8df4.firebaseapp.com",
        databaseURL: "https://team-voting-app-a8df4-default-rtdb.firebaseio.com",
        projectId: "team-voting-app-a8df4",
        storageBucket: "team-voting-app-a8df4.appspot.com",
        messagingSenderId: "975996653249",
        appId: "1:975996653249:web:b3610afba717ff2555ce40"
 
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();