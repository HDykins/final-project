var React = require('react');
var TotalPriceStore = require('../stores/TotalPriceStore.js');

var PriceTotal = React.createClass({
  render: function () {
    return (
    <div className="col-xs-6 center-block">
		<div className="rounded-box">
			<strong>Total Price</strong>
			<div>
				<span className="price big-price">{'£' + TotalPriceStore.getCurrentOverallPrice()}</span>
			</div>
		</div>
	</div>
    );
  }
});

module.exports = PriceTotal;