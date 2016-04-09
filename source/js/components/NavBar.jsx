var React = require('react');
var NavBarActionCreators = require('../actions/NavBarActionCreators.js');
var UserSignInDetailsStore = require('../stores/UserSignInDetailsStore.js');
var SignInFormActionCreators = require('../actions/SignInFormActionCreators.js');
var StateStore = require('../stores/StateStore.js');

var NavBar = React.createClass({

  handleHomeButtonClickEvent: function () {
  	event.preventDefault();

    NavBarActionCreators.changeToLandingPage();
  },

  handleOrdersButtonClickEvent: function () {
  	event.preventDefault();

  	if (UserSignInDetailsStore.getSignedInStatus() === true) {
      SignInFormActionCreators.sendOrdersToStore();
    	NavBarActionCreators.changeToOrdersPage();
	}
	else {
		NavBarActionCreators.changeToSignInPage();
	}
  },

  render: function () {
    console.log(StateStore.getCurrentPage());
    return (
		<nav className="navbar transparent" id="top">
  				{StateStore.getCurrentPage() === "SIGN_IN_PAGE" || StateStore.getCurrentPage() === "ORDERS_PAGE" ? <a onClick={this.handleHomeButtonClickEvent} role="button" className="navbar-btn absolute-left" href="#contact">Contact Us</a> : <a onClick={this.handleHomeButtonClickEvent} role="button" className="navbar-btn left" href="#contact">Contact Us</a>}
  				{StateStore.getCurrentPage() === "LANDING_PAGE" ? null : <a onClick={this.handleHomeButtonClickEvent} role="button" className="navbar-btn center">Home</a>}
  				{StateStore.getCurrentPage() === "SIGN_IN_PAGE" || StateStore.getCurrentPage() === "ORDERS_PAGE" ? null : <a onClick={this.handleOrdersButtonClickEvent} role="button" className="navbar-btn right">My orders</a>}
  		</nav>
    );
  }
});

module.exports = NavBar;
