var React = require('react');
var CurrentDeliveryUserDetailsStore = require('../../stores/CurrentDeliveryUserDetailsStore.js');
var DeliveryPageActionCreators = require('../../actions/DeliveryPageActionCreators.js');

var CollectionLocationDetails = React.createClass({

  handlePrimaryAddressClickEvent: function () {
  	DeliveryPageActionCreators.setCurrentSelectedCollectionAddressToPrimary();
  	DeliveryPageActionCreators.setCurrentCollectionAddressCoordinatesToPrimary();
  },

  handleSecondaryAddressClickEvent: function () {
  	DeliveryPageActionCreators.setCurrentSelectedCollectionAddressToSecondary();
  	DeliveryPageActionCreators.setCurrentCollectionAddressCoordinatesToSecondary();
  },

  handleTertiaryAddressClickEvent: function () {
  	DeliveryPageActionCreators.setCurrentSelectedCollectionAddressToTertiary();
  	DeliveryPageActionCreators.setCurrentCollectionAddressCoordinatesToTertiary();
  },  

  render: function () {
    return (
   	<div className="col-xs-6">
		<div className="rounded-box">
			<h2>Choose collection point</h2>
		</div>
		<div onClick={this.handlePrimaryAddressClickEvent} className={CurrentDeliveryUserDetailsStore.getCurrentSelectedCollectionAddress() === "PRIMARY_COLLECTION_ADDRESS" ? "rounded-box highlight" : "rounded-box"}>
			<div className="col-xs-4">
				40 Abbey Road<br/>Bush Hill Park<br/>Enfield
			</div>
			<div className="col-xs-4">
				Collection times: 9-5pm<br/>Monday-Friday
			</div>
			<div className="col-xs-4">
				Middlesex<br/>London<br/>EN12QN
			</div>
		</div>
		<div onClick={this.handleSecondaryAddressClickEvent} className={CurrentDeliveryUserDetailsStore.getCurrentSelectedCollectionAddress() === "SECONDARY_COLLECTION_ADDRESS" ? "rounded-box highlight" : "rounded-box"}>
			<div className="col-xs-4">
				41 Abbey Road<br/>Bush Hill Park<br/>Enfield
			</div>
			<div className="col-xs-4">
				Collection times: 9-5pm<br/>Monday-Friday
			</div>
			<div className="col-xs-4">
				Middlesex<br/>London<br/>EN12QN
			</div>
		</div>
		<div onClick={this.handleTertiaryAddressClickEvent} className={CurrentDeliveryUserDetailsStore.getCurrentSelectedCollectionAddress() === "TERTIARY_COLLECTION_ADDRESS" ? "rounded-box highlight" : "rounded-box"}>
			<div className="col-xs-4">
				42 Abbey Road<br/>Bush Hill Park<br/>Enfield
			</div>
			<div className="col-xs-4">
				Collection times: 9-5pm<br/>Monday-Friday
			</div>
			<div className="col-xs-4">
				Middlesex<br/>London<br/>EN12QN
			</div>
		</div>
	</div>
    );
  }
});

module.exports = CollectionLocationDetails;