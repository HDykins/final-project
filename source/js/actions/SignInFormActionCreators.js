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

module.exports = {
	setShowRegisterForm: setShowRegisterForm,
	setHideRegisterForm: setHideRegisterForm
};