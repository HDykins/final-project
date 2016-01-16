var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');
var HashID = require ('../services/HashID');

var isSignedIn = false;
var token = null;

var currentUserId = null;

function setCurrentUserId(id) {
  currentUserId = id;
}

function setSignedInStatusToTrue() {
  isSignedIn = true;
  UserSignInDetailsStore.emit('change');
}

function setSignedInStatusToFalse() {
  isSignedIn = false;
  UserSignInDetailsStore.emit('change');
}

function setUserAuthenticationToken(newToken) {
  token = newToken;
  UserSignInDetailsStore.emit('change');
}

var UserSignInDetailsStore = objectAssign({}, EventEmitter.prototype, {

  getSignedInStatus: function () {
    return isSignedIn;
  },

  getCurrentToken: function () {
    return token;
  },  

  getCurrentUserId: function () {
    return currentUserId;
  },

});

function handleAction(action) {
	if (action.type === 'set-signed-in-status-to-true') {
		setSignedInStatusToTrue();
	} else if (action.type === 'set-signed-in-status-to-false') {
    setSignedInStatusToFalse();
  } else if (action.type === 'set-user-authentication-token') {
    setUserAuthenticationToken(action.token);
  } else if (action.type === 'set-current-user-id') {
    setCurrentUserId(action.id);
  }
}

UserSignInDetailsStore.dispatchToken = Dispatcher.register(handleAction);

module.exports = UserSignInDetailsStore;