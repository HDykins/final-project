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
    <div className="row order-options-row">	
		<div className="col-xs-3">
			<div>
				<p className="red">Date Ordered: {this.props.order.userChoices.orderDate}</p>
			</div>
		</div>
		<div className="col-xs-3">
			<button onClick={this.handleCancelOrderButtonClickEvent} type="button" className="btn danger-button btn-large">
				Cancel Order
			</button>
		</div>
		<div className="col-xs-3">
			<div>
				<p>You can order another tree using these order details!</p>
			</div>
		</div>
		<div className="col-xs-3">
			<a role="button" href="#top" onClick={this.handleOrderAgainButtonClickEvent} type="button" className="btn btn-option">
				Order again
			</a>
		</div>
	</div>	
    );
  }
});

module.exports = OrderOptionsButtons;


