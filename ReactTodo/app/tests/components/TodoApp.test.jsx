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
});