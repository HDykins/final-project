var React = require('react');
var NavBar = require('../NavBar.jsx');
var Header1 = require('../Header1.jsx');
var OrderSummary = require('../OrderSummary.jsx');
var CardDetails = require('./CardDetails.jsx');
var BackButton = require('../BackButton.jsx');
var PriceTotal = require('../PriceTotal.jsx');
var ContinueButton = require('../ContinueButton.jsx');
var TermsConditions = require('./TermsConditions.jsx')

var PaymentPage = React.createClass({

render: function () {
    return (
    	<div className="container-fluid grey-background">
        	<NavBar />
        	<div className="container">
        		<img src="../source/images/current-step-image-4.png" />
        		<Header1 />
        		<div className="row">
                    <div className="rounded-box">
            			<OrderSummary />
                    </div>
        		</div>
        		<Header1 />
        		<div className="row">
	        		<CardDetails />
	        	</div>	
	        	<div className="row">
	        		<BackButton />
	        		<ContinueButton />
	        	</div>
	        	<TermsConditions />
      		</div>
      	</div>
    );
  }
});

module.exports = PaymentPage;
