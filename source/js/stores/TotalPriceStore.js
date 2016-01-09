var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');
var TreeInformationStore = require('./TreeInformationStore.js');
var CurrentDecorationsUserDetailsStore = require('./CurrentDecorationsUserDetailsStore.js');


currentTotalPrice = TreeInformationStore.getCurrentPrice();

function sumAllPrices() {
  
  currentTotalPrice = TreeInformationStore.getCurrentPrice() + CurrentDecorationsUserDetailsStore.getCurrentTotalDecorationsPrice() + 0;
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