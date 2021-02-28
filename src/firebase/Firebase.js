import firebase from 'firebase/app';
import 'firebase/analytics';

const config = {
  apiKey: 'AIzaSyCMzRAH0S3Ynrv4yz9eVvJd6i7TsU9ppIo',
  authDomain: 'reactchat-c4cae.firebaseapp.com',
  databaseURL: 'https://reactchat-c4cae.firebaseio.com',
  projectId: 'reactchat-c4cae',
  storageBucket: 'reactchat-c4cae.appspot.com',
  messagingSenderId: '854480440930',
  appId: '1:854480440930:web:de267eb8ac989eba930b3b',
  measurementId: 'G-5DETCEE4JB',
};

firebase.initializeApp(config);

export default firebase;
