jest.dontMock('../Upvoter');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

let Upvoter = null;


describe('Upvoter', function(){

	beforeEach(function(){
		Upvoter = require('../Upvoter');
	});

  it('should refuse to render without function', function(){
    let upvoter = TestUtils.renderIntoDocument(<Upvoter />);
    expect(TestUtils.isCompositeComponent(upvoter)).toBeFalsy();
  });

  it('should render with an onclick function', function(){
    let props = {
      onClick: jest.genMockFn()
    }

    let upvoter = TestUtils.renderIntoDocument(<Upvoter {...props} />);
		console.log("UP UP UPVOTER is", upvoter);
    expect(TestUtils.isCompositeComponent(upvoter)).toBeTruthy();
  });

  it('should contain an upvote thumb', function(){
    let props = {
      onClick: jest.genMockFn()
    }

    let upvoter = TestUtils.renderIntoDocument(<Upvoter {...props} />);
    expect(TestUtils.isCompositeComponent(upvoter)).toBeFalsy();
		let node = TestUtils.findRenderedDOMComponentWithClass(upvoter, "fa-thumbs-o-up").getDOMNode();
		console.log("ndoe is", node);
    expect(node).toBeTruthy();
  });

  it('should call onClick if clicked', function(){
    let props = {
      onClick: jest.genMockFn()
    }

    let upvoter = TestUtils.renderIntoDocument(<Upvoter {...props} />);
    let DOM = ReactDOM.findDOMNode(upvoter);

    TestUtils.Simulate.click(DOM);
    expect(props.onClick.mock.calls.length).toBe(1);

  });
})
