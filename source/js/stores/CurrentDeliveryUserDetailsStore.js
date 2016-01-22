var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');
var moment = require('moment');
var StateStore = require('./StateStore.js');
var GoogleMapsLoader = require('google-maps');

GoogleMapsLoader.KEY = 'AIzaSyB8WWc9dvvtCbgLGkEWj3Ma1I01OsWYJaw';

var todaysDate = moment().format('DD:MM:YY');

var deliveryAddressDetails = {
  addressLine1: '',
  addressLine2: '',
  townCity: '',
  county: '',
  postcode: ''
};

var deliveryOptionPrice = 0;
var currentTotalDeliveryPrice = 0;

var isDecorationInstallationSeviceSelected = false;

var collectionAddressCoordinates = {
  PRIMARY_COLLECTION_ADDRESS: {lat: 51.643334192204, lng: -0.07145645612717999},
  SECONDARY_COLLECTION_ADDRESS: {lat: 51.6031465071854, lng: -0.0676001303937897},
  TERTIARY_COLLECTION_ADDRESS: {lat: 51.4999559669139, lng: -0.0839700532759249}
};

var arrayOfMarkers = [];

var collectionAddressStates = {
  PRIMARY_COLLECTION_ADDRESS: "PRIMARY_COLLECTION_ADDRESS",
  SECONDARY_COLLECTION_ADDRESS: "SECONDARY_COLLECTION_ADDRESS",
  TERTIARY_COLLECTION_ADDRESS: "TERTIARY_COLLECTION_ADDRESS"
};

var currentCollectionAddressCoordinates = {lat: 51.643334192204, lng: -0.07145645612717999};
var currentSelectedCollectionAddress = "PRIMARY_COLLECTION_ADDRESS";

var currentDaySelection = "Day";
var currentMonthSelection = "Month";
var currentYearSelection = "Year";
var currentTimeSelection = "Time";

var additionalInformation = null;

function setMarkerArray(array) {
  arrayOfMarkers = array;
  console.log(arrayOfMarkers);
}

function animateMarkersOnLocationChange() {
  GoogleMapsLoader.load(function(google) {
    arrayOfMarkers.map(function (marker) {
      marker.setAnimation(null);
      // console.log(CurrentDeliveryUserDetailsStore.getCurrentCollectionAddressCoordinates().lat);
      // console.log({lat: location.getPosition().lat(), lng: location.getPosition().lng() });
      if (currentCollectionAddressCoordinates.lat === marker.getPosition().lat()) {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    });
  });
  CurrentDeliveryUserDetailsStore.emit('change');
}

function setDeliveryAddressDetails(data) {
  deliveryAddressDetails.addressLine1 = '';
  deliveryAddressDetails.addressLine2 = data.result.admin_ward;
  deliveryAddressDetails.townCity = data.result.admin_district;
  deliveryAddressDetails.county = data.result.region;
  deliveryAddressDetails.postcode = data.result.postcode;
  CurrentDeliveryUserDetailsStore.emit('change');
}

function updateAddressDetails(details) {
  deliveryAddressDetails.addressLine1 = [details[0]];
  deliveryAddressDetails.addressLine2 = [details[1]];
  deliveryAddressDetails.townCity = [details[2]];
  deliveryAddressDetails.county = [details[3]];
  deliveryAddressDetails.postcode = [details[4]];
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

function setCurrentTimeSelectionToMorning() {
  currentTimeSelection = "Morning (8-12:30)"
  CurrentDeliveryUserDetailsStore.emit('change');
}

function setCurrentTimeSelectionToAfternoon() {
  currentTimeSelection = "Afternoon (12:30-5)"
  CurrentDeliveryUserDetailsStore.emit('change');
}

function toggleDecorationInstallationServiceSelection() {
  if (isDecorationInstallationSeviceSelected) {
    isDecorationInstallationSeviceSelected = false;
    currentTotalDeliveryPrice = currentTotalDeliveryPrice - 15;
  } else {
    isDecorationInstallationSeviceSelected = true;
    currentTotalDeliveryPrice = currentTotalDeliveryPrice + 15;    
  }
  CurrentDeliveryUserDetailsStore.emit('change');
}

function calculateDeliveryOptionPrice() {

  console.log(typeof currentDaySelection !== "string");
  console.log(typeof currentMonthSelection !== "string");
  console.log(currentYearSelection);

  if((typeof currentDaySelection !== "string") && (typeof currentMonthSelection !== "string") && (typeof currentYearSelection !== "string")) {
    console.log("calculate");

    var daysUntilOrderDate = moment().set('year', currentYearSelection).set('month', (currentMonthSelection-1)).set('date', currentDaySelection).diff(moment(), 'days')

    if (daysUntilOrderDate === 1) {
      deliveryOptionPrice = 15;
    }
    else if (0 < daysUntilOrderDate && daysUntilOrderDate < 6 ) {
      deliveryOptionPrice = 6;
    }
    else if (daysUntilOrderDate < 0 ) {
      currentDaySelection = "Day";
      currentMonthSelection = "Month";
    }
    else if (6 <= daysUntilOrderDate) {
      deliveryOptionPrice = 3;
    }
  }
}

function setDeliveryOptionPrice() {
  if ((typeof currentDaySelection !== "string") && (typeof currentMonthSelection !== "string") && (typeof currentYearSelection !== "string")) {
   calculateDeliveryOptionPrice();
      currentTotalDeliveryPrice = 0;
    if (StateStore.getDeliveryChoice()) {
      currentTotalDeliveryPrice = currentTotalDeliveryPrice + deliveryOptionPrice;
      if (isDecorationInstallationSeviceSelected) {
        currentTotalDeliveryPrice = currentTotalDeliveryPrice + 15;
      }
    }
  }
  CurrentDeliveryUserDetailsStore.emit('change');
}

function setDeliveryOptionPriceToZero() {
  currentTotalDeliveryPrice = 0;
}

function setAdditionalInformation(information) {
  additionalInformation = information;
}

function setDeliveryAddress(deliveryAddress) {
  deliveryAddressDetails = deliveryAddress;
}

function setCollectionAddressDetails(collectionAddress) {
  if (collectionAddress === 'PRIMARY_COLLECTION_ADDRESS') {
    setCurrentSelectedCollectionAddressToPrimary();
    setCurrentCollectionAddressCoordinatesToPrimary();
  } else if (collectionAddress === 'SECONDARY_COLLECTION_ADDRESS') {
    setCurrentSelectedCollectionAddressToSecondary();
    setCurrentCollectionAddressCoordinatesToSecondary();
  } else if (collectionAddress === 'TERTIARY_COLLECTION_ADDRESS') {
    setCurrentSelectedCollectionAddressToTertiary();
    setCurrentCollectionAddressCoordinatesToTertiary()
  } 
}

function setDecorationInstallationStatus(decorationInstallation) {
  isDecorationInstallationSeviceSelected = decorationInstallation;
}

var CurrentDeliveryUserDetailsStore = objectAssign({}, EventEmitter.prototype, {

  getTodaysDate: function () {
    return todaysDate;
  },

  getDeliveryAddressDetails: function () {
    return deliveryAddressDetails;
  },

  getCurrentTotalDeliveryPrice: function () {
    return currentTotalDeliveryPrice;
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

  getDecorationInstallationSelectionStatus: function () {
    return isDecorationInstallationSeviceSelected;
  },

  getDeliveryOptionPrice: function () {
    return deliveryOptionPrice;
  },

  getAdditionalInformation: function () {
    return additionalInformation;
  },

  addChangeListener: function (changeEventHandler) {
    this.on('change', changeEventHandler);
  },

  removeChangeListener: function (changeEventHandler) {
    this.removeListener('change', changeEventHandler);
  }

});

function handleAction(action) {
  if (action.type === 'set-delivery-address-details') {
    setDeliveryAddressDetails(action.data);
  } else if (action.type === 'update-address-details') {
    updateAddressDetails(action.addressDetails);
  } else if (action.type === 'set-marker-array') {
    setMarkerArray(action.array);
  } else if (action.type === 'animate-markers-on-location-change') {
    animateMarkersOnLocationChange();
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
    setCurrentYearSelection(action.year);
  } else if (action.type === 'set-current-time-selection-to-morning') {
    setCurrentTimeSelectionToMorning();
  } else if (action.type === 'set-current-time-selection-to-afternoon') {
    setCurrentTimeSelectionToAfternoon();
  } else if (action.type === 'toggle-decoration-installation-service-selection') {
    toggleDecorationInstallationServiceSelection();
  } else if (action.type === 'set-delivery-option-price') {
    setDeliveryOptionPrice();
  } else if (action.type === 'set-delivery-option-price-to-zero') {
    setDeliveryOptionPriceToZero();
  } else if (action.type === 'set-additional-information') {
    setAdditionalInformation(action.information);
  } else if (action.type === 'set-delivery-address') {
    setDeliveryAddress(action.deliveryAddress);
  } else if (action.type === 'set-collection-address-details') {
    setCollectionAddressDetails(action.collectionAddress);
  } else if (action.type === 'set-decoration-installation-status') {
    setDecorationInstallationStatus(action.decorationInstallation);
  } else if (action.type === 'set-old-additional-information') {
    setAdditionalInformation(action.additionalInformation);
  }
}

CurrentDeliveryUserDetailsStore.dispatchToken = Dispatcher.register(handleAction);

module.exports = CurrentDeliveryUserDetailsStore;