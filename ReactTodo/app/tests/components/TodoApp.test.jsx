var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('Jquery');
var TestUtils = require('react-addons-test-utils');
var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  describe('handleAddTodo', () => {
    it('should add todo to todos state on handleAddTodo', () => {
      var todoText = 'Test text';
      var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
      todoApp.setState({ todos: [] });
      todoApp.handleAddTodo(todoText);
      expect(todoApp.state.todos[0].text).toBe(todoText);
    });
  });

  describe('handleToggle', () => {
    it('should toggle completed value when handleToggle called', () => {
      var todoData = {
        id: 11,
        text: 'Test features',
        completed: false
      };
      var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
      todoApp.setState({ todos: [todoData] });
      expect(todoApp.state.todos[0].completed).toBe(false);
      todoApp.handleToggle(todoData.id);
      expect(todoApp.state.todos[0].completed).toBe(true);
    });
  });  
});