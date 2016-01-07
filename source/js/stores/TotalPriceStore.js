var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');
var CurrentDecorationsUserDetailsStore = require('./CurrentDecorationsUserDetailsStore.js');

currentTotalPrice = 0;

function sumAllPrices() {
  
  currentTotalPrice = 0 + CurrentDecorationsUserDetailsStore.getCurrentTotalDecorationsPrice() + 0;
  console.log(currentTotalPrice);

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