var Dispatcher = require('../dispatcher/Dispatcher');


function changeToDecorationsPage() {
	var action = {
		type: 'change-to-decorations-page',
	};
	Dispatcher.dispatch(action);
}

function changeToPaymentPage() {
	var action = {
		type: 'change-to-payment-page',
	};
	Dispatcher.dispatch(action);
}

function toggleDeliveryChoice() {
	var action = {
		type: 'toggle-delivery-choice',
	};
	Dispatcher.dispatch(action);
}

function toggleCollectionChoice() {
	var action = {
		type: 'toggle-collection-choice',
	};
	Dispatcher.dispatch(action);
}

function setPostCode() {
	var action = {
		type: 'set-post-code',
	};
	Dispatcher.dispatch(action);
}

function setCurrentSelectedCollectionAddressToPrimary() {
	var action = {
		type: 'set-current-selected-collection-address-to-primary',
	};
	Dispatcher.dispatch(action);
}

function setCurrentSelectedCollectionAddressToSecondary() {
	var action = {
		type: 'set-current-selected-collection-address-to-secondary',
	};
	Dispatcher.dispatch(action);
}

function setCurrentSelectedCollectionAddressToTertiary() {
	var action = {
		type: 'set-current-selected-collection-address-to-tertiary',
	};
	Dispatcher.dispatch(action);
}

function setCurrentCollectionAddressCoordinatesToPrimary() {
	var action = {
		type: 'set-current-collection-address-coordinates-to-primary',
	};
	Dispatcher.dispatch(action);
}

function setCurrentCollectionAddressCoordinatesToSecondary() {
	var action = {
		type: 'set-current-collection-address-coordinates-to-secondary',
	};
	Dispatcher.dispatch(action);
}

function setCurrentCollectionAddressCoordinatesToTertiary() {
	var action = {
		type: 'set-current-collection-address-coordinates-to-tertiary',
	};
	Dispatcher.dispatch(action);
}

function setCurrentDaySelection(day) {
	var action = {
		type: 'set-current-day-selection',
		day: day
	};
	Dispatcher.dispatch(action);
}

function setCurrentMonthSelection() {
	var action = {
		type: 'set-current-month-selection',
	};
	Dispatcher.dispatch(action);
}

function setCurrentYearSelection() {
	var action = {
		type: 'set-current-year-selection',
	};
	Dispatcher.dispatch(action);
}

function setCurrentTimeSelection() {
	var action = {
		type: 'set-current-time-selection',
	};
	Dispatcher.dispatch(action);
}

module.exports = {
	changeToDecorationsPage: changeToDecorationsPage,
	changeToPaymentPage: changeToPaymentPage,
	toggleDeliveryChoice: toggleDeliveryChoice,
	toggleCollectionChoice: toggleCollectionChoice,
	setPostCode: setPostCode,
	setCurrentSelectedCollectionAddressToPrimary: setCurrentSelectedCollectionAddressToPrimary,
	setCurrentSelectedCollectionAddressToSecondary: setCurrentSelectedCollectionAddressToSecondary,
	setCurrentSelectedCollectionAddressToTertiary: setCurrentSelectedCollectionAddressToTertiary,
	setCurrentCollectionAddressCoordinatesToPrimary: setCurrentCollectionAddressCoordinatesToPrimary,
	setCurrentCollectionAddressCoordinatesToSecondary: setCurrentCollectionAddressCoordinatesToSecondary,
	setCurrentCollectionAddressCoordinatesToTertiary: setCurrentCollectionAddressCoordinatesToTertiary,
	setCurrentDaySelection: setCurrentDaySelection,
	setCurrentMonthSelection: setCurrentMonthSelection,
	setCurrentYearSelection: setCurrentYearSelection,
	setCurrentTimeSelection: setCurrentTimeSelection
};