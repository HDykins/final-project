var React = require('react');
var StateStore = require('../stores/StateStore.js');
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
    return {
      page: StateStore.getCurrentPage()
    };
  },

  updateState: function () {
    this.setState(
    {
      page: StateStore.getCurrentPage()
    });
  },

  // getList: function () {
  //   return {
  //     list: ListItemStore.getAllListItems()
  //   };
  // },

  componentDidMount: function () {
    StateStore.addChangeListener(this.updateState);
  },

  componentWillUnmount: function () {
    StateStore.removeChangeListener(this.updateState);
  },

  render: function () {
    {if (this.state.page === 'LANDING_PAGE') {
      return (
        <LandingPage />
        );
    }}
    {if (this.state.page === 'TREE_PAGE') {
      return (
        <TreePage />
        );
    }}
  }
});

module.exports = Application;
