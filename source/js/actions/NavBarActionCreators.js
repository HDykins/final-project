var Dispatcher = require('../dispatcher/Dispatcher');


function changeToLandingPage() {
	var action = {
		type: 'change-to-landing-page',
	};

	Dispatcher.dispatch(action);
}

function changeToOrdersPage() {
	var action = {
		type: 'change-to-orders-page',
	};

	Dispatcher.dispatch(action);
}

function changeToSignInPage() {
	var action = {
		type: 'change-to-sign-in-page',
	};

	Dispatcher.dispatch(action);
}

module.exports = {
	changeToLandingPage: changeToLandingPage,
	changeToOrdersPage: changeToOrdersPage,
	changeToSignInPage: changeToSignInPage
};