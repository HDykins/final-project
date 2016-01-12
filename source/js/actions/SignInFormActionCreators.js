var Dispatcher = require('../dispatcher/Dispatcher');

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

module.exports = {
	setShowRegisterForm: setShowRegisterForm,
	setHideRegisterForm: setHideRegisterForm,
	setUserAuthenticationToken: setUserAuthenticationToken,
	setSignedInStatusToTrue: setSignedInStatusToTrue
};