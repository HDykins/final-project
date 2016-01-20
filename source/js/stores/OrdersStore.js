var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');
var HashID = require ('../services/HashID');
var StateStore = require('../stores/StateStore.js');
var TreeInformationStore = require('../stores/TreeInformationStore.js');
var CurrentDecorationsUserDetailsStore = require('../stores/CurrentDecorationsUserDetailsStore.js');
var CurrentDeliveryUserDetailsStore = require('../stores/CurrentDeliveryUserDetailsStore.js');

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


var ordersArray = [];

function setCurrentOrderId() {
	currentOrderId = HashID.generate();
}

function setOrdersArray(orders) {
	ordersArray = orders;
	console.log(OrdersStore.getOrdersArray());
	OrdersStore.emit('change');
}

var OrdersStore = objectAssign({}, EventEmitter.prototype, {

  getOrder: function () {
    return order;
  },

  getCurrentOrderId: function() {
  	return currentOrderId;
  },

  getOrdersArray: function () {
  	return ordersArray;
  },

});

function handleAction(action) {
	if (action.type === 'set-current-order-id') {
		setCurrentOrderId();
	}  else if (action.type === 'send-orders-to-store') {
		console.log('ok')
		console.log(action.orders);
		setOrdersArray(action.orders);
	} 
}

OrdersStore.dispatchToken = Dispatcher.register(handleAction);

module.exports = OrdersStore;