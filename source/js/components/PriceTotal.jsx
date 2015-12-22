var React = require('react');

var PriceTotal = React.createClass({
  render: function () {
    return (
	<div className="rounded-box">
		<strong>Total Price</strong>
		<div className="price">£24</div>
	</div>
    );
  }
});

module.exports = PriceTotal;