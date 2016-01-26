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
		<nav className="navbar transparent">
  				{StateStore.getCurrentPage() === "SIGN_IN_PAGE" || StateStore.getCurrentPage() === "ORDERS_PAGE" ? <a onClick={this.handleHomeButtonClickEvent} role="button" className="btn navbar-btn absolute-left" href="#bottom">Contact Us</a> : <a onClick={this.handleHomeButtonClickEvent} role="button" className="btn navbar-btn left" href="#bottom">Contact Us</a>}
  				{StateStore.getCurrentPage() === "LANDING_PAGE" ? null : <button onClick={this.handleHomeButtonClickEvent} type="button" className="btn navbar-btn center">Home</button>}
  				{StateStore.getCurrentPage() === "SIGN_IN_PAGE" || StateStore.getCurrentPage() === "ORDERS_PAGE" ? null : <button onClick={this.handleOrdersButtonClickEvent} type="button" className="btn navbar-btn right">My orders</button>}
  		</nav>
    );
  }
});

module.exports = NavBar;
