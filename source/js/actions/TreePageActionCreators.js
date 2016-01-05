var Dispatcher = require('../dispatcher/Dispatcher');


function changeToDecorationsPage() {
	var action = {
		type: 'change-to-decorations-page',
	};

	Dispatcher.dispatch(action);
}

function changeToNorwegianView() {
	var action = {
		type: 'change-to-norwegian-view',
	};

	Dispatcher.dispatch(action);
}

function changeToNordmannView() {
	var action = {
		type: 'change-to-nordmann-view',
	};

	Dispatcher.dispatch(action);
}

function changeToFraserView() {
	var action = {
		type: 'change-to-fraser-view',
	};

	Dispatcher.dispatch(action);
}

function changeToArtificialView() {
	var action = {
		type: 'change-to-artificial-view',
	};

	Dispatcher.dispatch(action);
}

module.exports = {
	changeToDecorationsPage: changeToDecorationsPage,
	changeToNorwegianView: changeToNorwegianView,
	changeToNordmannView: changeToNordmannView,
	changeToFraserView: changeToFraserView,
	changeToArtificialView: changeToArtificialView

};