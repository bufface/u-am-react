var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter');

var firstName = 'Cristian';

ReactDOM.render(
  <Greeter name={firstName} message="This is my message" />,
  document.getElementById('app')
);