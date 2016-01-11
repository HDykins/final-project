var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');

var deliveryDetails = {
  postCode: ''
};

var postCode = deliveryDetails.postCode;

var collectionAddressCoordinates = {
  PRIMARY_COLLECTION_ADDRESS: {latitude: -0.0714564561271418, longitude: 51.643334192204},
  SECONDARY_COLLECTION_ADDRESS: {latitude: -0.0676001303937897, longitude: 51.6031465071854},
  TERTIARY_COLLECTION_ADDRESS: {latitude: -0.0839700532759249,longitude: 51.4999559669139}
};

var collectionAddressStates = {
  PRIMARY_COLLECTION_ADDRESS: "PRIMARY_COLLECTION_ADDRESS",
  SECONDARY_COLLECTION_ADDRESS: "SECONDARY_COLLECTION_ADDRESS",
  TERTIARY_COLLECTION_ADDRESS: "TERTIARY_COLLECTION_ADDRESS"
};

var currentCollectionAddressCoordinates = {latitute: -0.0714564561271418, longitude: 51.643334192204};
var currentSelectedCollectionAddress = "PRIMARY_COLLECTION_ADDRESS";

var currentDaySelection = null;
var currentMonthSelection = null;
var currentYearSelection = null;
var currentTimeSelection = null;

function setPostCode() {
  deliveryDetails.postCode = 'EN12QN'
  postCode = deliveryDetails.postCode;
  CurrentDeliveryUserDetailsStore.emit('change');
}

function setCurrentCollectionAddressCoordinatesToPrimary() {
  currentCollectionAddressCoordinates = collectionAddressCoordinates.PRIMARY_COLLECTION_ADDRESS;
  CurrentDeliveryUserDetailsStore.emit('change');
}

function setCurrentCollectionAddressCoordinatesToSecondary() {
  currentCollectionAddressCoordinates = collectionAddressCoordinates.SECONDARY_COLLECTION_ADDRESS;
  CurrentDeliveryUserDetailsStore.emit('change');
}

function setCurrentCollectionAddressCoordinatesToTertiary() {
  currentCollectionAddressCoordinates = collectionAddressCoordinates.TERTIARY_COLLECTION_ADDRESS;
  CurrentDeliveryUserDetailsStore.emit('change');
}

function setCurrentSelectedCollectionAddressToPrimary() {
  currentSelectedCollectionAddress = collectionAddressStates.PRIMARY_COLLECTION_ADDRESS;
  CurrentDeliveryUserDetailsStore.emit('change');
}

function setCurrentSelectedCollectionAddressToSecondary() {
  currentSelectedCollectionAddress = collectionAddressStates.SECONDARY_COLLECTION_ADDRESS;
  CurrentDeliveryUserDetailsStore.emit('change');
}

function setCurrentSelectedCollectionAddressToTertiary() {
  currentSelectedCollectionAddress = collectionAddressStates.TERTIARY_COLLECTION_ADDRESS;
  CurrentDeliveryUserDetailsStore.emit('change');
}

function setCurrentDaySelection(day) {
  currentDaySelection = day;
  CurrentDeliveryUserDetailsStore.emit('change');
}

function setCurrentMonthSelection(month) {
  currentMonthSelection = month;
  CurrentDeliveryUserDetailsStore.emit('change');
}

function setCurrentYearSelection(year) {
  currentYearSelection = year;
  CurrentDeliveryUserDetailsStore.emit('change');
}

function setCurrentTimeSelection(time) {
  currentTimeSelection = time
  CurrentDeliveryUserDetailsStore.emit('change');
}

var CurrentDeliveryUserDetailsStore = objectAssign({}, EventEmitter.prototype, {

  getCurrentPostCode: function () {
    return postCode;
  },

  getCurrentCollectionAddressCoordinates: function () {
    return currentCollectionAddressCoordinates;
  },

  getCurrentSelectedCollectionAddress: function () {
    return currentSelectedCollectionAddress;
  },

  getCurrentDaySelection: function () {
    return currentDaySelection;
  },

  getCurrentMonthSelection: function () {
    return currentMonthSelection;
  },

  getCurrentYearSelection: function () {
    return currentYearSelection;
  },

  getCurrentTimeSelection: function () {
    return currentTimeSelection;
  },

  addChangeListener: function (changeEventHandler) {
    this.on('change', changeEventHandler);
  },

  removeChangeListener: function (changeEventHandler) {
    this.removeListener('change', changeEventHandler);
  }

});

function handleAction(action) {
  if (action.type === 'set-post-code') {
    setPostCode();
  } else if (action.type === 'set-current-collection-address-coordinates-to-primary') {
    setCurrentCollectionAddressCoordinatesToPrimary();
  } else if (action.type === 'set-current-collection-address-coordinates-to-secondary') {
    setCurrentCollectionAddressCoordinatesToSecondary();
  } else if (action.type === 'set-current-collection-address-coordinates-to-tertiary') {
    setCurrentCollectionAddressCoordinatesToTertiary();
  } else if (action.type === 'set-current-selected-collection-address-to-primary') {
    setCurrentSelectedCollectionAddressToPrimary();
  } else if (action.type === 'set-current-selected-collection-address-to-secondary') {
    setCurrentSelectedCollectionAddressToSecondary();
  } else if (action.type === 'set-current-selected-collection-address-to-tertiary') {
    setCurrentSelectedCollectionAddressToTertiary();
  } else if (action.type === 'set-current-day-selection') {
    setCurrentDaySelection(action.day);
  } else if (action.type === 'set-current-month-selection') {
    setCurrentMonthSelection(action.month);
  } else if (action.type === 'set-current-year-selection') {
    setCurrentYearSelection();
  } else if (action.type === 'set-current-time-selection') {
    setCurrentTimeSelection();
  }
}

CurrentDeliveryUserDetailsStore.dispatchToken = Dispatcher.register(handleAction);

module.exports = CurrentDeliveryUserDetailsStore;