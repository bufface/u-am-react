import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyA4l53gYse0WxuKGA45IevvPo0-UOPDf-M",
  authDomain: "ureact-28488.firebaseapp.com",
  databaseURL: "https://ureact-28488.firebaseio.com",
  storageBucket: "ureact-28488.appspot.com",
  messagingSenderId: "1065455613789"
};
firebase.initializeApp(config);

firebase.database().ref().set({
  appName: 'Todo App'
});
