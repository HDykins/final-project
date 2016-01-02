var Dispatcher = require('../dispatcher/Dispatcher');


function changeToDeliveryPage() {
	var action = {
		type: 'change-to-delivery-page',
	};
	Dispatcher.dispatch(action);
}

function changeToThanksPage() {
	var action = {
		type: 'change-to-thanks-page',
	};
	Dispatcher.dispatch(action);
}


module.exports = {
	changeToDeliveryPage: changeToDeliveryPage,
	changeToThanksPage: changeToThanksPage
};