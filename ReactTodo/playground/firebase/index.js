import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyA4l53gYse0WxuKGA45IevvPo0-UOPDf-M",
  authDomain: "ureact-28488.firebaseapp.com",
  databaseURL: "https://ureact-28488.firebaseio.com",
  storageBucket: "ureact-28488.appspot.com",
  messagingSenderId: "1065455613789"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Cristian',
    age: 29
  }
});

// firebaseRef.update({
//   'app/name': 'Todo Application',
//   'user/name': 'Jen'
// });

firebaseRef.child('app').update({
  name: 'Todo Application',
});

firebaseRef.child('user').update({
  name: 'Jen',
});
