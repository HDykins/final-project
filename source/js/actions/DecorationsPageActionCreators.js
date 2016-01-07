var Dispatcher = require('../dispatcher/Dispatcher');


function changeToTreePage() {
	var action = {
		type: 'change-to-tree-page',
	};
	Dispatcher.dispatch(action);
}

function changeToDeliveryPage() {
	var action = {
		type: 'change-to-delivery-page',
	};
	Dispatcher.dispatch(action);
}

function toggleDecorationSelection(decorationName) {
	var action = {
		type: 'toggle-decoration-selection',
		decorationName: decorationName
	};
	Dispatcher.dispatch(action);	
}

function setHoveredDecoration(decorationName) {
	var action = {
		type: 'set-hovered-decoration',
		decorationName: decorationName
	};
	Dispatcher.dispatch(action);	
}

function setHoveredDecorationToNull(decorationName) {
	var action = {
		type: 'set-hovered-decoration-to-null',
		decorationName: decorationName
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
	changeToTreePage: changeToTreePage,
	changeToDeliveryPage: changeToDeliveryPage,
	toggleDecorationSelection: toggleDecorationSelection,
	setHoveredDecoration: setHoveredDecoration,
	setHoveredDecorationToNull: setHoveredDecorationToNull,
	sumAllPrices: sumAllPrices
};