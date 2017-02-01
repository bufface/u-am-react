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

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});
