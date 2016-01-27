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
    <div className="col-xs-3">	
      <a onClick={this.handleBackButtonClickEvent} href="#top"className="btn btn-success btn-lg btn-progress">
  			<span className="white-text">{this.props.label}</span><br />
  			<img className="arrow-button" src="../images/back.png" />
      </a>
	</div>
    );
  }
});

module.exports = BackButton;