var React = require('react');
var NavBar = require('../NavBar.jsx');
var StartButton = require('./StartButton.jsx');

var LandingPage = React.createClass({

  render: function () {
    return (
    	<div className="container-fluid landing-page">
        	<NavBar />
        	<div className="container">
	        	<div className="row">
	        		<div className="col-xs-8 col-xs-offset-2">
	        			<div className="rounded-box">
	        				<h1>Order a personalised christmas tree and its decorations and have it installed for you!</h1>
	        			</div>
	        		</div>
	        	</div>
	        	<div className="row">
	        		<StartButton />
	        	</div>
	        	<div className="row">
	        		<div className="col-xs-8 col-xs-offset-2">
	        			<div className="rounded-box">
	        				<h3>We provide a service that allows you to order a Christmas tree and have it delivered to your home or office. We are unique in that we provide an option to have your tree installed and decorated at your location so that you don''t have to! Click "Order Now" to start designing your own personal tree</h3>
	        			</div>
	        		</div>	
	        	</div>
	        	<div className="row">
	        		<div className="col-xs-3">
	        			<div className="rounded-box">
	        				<h4>Contact details</h4>
								<span>Email: hjdykins@hotmail.com</span><br />
								<span>Phone: 07542284533</span>
	        			</div>
	        		</div>
	        		<div className="col-xs-3 col-xs-offset-6">
	        			<div className="rounded-box">
		        			<h4>Address:</h4> 
	        				<ul className="list-unstyled">
	        					<li>40 Abbey Road, Bush Hill Park</li>
	        					<li>Enfield, Middlesex</li>
	        					<li>London, EN1 2QN</li>
	        				</ul>
        				</div>
	        		</div>	        		
	        	</div>	        	
      		</div>
      	</div>
    );
  }
});

module.exports = LandingPage;
