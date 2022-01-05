import { initializeApp } from 'firebase/app';
// Follow this pattern to import other Firebase services:
// import {} from 'firebase/<service>';

import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCIjprvpxEpe0cV8giSw1YxgRZCJO2X4vU',
    authDomain: 'my-library-a1b2c3.firebaseapp.com',
    projectId: 'my-library-a1b2c3',
    storageBucket: 'my-library-a1b2c3.appspot.com',
    messagingSenderId: '921877777638',
    appId: '1:921877777638:web:f6639d9b498a4ffc8a3f27',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/* A firebase app is a container type object which store the shared configuration and 
share the authentication between Firebase services  */

//Get a reference to the database service

const database = getDatabase(app);

export default database;
