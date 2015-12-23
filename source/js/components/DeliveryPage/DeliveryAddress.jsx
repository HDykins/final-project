var React = require('react');

var DeliveryAddress = React.createClass({
  render: function () {
    return (
	<div className="rounded-box">
		<h3>Delivery Address</h3>
		<ul>
			<li><em>Address Line 1</em><input value="40 Abbey Road"></input></li>
			<li><em>Address Line 2</em><input value="Bush Hill Park"></input></li>
			<li><em>Town/City</em><input value="Enfield, London"></input></li>
			<li><em>County</em><input value="Middlesex"></input></li>
			<li><em>PostCode</em><input value="EN12QN"></input></li>
		</ul>	
	</div>
    );
  }
});

module.exports = DeliveryAddress;