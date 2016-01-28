var React = require('react');
var CurrentDeliveryUserDetailsStore = require('../../stores/CurrentDeliveryUserDetailsStore.js');
var DeliveryPageActionCreators = require('../../actions/DeliveryPageActionCreators.js');

var DeliveryAddress = React.createClass({

  handleAddressDetailChange: function () {

  	DeliveryPageActionCreators.updateAddressDetails([this.refs.addressLine1.value, this.refs.addressLine2.value, this.refs.townCity.value, this.refs.county.value, this.refs.postcode.value]);
  },

  render: function () {
    return (
	<div>
		<h3>Delivery Address</h3>
		<ul className="list-unstyled">
			<div className="col-xs-6 col-xs-offset-3">
				<div className="rounded-box">
					<li><em>Address Line 1&nbsp;&nbsp;&nbsp;&nbsp;</em><input onChange={this.handleAddressDetailChange} type="text" ref="addressLine1" placeholder="House number + Street name"></input></li>
				</div>
			</div>
			<div className="col-xs-6 col-xs-offset-3">
				<div className="rounded-box">
					<li><em>Address Line 2&nbsp;&nbsp;&nbsp;&nbsp;</em><input onChange={this.handleAddressDetailChange} type="text" ref="addressLine2" value={CurrentDeliveryUserDetailsStore.getDeliveryAddressDetails().addressLine2}></input></li>
				</div>
			</div>
			<div className="col-xs-6 col-xs-offset-3">
				<div className="rounded-box">
					<li><em>Town/City&nbsp;&nbsp;&nbsp;&nbsp;</em><input onChange={this.handleAddressDetailChange} type="text" ref="townCity" value={CurrentDeliveryUserDetailsStore.getDeliveryAddressDetails().townCity}></input></li>
				</div>
			</div>
			<div className="col-xs-6 col-xs-offset-3">
				<div className="rounded-box">
					<li><em>County&nbsp;&nbsp;&nbsp;&nbsp;</em><input onChange={this.handleAddressDetailChange} type="text" ref="county" value={CurrentDeliveryUserDetailsStore.getDeliveryAddressDetails().county}></input></li>
				</div>
			</div>
			 <div className="col-xs-6 col-xs-offset-3">
				<div className="rounded-box">
					<li><em>PostCode&nbsp;&nbsp;&nbsp;&nbsp;</em><input onChange={this.handleAddressDetailChange} type="text" ref="postcode" value={CurrentDeliveryUserDetailsStore.getDeliveryAddressDetails().postcode}></input></li>
				</div>
			</div>
		</ul>	
	</div>
    );
  }
});

module.exports = DeliveryAddress;