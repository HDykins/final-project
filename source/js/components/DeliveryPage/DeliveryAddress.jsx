var React = require('react');

var DeliveryAddress = React.createClass({
  render: function () {
    return (
	<div className="rounded-box">
		<h3>Delivery Address</h3>
		<ul className="list-unstyled">
			<div className="col-xs-6 col-xs-offset-3">
				<div className="rounded-box">
					<li><em>Address Line 1&nbsp;&nbsp;&nbsp;&nbsp;</em><input type="text" value="40 Abbey Road"></input></li>
				</div>
			</div>
			<div className="col-xs-6 col-xs-offset-3">
				<div className="rounded-box">
					<li><em>Address Line 2&nbsp;&nbsp;&nbsp;&nbsp;</em><input type="text" value="Bush Hill Park"></input></li>
				</div>
			</div>
			<div className="col-xs-6 col-xs-offset-3">
				<div className="rounded-box">
					<li><em>Town/City&nbsp;&nbsp;&nbsp;&nbsp;</em><input type="text" value="Enfield, London"></input></li>
				</div>
			</div>
			<div className="col-xs-6 col-xs-offset-3">
				<div className="rounded-box">
					<li><em>County&nbsp;&nbsp;&nbsp;&nbsp;</em><input type="text" value="Middlesex"></input></li>
				</div>
			</div>
			 <div className="col-xs-6 col-xs-offset-3">
				<div className="rounded-box">
					<li><em>PostCode&nbsp;&nbsp;&nbsp;&nbsp;</em><input type="text" value="EN12QN"></input></li>
				</div>
			</div>
		</ul>	
	</div>
    );
  }
});

module.exports = DeliveryAddress;