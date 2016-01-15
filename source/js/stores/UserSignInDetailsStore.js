var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');

var isSignedIn = false;
var token = null;
var currentUserID = null;

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

function setNewUserID(id) {
  currentUserID = id
}

var UserSignInDetailsStore = objectAssign({}, EventEmitter.prototype, {

  getSignedInStatus: function () {
    return isSignedIn;
  },

  getCurrentToken: function () {
    return token;
  },  

  getCurrentUserID: function () {
    return currentUserID;
  },

});

function handleAction(action) {
	if (action.type === 'set-signed-in-status-to-true') {
		setSignedInStatusToTrue();
	} else if (action.type === 'set-signed-in-status-to-false') {
    setSignedInStatusToFalse();
  } else if (action.type === 'set-user-authentication-token') {
    setUserAuthenticationToken(action.token);
  } else if (action.type === 'set-new-user-id') {
    setNewUserID(action.id);
  }
}

UserSignInDetailsStore.dispatchToken = Dispatcher.register(handleAction);

module.exports = UserSignInDetailsStore;