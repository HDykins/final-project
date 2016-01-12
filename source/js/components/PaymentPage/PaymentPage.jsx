var React = require('react');
var NavBar = require('../NavBar.jsx');
var PopUpStore = require('../../stores/PopUpStore.js');
var Header1 = require('../Header1.jsx');
var OrderSummary = require('../OrderSummary.jsx');
var CardDetails = require('./CardDetails.jsx');
var BackButton = require('../BackButton.jsx');
var PriceTotal = require('../PriceTotal.jsx');
var ContinueButton = require('../ContinueButton.jsx');
var TermsConditions = require('./TermsConditions.jsx')

var PaymentPage = React.createClass({

    getInitialState: function () {
        return {
          isTermsConditionsFormVisible: PopUpStore.getTermsConditionsFormIsVisible()
        };
    },

    updateState: function () {
        this.setState(
        {
          isTermsConditionsFormVisible: PopUpStore.getTermsConditionsFormIsVisible()
        });
    },

    componentDidMount: function () {
        PopUpStore.addChangeListener(this.updateState);
    },

    componentWillUnmount: function () {
        PopUpStore.removeChangeListener(this.updateState);
    },    

    render: function () {
        return (
        	<div className="container-fluid grey-background">
            	<NavBar />
            	<div className="container">
            		<img src="../source/images/current-step-image-4.png" />
            		<Header1 label="Order Summary"/>
            		<div className="row">
                        <div className="rounded-box">
                			<OrderSummary />
                        </div>
            		</div>
            		<Header1 label="Card Details" />
            		<div className="row">
    	        		<CardDetails />
    	        	</div>	
    	        	<div className="row">
    	        		<BackButton label="Back to delivery details" />
    	        		<ContinueButton confirmOrder={this.handleOrderConfirmButtonClickEvent} label="Confirm order details" />
    	        	</div>
    	        	{this.state.isTermsConditionsFormVisible ? <TermsConditions /> : null}
          		</div>
          	</div>
        );
      }
    });

module.exports = PaymentPage;
