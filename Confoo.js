import React from 'react';
import ReactDOM from 'react-dom';
import ConferenceList from './ConferenceList';
import { createStore } from 'redux';
import confooReducer from './reducers';
import { Provider } from 'react-redux';

const initialState = [
  {
		title:"My conference",
		votes:1,
		image:"http://lorempixel.com/100/100/people/3/",
		description:"This is my conference about React and Redux and organising things."
	},
  {
		title:"His conference",
		votes:0,
		image:"http://lorempixel.com/100/100/people/9/",
		description:"This is a presentation about JQuery and web components compile to native windows phone."
	}
]

let store = createStore(confooReducer, initialState);

class Confoo extends React.Component {
  render() {
    return (
      <ConferenceList />
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Confoo/>
  </Provider>
  , document.getElementById('app'));
