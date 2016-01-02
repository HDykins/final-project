var React = require('react');
var NavBarActionCreators = require('../actions/NavBarActionCreators.js');
var StateStore = require('../stores/StateStore.js');

var NavBar = React.createClass({

  handleHomeButtonClickEvent: function () {
  	event.preventDefault();

    NavBarActionCreators.changeToLandingPage();
  },

  handleOrdersButtonClickEvent: function () {
  	event.preventDefault();

  	if (StateStore.getSignedInStatus() === true) {
    	NavBarActionCreators.changeToOrdersPage();
	}
	else {
		NavBarActionCreators.changeToSignInPage();
	}
  },

  render: function () {
    return (
		<nav className="navbar transparent">
  				<button onClick={this.handleHomeButtonClickEvent} type="button" className="btn navbar-btn left"><a href="#bottom">Contact Us</a></button>
  				<button onClick={this.handleHomeButtonClickEvent} type="button" className="btn navbar-btn center">Home</button>
  				<button onClick={this.handleOrdersButtonClickEvent} type="button" className="btn navbar-btn right">My orders</button>
  		</nav>
    );
  }
});

module.exports = NavBar;
