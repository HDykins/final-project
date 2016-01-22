var React = require('react');
var OrdersPageActionCreators = require('../../actions/OrdersPageActionCreators.js');
var TreeInformationStore = require('../../stores/TreeInformationStore.js');
var moment = require('moment');

var OrderOptionsButtons = React.createClass({

  handleOrderAgainButtonClickEvent: function () {

  	var orderDetails = this.props.order.userChoices
  	event.preventDefault();

  	OrdersPageActionCreators.populateStoresWithSelectedOrder(orderDetails);
  	console.log(TreeInformationStore.getCurrentTreeView());
  	console.log(TreeInformationStore.getCurrentHeight());
  	console.log(TreeInformationStore.getCurrentPrice());

  	OrdersPageActionCreators.changeToPaymentPage();
  },

  handleCancelOrderButtonClickEvent: function () {
  	event.preventDefault();

  	console.log(this.props.setOrderToBeChanged);
  	console.log(this.props.order.id);

  	this.props.setOrderToBeChanged(this.props.order.id)
    OrdersPageActionCreators.setShowCancellationForm();
  },

  render: function () {	
    return (
    <div className="row">	
		<div className="col-xs-3">
			<div className="rounded-box">
				<span>Date Ordered:&nbsp;</span>
				<span className="red">{this.props.order.userChoices.orderDate}</span>
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


