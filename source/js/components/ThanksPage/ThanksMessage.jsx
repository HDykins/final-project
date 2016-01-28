var React = require('react');
var OrdersStore = require('../../stores/OrdersStore.js');

var ThanksMessage = React.createClass({
  render: function () {
    return (
	<div className="rounded-box">
		<h2>Thank you for your purchase! Your unique order ID is <strong>{OrdersStore.getCurrentOrderId()}</strong></h2>
		<p>If you have any enquiries regarding our products or your current order please get in contact with our support team:</p>
		<h3>Email: hjdykins@hotmail.com</h3>
		<h3>Phone: 07542284533</h3>
	</div>
    );
  }
});

module.exports = ThanksMessage;