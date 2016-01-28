var React = require('react');
var DecorationsPageActionCreators = require('../actions/DecorationsPageActionCreators.js');
var DeliveryPageActionCreators = require('../actions/DeliveryPageActionCreators.js');
var PaymentPageActionCreators = require('../actions/PaymentPageActionCreators.js');
var StateStore = require('../stores/StateStore.js');

var BackButton = React.createClass({

  handleBackButtonClickEvent: function () {
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
  			<i className="fa fa-arrow-left fa-2x arrow-button"></i>
      </a>
	</div>
    );
  }
});

module.exports = BackButton;