var Dispatcher = require('../dispatcher/Dispatcher');


function changeToDecorationsPage() {
	var action = {
		type: 'change-to-decorations-page',
	};
	Dispatcher.dispatch(action);
}

function changeToPaymentPage() {
	var action = {
		type: 'change-to-payment-page',
	};
	Dispatcher.dispatch(action);
}

function toggleDeliveryChoice() {
	var action = {
		type: 'toggle-delivery-choice',
	};
	Dispatcher.dispatch(action);
}

function toggleCollectionChoice() {
	var action = {
		type: 'toggle-collection-choice',
	};
	Dispatcher.dispatch(action);
}

function setPostCode() {
	var action = {
		type: 'set-post-code',
	};
	Dispatcher.dispatch(action);
}

module.exports = {
	changeToDecorationsPage: changeToDecorationsPage,
	changeToPaymentPage: changeToPaymentPage,
	toggleDeliveryChoice: toggleDeliveryChoice,
	toggleCollectionChoice: toggleCollectionChoice,
	setPostCode: setPostCode
};