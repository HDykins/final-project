var React = require('react');
var ReactDOM = require('react-dom');
var LandingPage = require('./components/LandingPage/LandingPage.jsx');
var TreePage = require('./components/TreePage/TreePage.jsx');
var DecorationsPage = require('./components/DecorationsPage/DecorationsPage.jsx');
var DeliveryPage = require('./components/DeliveryPage/DeliveryPage.jsx');
var PaymentPage = require('./components/PaymentPage/PaymentPage.jsx');
var ThanksPage = require('./components/ThanksPage/ThanksPage.jsx');
var SignInPage = require('./components/SignInPage/SignInPage.jsx');
var OrdersPage = require('./components/OrdersPage/OrdersPage.jsx');

ReactDOM.render(<SignInPage />, document.querySelector('[data-react-application]'));
