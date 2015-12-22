var React = require('react');
var NavBar = require('../NavBar.jsx');
var StartButton = require('./StartButton.jsx');

var LandingPage = React.createClass({

  render: function () {
    return (
    	<div className="container-fluid">
        	<NavBar />
        	<div className="container">
	        	<div className="row">
	        		<div className="col-xs-8">
	        			Box with short description
	        		</div>
	        	</div>
	        	<div className="row">
	        		<div className="col-xs-8">
	        			Box with longer description
	        		</div>
	        	</div>
	        	<div className="row">
	        		<StartButton />
	        	</div>
	        	<div className="row">
	        		<div className="col-xs-2">
	        			Contact details
	        		</div>
	        		<div className="col-xs-2">
	        			Address
	        		</div>	        		
	        	</div>	        	
      		</div>
      	</div>
    );
  }
});

module.exports = LandingPage;
