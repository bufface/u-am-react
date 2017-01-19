var redux = require('redux');

console.log('Starting redux example');

var stateDefaults = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
}

var nextHobbyId = 1;
var nextMovieId = 1;

var reducer = (state = stateDefaults, action) => {
  // state = state || { name: 'Anonymous' };

  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      }
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      }
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: nextMovieId ++,
            title: action.name,
            genre: action.genre
          }
        ]
      }  
    default:
      return state;  
  }
}
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is: ', state.name);
  document.getElementById('app').innerHTML = state.name;

  console.log('New State: ', store.getState());
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Cristian'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Running'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Other random text'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Termiator',
  genre: 'Fiction'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Termiator II',
  genre: 'Fiction'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Happie Feed',
  genre: '3D'
});