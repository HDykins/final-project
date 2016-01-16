var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');
var HashID = require ('../services/HashID');

var order = {
	stuff1: "abc",
	stuff2: "def",
	stuff3: "ghi"
};

var currentOrderId = null;

function setCurrentOrderId() {
	currentOrderId = HashID.generate();
}

var OrdersStore = objectAssign({}, EventEmitter.prototype, {

  getOrder: function () {
    return order;
  },

  getCurrentOrderId: function() {
  	return currentOrderId;
  },

});

function handleAction(action) {
	if (action.type === 'set-signed-in-stajktus-to-true') {
		setSignedInStatusToTrue();
	} else if (action.type === 'set-current-order-id') {
		setCurrentOrderId();
	} 
}

OrdersStore.dispatchToken = Dispatcher.register(handleAction);

module.exports = OrdersStore;