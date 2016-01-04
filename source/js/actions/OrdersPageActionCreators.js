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

module.exports = {
	changeToPaymentPage: changeToPaymentPage,
	setShowCancellationForm: setShowCancellationForm,
	setHideCancellationForm: setHideCancellationForm
};