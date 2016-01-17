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

function setDeliveryAddressDetails(response) {
	var action = {
		type: 'set-delivery-address-details',
		data: response,
	};
	Dispatcher.dispatch(action);
}

function updateAddressDetails(addressDetails) {
	var action = {
		type: 'update-address-details',
		addressDetails: addressDetails,
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

function setCurrentMonthSelection(month) {
	var action = {
		type: 'set-current-month-selection',
		month: month
	};
	Dispatcher.dispatch(action);
}

function setCurrentYearSelection(year) {
	var action = {
		type: 'set-current-year-selection',
		year: year
	};
	Dispatcher.dispatch(action);
}

function setCurrentTimeSelectionToMorning() {
	var action = {
		type: 'set-current-time-selection-to-morning',
	};
	Dispatcher.dispatch(action);
}

function setCurrentTimeSelectionToAfternoon() {
	var action = {
		type: 'set-current-time-selection-to-afternoon',
	};
	Dispatcher.dispatch(action);
}

function sumAllPrices() {
	var action = {
		type: 'sum-all-prices',
	};
	Dispatcher.dispatch(action);	
}

function toggleDecorationInstallationServiceSelection() {
	var action = {
		type: 'toggle-decoration-installation-service-selection',
	};
	Dispatcher.dispatch(action);
}

function setDeliveryOptionPrice() {
	var action = {
		type: 'set-delivery-option-price',
	};
	Dispatcher.dispatch(action);
}

function setDeliveryOptionPriceToZero() {
	var action = {
		type: 'set-delivery-option-price-to-zero',
	};
	Dispatcher.dispatch(action);
}

function setAdditionalInformation(information) {
	var action = {
		type: 'set-additional-information',
		information: information,
	};
	Dispatcher.dispatch(action);
}

module.exports = {
	changeToDecorationsPage: changeToDecorationsPage,
	changeToPaymentPage: changeToPaymentPage,
	toggleDeliveryChoice: toggleDeliveryChoice,
	toggleCollectionChoice: toggleCollectionChoice,
	setDeliveryAddressDetails: setDeliveryAddressDetails,
	updateAddressDetails: updateAddressDetails,
	setCurrentSelectedCollectionAddressToPrimary: setCurrentSelectedCollectionAddressToPrimary,
	setCurrentSelectedCollectionAddressToSecondary: setCurrentSelectedCollectionAddressToSecondary,
	setCurrentSelectedCollectionAddressToTertiary: setCurrentSelectedCollectionAddressToTertiary,
	setCurrentCollectionAddressCoordinatesToPrimary: setCurrentCollectionAddressCoordinatesToPrimary,
	setCurrentCollectionAddressCoordinatesToSecondary: setCurrentCollectionAddressCoordinatesToSecondary,
	setCurrentCollectionAddressCoordinatesToTertiary: setCurrentCollectionAddressCoordinatesToTertiary,
	setCurrentDaySelection: setCurrentDaySelection,
	setCurrentMonthSelection: setCurrentMonthSelection,
	setCurrentYearSelection: setCurrentYearSelection,
	setCurrentTimeSelectionToMorning: setCurrentTimeSelectionToMorning,
	setCurrentTimeSelectionToAfternoon: setCurrentTimeSelectionToAfternoon,
	sumAllPrices: sumAllPrices,
	toggleDecorationInstallationServiceSelection: toggleDecorationInstallationServiceSelection,
	setDeliveryOptionPrice: setDeliveryOptionPrice,
	setDeliveryOptionPriceToZero: setDeliveryOptionPriceToZero,
	setAdditionalInformation: setAdditionalInformation
};