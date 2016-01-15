var React = require('react');
var TreePageActionCreators = require('../actions/TreePageActionCreators.js');
var DecorationsPageActionCreators = require('../actions/DecorationsPageActionCreators.js');
var DeliveryPageActionCreators = require('../actions/DeliveryPageActionCreators.js');
var PaymentPageActionCreators = require('../actions/PaymentPageActionCreators.js');
var StateStore = require('../stores/StateStore.js');

var ContinueButton = React.createClass({

  handleContinueButtonClickEvent: function () {
  	event.preventDefault();
  	if (StateStore.getCurrentPage() === 'TREE_PAGE') {
  		TreePageActionCreators.changeToDecorationsPage();
  	} 
    else if (StateStore.getCurrentPage() === 'DECORATIONS_PAGE') {
      DecorationsPageActionCreators.changeToDeliveryPage();
    }
    else if (StateStore.getCurrentPage() === 'DELIVERY_PAGE') {
      DeliveryPageActionCreators.changeToPaymentPage();
    }
    else if (StateStore.getCurrentPage() === 'PAYMENT_PAGE') {
      this.props.confirmOrder();
      PaymentPageActionCreators.changeToThanksPage();
    }       
  },

  render: function () {
    return (
    <div onClick={this.handleContinueButtonClickEvent} className="col-xs-3 right">	
		<div className="rounded-box">
			<span><strong>{this.props.label}</strong></span><br />
			<img className="arrow-button" src="../source/images/forward.png" />
		</div>
	</div>	
    );
  }
});

module.exports = ContinueButton;