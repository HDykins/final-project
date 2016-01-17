var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');
var HashID = require ('../services/HashID');

var order = {
	height: "abc",
	width: "def",
	tree: TreeInformationStore.getCurrentTreeView(),
	decorationSelection: CurrentDecorationsUserDetailsStore.getDecorationStatus(),
	listOfSelectedDecorations: CurrentDecorationsUserDetailsStore.getListOfSelectedDecorations(),
	delivery: StateStore.getDeliveryChoice(),
	collection: StateStore.getCollectionChoice(),
	collectionAddress: CurrentDeliveryUserDetailsStore.getCurrentSelectedCollectionAddress(),
	collectionCoordinates: CurrentDeliveryUserDetailsStore.getCurrentCollectionAddressCoordinates(),
	deliveryDay: CurrentDeliveryUserDetailsStore.getCurrentDaySelection(),
	deliveryMonth: CurrentDeliveryUserDetailsStore.getCurrentMonthSelection(),
	deliveryYear: CurrentDeliveryUserDetailsStore.getCurrentYearSelection(),
	deliveryTime: CurrentDeliveryUserDetailsStore.getCurrentTimeSelection(),
	deliveryAddress: CurrentDeliveryUserDetailsStore.getDeliveryAddressDetails(),
	decorationInstallation: CurrentDeliveryUserDetailsStore.getDecorationInstallationSelectionStatus(),
	additionalInformation: CurrentDeliveryUserDetailsStore.getAdditionalInformation()
};

var currentOrderId = null;

function setCurrentOrderId() {
	currentOrderId = HashID.generate();
}

var OrdersStore = objectAssign({}, EventEmitter.prototype, {

  getOrder: function () {
    return order;
  },

  getCurrentOrderId: function() {
  	return currentOrderId;
  },

});

function handleAction(action) {
	if (action.type === 'set-signed-in-stajktus-to-true') {
		setSignedInStatusToTrue();
	} else if (action.type === 'set-current-order-id') {
		setCurrentOrderId();
	} 
}

OrdersStore.dispatchToken = Dispatcher.register(handleAction);

module.exports = OrdersStore;