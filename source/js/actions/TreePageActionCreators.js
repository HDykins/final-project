var Dispatcher = require('../dispatcher/Dispatcher');


function changeToDecorationsPage() {
	var action = {
		type: 'change-to-decorations-page',
	};

	Dispatcher.dispatch(action);
}

module.exports = {
	changeToDecorationsPage: changeToDecorationsPage
};