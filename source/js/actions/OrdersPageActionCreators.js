var Dispatcher = require('../dispatcher/Dispatcher');


function changeToPaymentPage() {
	var action = {
		type: 'change-to-payment-page',
	};

	Dispatcher.dispatch(action);
}

function changeToTreePage() {
	var action = {
		type: 'change-to-tree-page',
	};

	Dispatcher.dispatch(action);
}

function setShowCancellationForm() {
	var action = {
		type: 'set-show-cancellation-form',
	};

	Dispatcher.dispatch(action);
}

function setHideCancellationForm() {
	var action = {
		type: 'set-hide-cancellation-form',
	};

	Dispatcher.dispatch(action);
}

function populateStoresWithSelectedOrder(orderDetails) {
	console.log("stores populating.....");
	console.log(orderDetails);
	setHeight(orderDetails);
	setHeightValue(orderDetails)
	setTreeType(orderDetails);
	setTreePrice();
	setDecorationStatus(orderDetails);
	setListOfSelectedDecorations(orderDetails);
	setTotalDecorationsPrice(orderDetails);
	setDeliveryStatus(orderDetails);
	setCollectionStatus(orderDetails);
	setCollectionAddressDetails(orderDetails);
	setDaySelection(orderDetails);
	setMonthSelection(orderDetails);
	setYearSelection(orderDetails);
	setDeliveryTimeSelection(orderDetails);
	setDeliveryAddress(orderDetails);
	setDecorationInstallationStatus(orderDetails);
	setDeliveryOptionPrice();
	setOldAdditionalInformation(orderDetails);
	sumAllPrices();
}







function setHeight(orderDetails) {
	var action = {
		type: 'set-height',
		height: orderDetails.height,
	};
	Dispatcher.dispatch(action);
}

function setHeightValue(orderDetails) {
	var action = {
		type: 'set-height-value',
		heightValue: orderDetails.heightValue,
	}
	Dispatcher.dispatch(action);
}

function setTreeType(orderDetails) {
	var action = {
		type: 'set-tree-type',
		treeType: orderDetails.tree,
	};
	Dispatcher.dispatch(action);
}

function setTreePrice() {
	var action = {
		type: 'set-current-tree-price',
	};
	Dispatcher.dispatch(action);
}

function setDecorationStatus(orderDetails) {
	var action = {
		type: 'set-decoration-status',
		decorationSelection: orderDetails.decorationSelection,
	};
	Dispatcher.dispatch(action);
}

function setListOfSelectedDecorations(orderDetails) {
	var action = {
		type: 'set-list-of-selected-decorations',
		listOfSelectedDecorations: orderDetails.listOfSelectedDecorations,
	};
	Dispatcher.dispatch(action);
}

function setTotalDecorationsPrice(orderDetails) {
	var action = {
		type: 'set-total-decorations-price',
		totalDecorationsPrice: orderDetails.totalDecorationsPrice,
	};
	Dispatcher.dispatch(action);
}

function setDeliveryStatus(orderDetails) {
	var action = {
		type: 'set-delivery-status',
		deliveryStatus: orderDetails.delivery,
	};
	Dispatcher.dispatch(action);
}

function setCollectionStatus(orderDetails) {
	var action = {
		type: 'set-collection-status',
		collectionStatus: orderDetails.collection,
	};
	Dispatcher.dispatch(action);
}

function setCollectionAddressDetails(orderDetails) {
	var action = {
		type: 'set-collection-address-details',
		collectionAddress: orderDetails.collectionAddress,
	};
	Dispatcher.dispatch(action);
}

function setDaySelection(orderDetails) {
	var action = {
		type: 'set-current-day-selection',
		day: orderDetails.deliveryDay
	};
	Dispatcher.dispatch(action);
}

function setMonthSelection(orderDetails) {
	var action = {
		type: 'set-current-month-selection',
		month: orderDetails.deliveryMonth
	};
	Dispatcher.dispatch(action);
}

function setYearSelection(orderDetails) {
	var action = {
		type: 'set-current-year-selection',
		year: orderDetails.deliveryYear
	};
	Dispatcher.dispatch(action);
}

function setDeliveryTimeSelection(orderDetails) {
	if (orderDetails.deliveryTime === 'Morning (8-12:30)') {
		var action = {
			type: 'set-current-time-selection-to-morning',
		};
	} else {
		var action = {
			type: 'set-current-time-selection-to-afternoon',
		};
	}
	Dispatcher.dispatch(action);
}

function setDeliveryAddress(orderDetails) {
	var action = {
		type: 'set-delivery-address',
		deliveryAddress: orderDetails.deliveryAddress
	};
	Dispatcher.dispatch(action);
}

function setDecorationInstallationStatus(orderDetails) {
	var action = {
		type: 'set-decoration-installation-status',
		decorationInstallation: orderDetails.decorationInstallation
	};
	Dispatcher.dispatch(action);	
}

function setDeliveryOptionPrice() {
	var action = {
		type: 'set-delivery-option-price',
	};
	Dispatcher.dispatch(action);
}

function setOldAdditionalInformation(orderDetails) {
	var action = {
		type: 'set-old-additional-information',
		additionalInformation: orderDetails.additionalInformation,
	};
	Dispatcher.dispatch(action);
}

function sumAllPrices() {
	var action = {
		type: 'sum-all-prices',
	};
	Dispatcher.dispatch(action);
}

module.exports = {
	changeToPaymentPage: changeToPaymentPage,
	changeToTreePage: changeToTreePage,
	setShowCancellationForm: setShowCancellationForm,
	setHideCancellationForm: setHideCancellationForm,
	populateStoresWithSelectedOrder: populateStoresWithSelectedOrder,
	setHeight: setHeight,
	setHeightValue: setHeightValue,
	setTreeType: setTreeType,
	setTreePrice: setTreePrice,
	setDecorationStatus: setDecorationStatus,
	setListOfSelectedDecorations: setListOfSelectedDecorations,
	setTotalDecorationsPrice: setTotalDecorationsPrice,
	setDeliveryStatus: setDeliveryStatus,
	setCollectionStatus: setCollectionStatus,
	setCollectionAddressDetails: setCollectionAddressDetails,
	setDaySelection: setDaySelection,
	setMonthSelection: setMonthSelection,
	setYearSelection: setYearSelection,
	setDeliveryTimeSelection: setDeliveryTimeSelection,
	setDeliveryAddress: setDeliveryAddress,
	setDecorationInstallationStatus: setDecorationInstallationStatus,
	setDeliveryOptionPrice: setDeliveryOptionPrice,
	setOldAdditionalInformation: setOldAdditionalInformation,	
	sumAllPrices: sumAllPrices,

};