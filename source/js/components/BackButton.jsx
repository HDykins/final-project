var React = require('react');
var DecorationsPageActionCreators = require('../actions/DecorationsPageActionCreators.js');
var DeliveryPageActionCreators = require('../actions/DeliveryPageActionCreators.js');
var PaymentPageActionCreators = require('../actions/PaymentPageActionCreators.js');
var StateStore = require('../stores/StateStore.js');

var BackButton = React.createClass({

  handleBackButtonClickEvent: function () {
  	event.preventDefault();
    if (StateStore.getCurrentPage() === 'DECORATIONS_PAGE') {
      DecorationsPageActionCreators.changeToTreePage();
    }
    else if (StateStore.getCurrentPage() === 'DELIVERY_PAGE') {
      DeliveryPageActionCreators.changeToDecorationsPage();
    }
    else if (StateStore.getCurrentPage() === 'PAYMENT_PAGE') {
      PaymentPageActionCreators.changeToDeliveryPage();
    }       
  },


  render: function () {
    return (
    <div onClick={this.handleBackButtonClickEvent} className="col-xs-3">	
		<div className="rounded-box">
			<span><strong>{this.props.label}</strong></span><br />
			<img className="arrow-button" src="../source/images/back.png" />
		</div>
	</div>
    );
  }
});

module.exports = BackButton;