var React = require('react');

var DeliveryInfo = React.createClass({
  render: function () {
    return (
	<div>
		<div className="col-xs-6">
			<div className="rounded-box">
				<h3>Additional delivery information</h3>
			</div>
			<div className="rounded-box">
				<p>Beware of Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
			</div>
		</div>
		<div className="col-xs-6">
			<div className="rounded-box">
				<h3>Additional delivery information <span className="price">£15</span></h3>
				<input type="checkbox" />
			</div>
		</div>
	</div>
    );
  }
});

module.exports = DeliveryInfo;

