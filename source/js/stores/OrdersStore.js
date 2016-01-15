var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');

var order = {
	stuff1: "abc",
	stuff2: "def",
	stuff3: "ghi"
};

var OrdersStore = objectAssign({}, EventEmitter.prototype, {

  getOrder: function () {
    return order;
  },

});

function handleAction(action) {
	if (action.type === 'set-signed-in-stajktus-to-true') {
		setSignedInStatusToTrue();
	} 
}

OrdersStore.dispatchToken = Dispatcher.register(handleAction);

module.exports = OrdersStore;