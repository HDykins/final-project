var React = require('react');
var CurrentDeliveryUserDetailsStore = require('../../stores/CurrentDeliveryUserDetailsStore.js');
var DeliveryPageActionCreators = require('../../actions/DeliveryPageActionCreators.js');

var CollectionLocationDetails = React.createClass({

  handlePrimaryAddressClickEvent: function () {
  	DeliveryPageActionCreators.setCurrentSelectedCollectionAddressToPrimary();
  	DeliveryPageActionCreators.setCurrentCollectionAddressCoordinatesToPrimary();
  	DeliveryPageActionCreators.animateMarkersOnLocationChange();
  },

  handleSecondaryAddressClickEvent: function () {
  	DeliveryPageActionCreators.setCurrentSelectedCollectionAddressToSecondary();
  	DeliveryPageActionCreators.setCurrentCollectionAddressCoordinatesToSecondary();
  	DeliveryPageActionCreators.animateMarkersOnLocationChange();
  },

  handleTertiaryAddressClickEvent: function () {
  	DeliveryPageActionCreators.setCurrentSelectedCollectionAddressToTertiary();
  	DeliveryPageActionCreators.setCurrentCollectionAddressCoordinatesToTertiary();
  	DeliveryPageActionCreators.animateMarkersOnLocationChange();
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
				748 High Rd<br/>Tottenham
			</div>
			<div className="col-xs-4">
				Collection times: 9-5pm<br/>Monday-Friday
			</div>
			<div className="col-xs-4">
				London<br/>N170AP
			</div>
		</div>
		<div onClick={this.handleTertiaryAddressClickEvent} className={CurrentDeliveryUserDetailsStore.getCurrentSelectedCollectionAddress() === "TERTIARY_COLLECTION_ADDRESS" ? "rounded-box highlight" : "rounded-box"}>
			<div className="col-xs-4">
				The Leather Market<br/>Weston St
			</div>
			<div className="col-xs-4">
				Collection times: 9-5pm<br/>Monday-Friday
			</div>
			<div className="col-xs-4">
				London<br/>SE13ER
			</div>
		</div>
	</div>
    );
  }
});

module.exports = CollectionLocationDetails;