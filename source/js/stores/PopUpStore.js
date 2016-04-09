var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');

var cancellationFormIsVisible = false;
var termsConditionsFormIsVisible = false;
var registerFormIsVisible = false;

function setShowCancellationForm() {
    cancellationFormIsVisible = true;
    PopUpStore.emit('change');
}

function setHideCancellationForm() {
    cancellationFormIsVisible = false;
    PopUpStore.emit('change');
}

function setShowTermsConditionsForm() {
    termsConditionsFormIsVisible = true;
    PopUpStore.emit('change');
}

function setHideTermsConditionsForm() {
    termsConditionsFormIsVisible = false;
    PopUpStore.emit('change');
}

function setShowRegisterForm() {
    registerFormIsVisible = true;
    PopUpStore.emit('change');
}

function setHideRegisterForm() {
    registerFormIsVisible = false;
    PopUpStore.emit('change');
}

var PopUpStore = objectAssign({}, EventEmitter.prototype, {

  getCancellationFormIsVisible: function () {
    return cancellationFormIsVisible;
  },

  getTermsConditionsFormIsVisible: function () {
    return termsConditionsFormIsVisible;
  },

  getRegisterFormIsVisible: function () {
    return registerFormIsVisible;
  },

  addChangeListener: function (changeEventHandler) {
    this.on('change', changeEventHandler);
  },

  removeChangeListener: function (changeEventHandler) {
    this.removeListener('change', changeEventHandler);
  }

});

function handleAction(action) {
  if (action.type === 'set-show-cancellation-form') {
    setShowCancellationForm();
  } else if (action.type === 'set-hide-cancellation-form') {
    setHideCancellationForm();
  } else if (action.type === 'set-show-terms-conditions-form') {
    setShowTermsConditionsForm();
  } else if (action.type === 'set-hide-terms-conditions-form') {
    setHideTermsConditionsForm();
  } else if (action.type === 'set-show-register-form') {
    setShowRegisterForm();
  } else if (action.type === 'set-hide-register-form') {
    setHideRegisterForm();
  } 
}

PopUpStore.dispatchToken = Dispatcher.register(handleAction);

module.exports = PopUpStore;