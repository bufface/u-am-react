import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyA4l53gYse0WxuKGA45IevvPo0-UOPDf-M",
    authDomain: "ureact-28488.firebaseapp.com",
    databaseURL: "https://ureact-28488.firebaseio.com",
    storageBucket: "ureact-28488.appspot.com",
    messagingSenderId: "1065455613789"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
