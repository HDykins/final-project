var Dispatcher = require('../dispatcher/Dispatcher');


function changeToPaymentPage() {
	var action = {
		type: 'change-to-payment-page',
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
	setTreeType(orderDetails);
	setTreePrice();
	setDecorationStatus(orderDetails);
	setListOfSelectedDecorations(orderDetails);
	setTotalDecorationsPrice(orderDetails);
	sumAllPrices();
}







function setHeight(orderDetails) {
	var action = {
		type: 'set-height',
		height: orderDetails.height,
	};
	Dispatcher.dispatch(action);
}

// function setWidth(orderDetails) {
// 		var action = {
// 		type: 'set-width',
// 		width: orderDetails.width,
// 	};
// }

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

function sumAllPrices() {
	var action = {
		type: 'sum-all-prices',
	};
	Dispatcher.dispatch(action);
}

module.exports = {
	changeToPaymentPage: changeToPaymentPage,
	setShowCancellationForm: setShowCancellationForm,
	setHideCancellationForm: setHideCancellationForm,
	populateStoresWithSelectedOrder: populateStoresWithSelectedOrder,
	setHeight: setHeight,
	// setWidth: setWidth,
	setTreeType: setTreeType,
	setTreePrice: setTreePrice,
	setDecorationStatus: setDecorationStatus,
	setListOfSelectedDecorations: setListOfSelectedDecorations,
	setTotalDecorationsPrice: setTotalDecorationsPrice,
	sumAllPrices: sumAllPrices,

};