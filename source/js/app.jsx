var React = require('react');
var ReactDOM = require('react-dom');
var LandingPage = require('./components/LandingPage/LandingPage.jsx');
var TreePage = require('./components/TreePage/TreePage.jsx');
var DecorationsPage = require('./components/DecorationsPage/DecorationsPage.jsx');
var DeliveryPage = require('./components/DeliveryPage/DeliveryPage.jsx');
var PaymentPage = require('./components/PaymentPage/PaymentPage.jsx');
var ThanksPage = require('./components/ThanksPage/ThanksPage.jsx');

ReactDOM.render(<ThanksPage />, document.querySelector('[data-react-application]'));
