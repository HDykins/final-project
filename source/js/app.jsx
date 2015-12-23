var React = require('react');
var ReactDOM = require('react-dom');
var LandingPage = require('./components/LandingPage/LandingPage.jsx');
var TreePage = require('./components/TreePage/TreePage.jsx');
var DecorationsPage = require('./components/DecorationsPage/DecorationsPage.jsx');

ReactDOM.render(<DecorationsPage />, document.querySelector('[data-react-application]'));
