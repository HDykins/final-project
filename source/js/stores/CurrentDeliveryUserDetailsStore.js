var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');

var deliveryDetails = {
  postCode: ''
};

var postCode = deliveryDetails.postCode;

function setPostCode() {
  deliveryDetails.postCode = 'EN12QN'
  postCode = deliveryDetails.postCode;
  CurrentDeliveryUserDetailsStore.emit('change');
}

var CurrentDeliveryUserDetailsStore = objectAssign({}, EventEmitter.prototype, {

  getCurrentPostCode: function () {
    return postCode;
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
  }
}

CurrentDeliveryUserDetailsStore.dispatchToken = Dispatcher.register(handleAction);

module.exports = CurrentDeliveryUserDetailsStore;