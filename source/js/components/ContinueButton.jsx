var React = require('react');
var TreePageActionCreators = require('../actions/TreePageActionCreators.js');
var DecorationsPageActionCreators = require('../actions/DecorationsPageActionCreators.js');
var DeliveryPageActionCreators = require('../actions/DeliveryPageActionCreators.js');
var PaymentPageActionCreators = require('../actions/PaymentPageActionCreators.js');
var StateStore = require('../stores/StateStore.js');
var CurrentDeliveryUserDetailsStore = require('../stores/CurrentDeliveryUserDetailsStore.js');

var ContinueButton = React.createClass({

  handleContinueButtonClickEvent: function () {
  	if (StateStore.getCurrentPage() === 'TREE_PAGE') {
  		TreePageActionCreators.changeToDecorationsPage();
  	} 
    else if (StateStore.getCurrentPage() === 'DECORATIONS_PAGE') {
      DecorationsPageActionCreators.changeToDeliveryPage();
    }
    else if (StateStore.getCurrentPage() === 'DELIVERY_PAGE') {
      console.log(typeof CurrentDeliveryUserDetailsStore.getCurrentMonthSelection());
      console.log(CurrentDeliveryUserDetailsStore.getCurrentMonthSelection());

      if ((typeof CurrentDeliveryUserDetailsStore.getCurrentDaySelection() !== "string") && (typeof CurrentDeliveryUserDetailsStore.getCurrentMonthSelection() !== "string") && (typeof CurrentDeliveryUserDetailsStore.getCurrentYearSelection() !== "string")) {
      DeliveryPageActionCreators.setShowDateValidationMessageToFalse();
      DeliveryPageActionCreators.changeToPaymentPage();
    } else {
      console.log("No date");
      DeliveryPageActionCreators.setShowDateValidationMessageToTrue();
    }
  }
    else if (StateStore.getCurrentPage() === 'PAYMENT_PAGE') {
      this.props.confirmOrder();
      PaymentPageActionCreators.changeToThanksPage();
    }       
  },

  render: function () {
    return (
    <div className="col-xs-3 right">	
		<a onClick={this.handleContinueButtonClickEvent} href={CurrentDeliveryUserDetailsStore.getShowDateValidationMessage() ? "#bottom" : "#top"} className="btn btn-success btn-lg btn-progress">
			<span className="white-text">{this.props.label}</span><br />
			<i className="fa fa-arrow-right fa-2x arrow-button"></i>
		</a>
	</div>	
    );
  }
});

module.exports = ContinueButton;