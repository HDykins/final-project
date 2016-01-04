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

function setShowTermsConditionsForm() {
	var action = {
		type: 'set-show-terms-conditions-form',
	};
	Dispatcher.dispatch(action);
}

function setHideTermsConditionsForm() {
	var action = {
		type: 'set-hide-terms-conditions-form',
	};
	Dispatcher.dispatch(action);
}


module.exports = {
	changeToDeliveryPage: changeToDeliveryPage,
	changeToThanksPage: changeToThanksPage,
	setShowTermsConditionsForm: setShowTermsConditionsForm,
	setHideTermsConditionsForm: setHideTermsConditionsForm
};