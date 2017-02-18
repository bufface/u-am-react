var React = require('react');

import TodoList from 'TodoList';
import TodoForm from 'TodoForm';
import TodoSearch from 'TodoSearch';

var uuid = require('uuid');
var moment = require('moment');

var TodoApp = React.createClass({
  render: function () {
    return (
      <div>
        <div className="page-actions">
          <a href="#">Logout</a>
        </div>

        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch />  
              <TodoList />
              <TodoForm />
            </div>  
          </div>  
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
