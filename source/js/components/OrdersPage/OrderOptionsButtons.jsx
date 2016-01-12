var React = require('react');
var OrdersPageActionCreators = require('../../actions/OrdersPageActionCreators.js');

var OrderOptionsButtons = React.createClass({

  handleOrderAgainButtonClickEvent: function () {
  	event.preventDefault();

    OrdersPageActionCreators.changeToPaymentPage();
  },

  handleCancelOrderButtonClickEvent: function () {
  	event.preventDefault();

    OrdersPageActionCreators.setShowCancellationForm();
  },

  render: function () {	
    return (
    <div className="row">	
		<div className="col-xs-3">
			<div className="rounded-box">
				<span>Date Ordered:&nbsp;</span>
				<span className="red">11/12/2015</span>
			</div>
		</div>
		<div className="col-xs-3">
			<button onClick={this.handleCancelOrderButtonClickEvent} type="button" className="btn danger-button">
				Cancel Order
			</button>
		</div>
		<div className="col-xs-3">
			<div className="rounded-box">
				<p>You can order another tree using these order details!</p>
			</div>
		</div>
		<div className="col-xs-3">
			<button onClick={this.handleOrderAgainButtonClickEvent} type="button" className="btn">
				<span className="white-text">Order again</span>
			</button>
		</div>
	</div>	
    );
  }
});

module.exports = OrderOptionsButtons;


