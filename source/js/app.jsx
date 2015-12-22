var React = require('react');
var ReactDOM = require('react-dom');
var LandingPage = require('./components/LandingPage/LandingPage.jsx');
var TreePage = require('./components/TreePage/TreePage.jsx');

ReactDOM.render(<TreePage />, document.querySelector('[data-react-application]'));
