var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');
var {TodoForm} = require('TodoForm');

import * as actions from 'actions';

describe('TodoForm', () => {
  it('should exist', () => {
    expect(TodoForm).toExist();
  });

  describe('ADD_TODO', () => {
    it('should dispatch ADD_TODO when valid todo text', () => {
      var todoText = 'Some random text';
      var action = actions.startAddTodo(todoText);
      var spy = expect.createSpy();
      var todoForm = TestUtils.renderIntoDocument(<TodoForm dispatch={spy} />);
      var $el = $(ReactDOM.findDOMNode(todoForm));
      todoForm.refs.todoText.value = todoText;
      TestUtils.Simulate.submit($el.find('form')[0]);
      expect(spy).toHaveBeenCalledWith(action);
    });
    it('should not dispatch ADD_TODO when invalid todo text', () => {
      var spy = expect.createSpy();
      var todoForm = TestUtils.renderIntoDocument(<TodoForm dispatch={spy} />);
      var $el = $(ReactDOM.findDOMNode(todoForm));
      todoForm.refs.todoText.value = '';
      TestUtils.Simulate.submit($el.find('form')[0]);
      expect(spy).toNotHaveBeenCalled();
    });
  });
});
