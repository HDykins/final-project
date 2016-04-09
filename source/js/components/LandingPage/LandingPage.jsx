var React = require('react');
var NavBar = require('../NavBar.jsx');
var StartButton = require('./StartButton.jsx');
var Footer = require('../Footer.jsx');

var LandingPage = React.createClass({

  render: function () {
    return (
    	<div className="container-fluid landing-page">
        	<NavBar />
        	<hr /><br />
        	<div className="container">
	        	<div className="row">
	        		<div className="col-xs-10 col-xs-offset-1">
	        			<div>
	        				<h1>Order a personalised christmas tree and its decorations in 4 quick and simple steps and have it installed for you!</h1>
	        			</div>
	        		</div>
	        	</div>
	        	<div className="row">
	        		<StartButton />
	        	</div>
	        	<div className="row">
	        		<div className="col-xs-10 col-xs-offset-1">
	        			<div>
	        				<p>We provide a service that allows you to order a Christmas tree and have it delivered to your home or office. We are unique in that we provide an option to have your tree installed and decorated at your location so that you don't have to! Click "Order Now" to start designing your own personal tree</p>
	        			</div>
	        		</div>	
	        	</div>
	        	<br /><hr /><br />
	        	<div className="row">
	        		<div className="col-xs-3">
	        			<div>
	        				<h2>Step 1: Choose tree type</h2>
	        				<p>Choose from a selection of tree types and the height of your tree, we cover a wide range of price brackets</p>
	        			</div>
	        		</div>
	        		<div className="col-xs-3">
	        			<div>
	        				<h2>Step 2: Choose decorations</h2>
	        				<p>Browse and preview a variety of amazing decorations to adorn your tree, or continue with just a tree</p>
	        			</div>
	        		</div>
	        		<div className="col-xs-3">
	        			<div>
	        				<h2>Step 3: Choose delivery options</h2>
	        				<p>Order for collection or delivery and choose date, time, services and collection location</p>
	        			</div>
	        		</div>
	        		<div className="col-xs-3">
	        			<div>
	        				<h2>Step 4: Payment</h2>
	        				<p>Quick payment process without hassle and an full overview of your order</p>
	        			</div>
	        		</div>
	        	</div>
	        	<br /><hr /><br />
	        	<div className="row">
	        		<div className="col-xs-3">
	        			<div className="rounded-box">
	        				<h4 id="contact">Contact details</h4>
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
      		<br /><hr /><br />
      		<Footer />
      	</div>
    );
  }
});

module.exports = LandingPage;
