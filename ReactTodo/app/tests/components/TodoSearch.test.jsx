var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('Jquery');
var TestUtils = require('react-addons-test-utils');
var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  describe('handleSearch', () => {
    it('should call onSearch with entered input text', () => {
      var searchText = 'Dog';
      var spy = expect.createSpy();
      var todoSeach = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
      todoSeach.refs.searchText.value = searchText;
      TestUtils.Simulate.change(todoSeach.refs.searchText);
      expect(spy).toHaveBeenCalledWith(false, searchText);
    });

    it('should call onSearch with proper checked value', () => {
      var checkbox = true;
      var spy = expect.createSpy();
      var todoSeach = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
      todoSeach.refs.showCompleted.checked = checkbox;
      TestUtils.Simulate.change(todoSeach.refs.showCompleted);
      expect(spy).toHaveBeenCalledWith(checkbox, '');
    });
  });  
});