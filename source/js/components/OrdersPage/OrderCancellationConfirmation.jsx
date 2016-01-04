var React = require('react');
var OrdersPageActionCreators = require('../../actions/OrdersPageActionCreators.js');

var OrderCancellationConfirmation = React.createClass({

  handleXButtonClickEvent: function () {
  	event.preventDefault();

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
				<button className="btn danger-button">Yes!</button>
				<button onClick={this.handleXButtonClickEvent} className="btn important-button">No!</button>
			</div>
		</div>
	</div>	
    );
  }
});

module.exports = OrderCancellationConfirmation;


