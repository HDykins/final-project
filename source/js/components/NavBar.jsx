var React = require('react');

var NavBar = React.createClass({
  render: function () {
    return (
		<nav className="navbar navbar-default">
  			<div className="container-fluid">
  				<button type="button" className="btn btn-default navbar-btn">Contact Us</button>
  				<button type="button" className="btn btn-default navbar-btn">Home</button>
  				<button type="button" className="btn btn-default navbar-btn">My orders</button>
  			</div>
  		</nav>
    );
  }
});

module.exports = NavBar;
