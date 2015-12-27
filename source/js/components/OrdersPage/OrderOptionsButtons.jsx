var React = require('react');

var OrderOptionsButtons = React.createClass({
  render: function () {
    return (
    <div>	
		<div className="col-xs-3">
			<div className="rounded-box">
				<span>Date Ordered</span>
				<span>11/12/2015</span>
			</div>
		</div>
		<div className="col-xs-3">
			<div className="rounded-box">
				<span>Cancel Order</span>
			</div>
		</div>
		<div className="col-xs-3">
			<div className="rounded-box">
				<p>You can order another tree using these order details!</p>
			</div>
		</div>
		<div className="col-xs-3">
			<div className="rounded-box">
				<span>Order again with these details </span>
			</div>
		</div>
	</div>	
    );
  }
});

module.exports = OrderOptionsButtons;


