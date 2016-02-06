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
var OrdersStore = require('../../stores/OrdersStore.js');
var AuthenticationService = require('../../services/authentication.js');
var StateStore = require('../../stores/StateStore.js');
var Footer = require('../Footer.jsx');
var UserSignInDetailsStore = require('../../stores/UserSignInDetailsStore.js');
var PaymentPageActionCreators = require('../../actions/PaymentPageActionCreators.js');

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

    handleOrderConfirmButtonClickEvent : function () {

      PaymentPageActionCreators.setCurrentOrderId();
      PaymentPageActionCreators.setOrder();

      console.log(OrdersStore.getOrder());
      console.log(OrdersStore.getCurrentOrderId());

          AuthenticationService.saveOrder(OrdersStore.getOrder(), OrdersStore.getCurrentOrderId(), UserSignInDetailsStore.getCurrentUserId(), function handleUserCofirmOrder(error, response) {

          if (error) {
            console.log("No");
            return;
          }

          console.log("Yes");
          if (UserSignInDetailsStore.getSignedInStatus()) {
            null
          }

        }.bind(this));
    },       
   

    render: function () {
        return (
        	<div className="container-fluid grey-background">
            	<NavBar />
            	<div className="container">
            		<img src="../images/current-step-image-4.png" />
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
              <Footer />
          	</div>
        );
      }
    });

module.exports = PaymentPage;
