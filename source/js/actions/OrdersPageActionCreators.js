var Dispatcher = require('../dispatcher/Dispatcher');


function changeToPaymentPage() {
	var action = {
		type: 'change-to-payment-page',
	};

	Dispatcher.dispatch(action);
}

module.exports = {
	changeToPaymentPage: changeToPaymentPage
};