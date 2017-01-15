var React = require('react');
var TodoList = require('TodoList');
var TodoForm = require('TodoForm');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the Dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }, {
          id: 3,
          text: 'Leave mail on porche'
        }, {
          id: 4,
          text: 'Play video games'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    alert('new todo: ' + text);
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos} />
        <TodoForm onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;