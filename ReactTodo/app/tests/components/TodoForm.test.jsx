var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');
var TodoForm = require('TodoForm');

describe('TodoForm', () => {
  it('should exist', () => {
    expect(TodoForm).toExist();
  });

  describe('onAddTodo', () => {
    it('should call onAddTodo prop with valid data', () => {
      var todoText = 'Some random text';
      var spy = expect.createSpy();
      var todoForm = TestUtils.renderIntoDocument(<TodoForm onAddTodo={spy} />);
      var $el = $(ReactDOM.findDOMNode(todoForm));
      todoForm.refs.todoText.value = todoText;
      TestUtils.Simulate.submit($el.find('form')[0]);
      expect(spy).toHaveBeenCalled(todoText);
    });
    it('should not call onAddTodo prop when invalid input', () => {
      var spy = expect.createSpy();
      var todoForm = TestUtils.renderIntoDocument(<TodoForm onAddTodo={spy} />);
      var $el = $(ReactDOM.findDOMNode(todoForm));
      todoForm.refs.todoText.value = '';
      TestUtils.Simulate.submit($el.find('form')[0]);
      expect(spy).toNotHaveBeenCalled();
    });
  });
});