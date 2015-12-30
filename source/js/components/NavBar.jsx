var React = require('react');

var NavBar = React.createClass({
  render: function () {
    return (
		<nav className="navbar transparent">
  				<button type="button" className="btn navbar-btn left">Contact Us</button>
  				<button type="button" className="btn navbar-btn center">Home</button>
  				<button type="button" className="btn navbar-btn right">My orders</button>
  		</nav>
    );
  }
});

module.exports = NavBar;
