var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('Jquery');
var TestUtils = require('react-addons-test-utils');
// var TodoSearch = require('TodoSearch');
import { TodoSearch } from 'TodoSearch';

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  describe('SET_SEARCH_TEXT', () => {
    it('should dispatch SET_SEARCH_TEXT on input change', () => {
      var searchText = 'Dog';
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText
      };
      var spy = expect.createSpy();
      var todoSeach = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);
      todoSeach.refs.searchText.value = searchText;
      TestUtils.Simulate.change(todoSeach.refs.searchText);
      expect(spy).toHaveBeenCalledWith(action);
    });
  });

  describe('TOGGLE_SHOW_COMPLETED', () => {
      it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
        var checkbox = true;
        var action = {
          type: 'TOGGLE_SHOW_COMPLETED'
        };
        var spy = expect.createSpy();
        var todoSeach = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);
        todoSeach.refs.showCompleted.checked = checkbox;
        TestUtils.Simulate.change(todoSeach.refs.showCompleted);
        expect(spy).toHaveBeenCalledWith(action);
      });
    });
});
