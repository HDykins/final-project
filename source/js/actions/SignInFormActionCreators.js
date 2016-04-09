var AuthenticationService = require('../services/authentication.js');
var UserSignInDetailsStore = require('../stores/UserSignInDetailsStore.js');
var OrdersStore = require('../stores/OrdersStore.js');

var Dispatcher = require('../dispatcher/Dispatcher');

function changeToOrdersPage() {
	var action = {
		type: 'change-to-orders-page',
	};

	Dispatcher.dispatch(action);
}

function setShowRegisterForm() {
	var action = {
		type: 'set-show-register-form',
	};

	Dispatcher.dispatch(action);
}

function setHideRegisterForm() {
	var action = {
		type: 'set-hide-register-form',
	};

	Dispatcher.dispatch(action);
}

function setUserAuthenticationToken(token) {
	var action = {
		type: 'set-user-authentication-token',
		token: token,
	};

	Dispatcher.dispatch(action);
}

function setSignedInStatusToTrue() {
	var action = {
		type: 'set-signed-in-status-to-true',
	};

	Dispatcher.dispatch(action);
}

function setSignedInStatusToFalse() {
	var action = {
		type: 'set-signed-in-status-to-false',
	};

	Dispatcher.dispatch(action);
}

function setCurrentUserId(id) {
	var action = {
		type: 'set-current-user-id',
		id: id,
	};

	Dispatcher.dispatch(action);
}

function sendOrdersToStore() {


	AuthenticationService.getOrders(UserSignInDetailsStore.getCurrentUserId(), UserSignInDetailsStore.getCurrentToken(), function handleGetOrders(error, response) {

	    if (error) {
	      console.log("Didn't get orders");
	      // this.showRegisterFailMessage('Failed to register. Email may be in use');
	      return;
	    }

	    console.log("Got orders from sign-in page");
	    console.log(UserSignInDetailsStore.getCurrentUserId());
	    console.log(UserSignInDetailsStore.getCurrentToken());
	    console.log(OrdersStore.getOrdersArray());
	    // SignInFormActionCreators.setUserAuthenticationToken(response.token);
	    // SignInFormActionCreators.setSignedInStatusToTrue();
	    // this.hideRegisterFailMessage();
	    // this.showRegisterSuccessMessage('Successfully registered');
	    console.log(response);

	    var action = {
			type: 'send-orders-to-store',
			orders: response,
		};

		Dispatcher.dispatch(action);
		changeToOrdersPage();

	});

}

module.exports = {
	changeToOrdersPage: changeToOrdersPage,
	setShowRegisterForm: setShowRegisterForm,
	setHideRegisterForm: setHideRegisterForm,
	setUserAuthenticationToken: setUserAuthenticationToken,
	setSignedInStatusToTrue: setSignedInStatusToTrue,
	setSignedInStatusToFalse: setSignedInStatusToFalse,
	setCurrentUserId: setCurrentUserId,
	sendOrdersToStore: sendOrdersToStore
};