var React = require('react');

var OrderCancellationConfirmation = React.createClass({
  render: function () {
    return (
    <div>	
		<div className="transparent col-xs-6 col-xs-offset-3">
			<div className="col-xs-10 col-xs-offset-1">
				<button>X</button>
				<div className="rounded-box">
					<h3>Are you sure you wish to cancel this order?</h3>
				</div>
				<button>Yes!</button>
				<button>No!</button>
			</div>
		</div>
	</div>	
    );
  }
});

module.exports = OrderCancellationConfirmation;


