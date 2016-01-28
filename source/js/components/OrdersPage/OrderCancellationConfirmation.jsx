var React = require('react');
var UserSignInDetailsStore = require('../../stores/UserSignInDetailsStore.js');
var OrdersPageActionCreators = require('../../actions/OrdersPageActionCreators.js');
var SignInFormActionCreators = require('../../actions/SignInFormActionCreators.js');
var AuthenticationService = require('../../services/authentication.js');

var OrderCancellationConfirmation = React.createClass({

  handleXButtonClickEvent: function () {
  	event.preventDefault();

    OrdersPageActionCreators.setHideCancellationForm();
  },

  handleYesButtonClickEvent: function () {
  	event.preventDefault();

  	console.log("orderId" + this.props.orderId);
  	console.log("token" + UserSignInDetailsStore.getCurrentToken());

    AuthenticationService.deleteOrder(this.props.orderId, UserSignInDetailsStore.getCurrentToken(), function handleOrderDelete(error, response) {

        if (error) {
        	console.log('Failed to delete order');
          return;
        }

        console.log(response);
        SignInFormActionCreators.sendOrdersToStore();
    });
    OrdersPageActionCreators.setHideCancellationForm();
  },

  render: function () {
    return (
    <div>	
		<div className="transparent col-xs-6 order-cancellation-prompt">
			<button onClick={this.handleXButtonClickEvent} className="btn btn-default x-button">X</button>
			<div className="col-xs-10 col-xs-offset-1">
				<div className="rounded-box">
					<h3>Are you sure you wish to cancel this order?</h3>
				</div>
				<button onClick={this.handleYesButtonClickEvent} className="btn danger-button">Yes!</button>
				<button onClick={this.handleXButtonClickEvent} className="btn btn-success btn-lg">No!</button>
			</div>
		</div>
	</div>	
    );
  }
});

module.exports = OrderCancellationConfirmation;


