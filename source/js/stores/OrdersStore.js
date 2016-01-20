var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');
var HashID = require ('../services/HashID');
var StateStore = require('../stores/StateStore.js');
var TreeInformationStore = require('../stores/TreeInformationStore.js');
var CurrentDecorationsUserDetailsStore = require('../stores/CurrentDecorationsUserDetailsStore.js');
var CurrentDeliveryUserDetailsStore = require('../stores/CurrentDeliveryUserDetailsStore.js');
var TotalPriceStore = require('../stores/TotalPriceStore.js');

var order = {
	height: "abc",
	width: "def",
	tree: TreeInformationStore.getCurrentTreeView(),
	treePrice: TreeInformationStore.getCurrentPrice(),
	decorationSelection: CurrentDecorationsUserDetailsStore.getDecorationStatus(),
	listOfSelectedDecorations: CurrentDecorationsUserDetailsStore.getListOfSelectedDecorations(),
	totalDecorationPrice: CurrentDecorationsUserDetailsStore.getCurrentTotalDecorationsPrice(),
	delivery: StateStore.getDeliveryChoice(),
	collection: StateStore.getCollectionChoice(),
	collectionAddress: CurrentDeliveryUserDetailsStore.getCurrentSelectedCollectionAddress(),
	collectionCoordinates: CurrentDeliveryUserDetailsStore.getCurrentCollectionAddressCoordinates(),
	deliveryDay: CurrentDeliveryUserDetailsStore.getCurrentDaySelection(),
	deliveryMonth: CurrentDeliveryUserDetailsStore.getCurrentMonthSelection(),
	deliveryYear: CurrentDeliveryUserDetailsStore.getCurrentYearSelection(),
	deliveryTime: CurrentDeliveryUserDetailsStore.getCurrentTimeSelection(),
	deliveryAddress: CurrentDeliveryUserDetailsStore.getDeliveryAddressDetails(),
	deliveryOptionPrice: CurrentDeliveryUserDetailsStore.getDeliveryOptionPrice(),
	decorationInstallation: CurrentDeliveryUserDetailsStore.getDecorationInstallationSelectionStatus(),
	totalDeliveryPrice: CurrentDeliveryUserDetailsStore.getCurrentTotalDeliveryPrice(),
	additionalInformation: CurrentDeliveryUserDetailsStore.getAdditionalInformation(),
	totalPrice: TotalPriceStore.getCurrentOverallPrice()
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

function setOrder() {
	order = {
		height: "abc",
		width: "def",
		tree: TreeInformationStore.getCurrentTreeView(),
		treePrice: TreeInformationStore.getCurrentPrice(),
		decorationSelection: CurrentDecorationsUserDetailsStore.getDecorationStatus(),
		listOfSelectedDecorations: CurrentDecorationsUserDetailsStore.getListOfSelectedDecorations(),
		totalDecorationPrice: CurrentDecorationsUserDetailsStore.getCurrentTotalDecorationsPrice(),
		delivery: StateStore.getDeliveryChoice(),
		collection: StateStore.getCollectionChoice(),
		collectionAddress: CurrentDeliveryUserDetailsStore.getCurrentSelectedCollectionAddress(),
		collectionCoordinates: CurrentDeliveryUserDetailsStore.getCurrentCollectionAddressCoordinates(),
		deliveryDay: CurrentDeliveryUserDetailsStore.getCurrentDaySelection(),
		deliveryMonth: CurrentDeliveryUserDetailsStore.getCurrentMonthSelection(),
		deliveryYear: CurrentDeliveryUserDetailsStore.getCurrentYearSelection(),
		deliveryTime: CurrentDeliveryUserDetailsStore.getCurrentTimeSelection(),
		deliveryAddress: CurrentDeliveryUserDetailsStore.getDeliveryAddressDetails(),
		deliveryOptionPrice: CurrentDeliveryUserDetailsStore.getDeliveryOptionPrice(),
		decorationInstallation: CurrentDeliveryUserDetailsStore.getDecorationInstallationSelectionStatus(),
		totalDeliveryPrice: CurrentDeliveryUserDetailsStore.getCurrentTotalDeliveryPrice(),
		additionalInformation: CurrentDeliveryUserDetailsStore.getAdditionalInformation(),
		totalPrice: TotalPriceStore.getCurrentOverallPrice()
	};
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
	} else if (action.type === 'send-orders-to-store') {
		setOrdersArray(action.orders);
	} else if (action.type === 'set-order') {
		setOrder();
	}
}

OrdersStore.dispatchToken = Dispatcher.register(handleAction);

module.exports = OrdersStore;