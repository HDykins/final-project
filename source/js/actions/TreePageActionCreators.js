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

function changeHeightToSmall() {
	var action = {
		type: 'change-height-to-small',
	};

	Dispatcher.dispatch(action);
}

function changeHeightToMedium() {
	var action = {
		type: 'change-height-to-medium',
	};

	Dispatcher.dispatch(action);
}

function changeHeightToLarge() {
	var action = {
		type: 'change-height-to-large',
	};

	Dispatcher.dispatch(action);
}

function setHeightValue(value) {
	var action = {
		type: 'set-height-value',
		heightValue: value,
	}
	Dispatcher.dispatch(action);
}

function setCurrentTreePrice() {
	var action = {
		type: 'set-current-tree-price',
	};

	Dispatcher.dispatch(action);
}

function sumAllPrices() {
	var action = {
		type: 'sum-all-prices',
	};
	Dispatcher.dispatch(action);
}

module.exports = {
	changeToDecorationsPage: changeToDecorationsPage,
	changeToNorwegianView: changeToNorwegianView,
	changeToNordmannView: changeToNordmannView,
	changeToFraserView: changeToFraserView,
	changeToArtificialView: changeToArtificialView,
	changeHeightToSmall: changeHeightToSmall,
	changeHeightToMedium: changeHeightToMedium,
	changeHeightToLarge: changeHeightToLarge,
	setHeightValue: setHeightValue,
	setCurrentTreePrice: setCurrentTreePrice,
	sumAllPrices: sumAllPrices
};