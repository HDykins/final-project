var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');
var StateStore = require('../stores/StateStore.js');
var TreeInformationStore = require('./TreeInformationStore.js');
var CurrentDecorationsUserDetailsStore = require('./CurrentDecorationsUserDetailsStore.js');
var CurrentDeliveryUserDetailsStore = require('./CurrentDeliveryUserDetailsStore.js');


var currentTotalPrice = TreeInformationStore.getCurrentPrice();

function sumAllPrices() {
  
  if(StateStore.getCollectionChoice()) {
    currentTotalPrice = (0.9*(TreeInformationStore.getCurrentPrice() + CurrentDecorationsUserDetailsStore.getCurrentTotalDecorationsPrice() + CurrentDeliveryUserDetailsStore.getCurrentTotalDeliveryPrice())).toFixed(2);
  } else {
    currentTotalPrice = (TreeInformationStore.getCurrentPrice() + CurrentDecorationsUserDetailsStore.getCurrentTotalDecorationsPrice() + CurrentDeliveryUserDetailsStore.getCurrentTotalDeliveryPrice()).toFixed(2);
  }
  // console.log(CurrentDecorationsUserDetailsStore.getCurrentTotalDecorationsPrice());
  // console.log(TreeInformationStore.getCurrentPrice());
  // console.log(currentTotalPrice);

  TotalPriceStore.emit('change');
}

var TotalPriceStore = objectAssign({}, EventEmitter.prototype, {
  
  getCurrentOverallPrice: function () {
    return currentTotalPrice;
  }

});

function handleAction(action) {
  if (action.type === 'sum-all-prices') {
    sumAllPrices();  
  }
}

TotalPriceStore.dispatchToken = Dispatcher.register(handleAction);

module.exports = TotalPriceStore;