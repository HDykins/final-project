var React = require('react');
var LandingPage = require('./LandingPage/LandingPage.jsx');
var TreePage = require('./TreePage/TreePage.jsx');
var DecorationsPage = require('./DecorationsPage/DecorationsPage.jsx');
var DeliveryPage = require('./DeliveryPage/DeliveryPage.jsx');
var PaymentPage = require('./PaymentPage/PaymentPage.jsx');
var ThanksPage = require('./ThanksPage/ThanksPage.jsx');
var SignInPage = require('./SignInPage/SignInPage.jsx');
var OrdersPage = require('./OrdersPage/OrdersPage.jsx');

var Application = React.createClass({
  
  getInitialState: function () {
    return {state: "LANDING_PAGE"};
  },

  // updateState: function () {
  //   this.setState(this.getList());
  // },

  // getList: function () {
  //   return {
  //     list: ListItemStore.getAllListItems()
  //   };
  // },

  // componentDidMount: function () {
  //   ListItemStore.addChangeListener(this.updateState);
  // },

  // componentWillUnmount: function () {
  //   ListItemStore.removeChangeListener(this.updateState);
  // },

  render: function () {
    var page = this.state
    // {if (this.getInitialState() === page) {
      return (
        <LandingPage />
        );
    // }}
  }
});

module.exports = Application;
