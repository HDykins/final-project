var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');

var PAGES = {
  LANDING_PAGE: 'LANDING_PAGE',
  TREE_PAGE: 'TREE_PAGE',
  DECORATIONS_PAGE: 'DECORATIONS_PAGE',
  DELIVERY_PAGE: 'DELIVERY_PAGE',
  PAYMENT_PAGE: 'PAYMENT_PAGE',
  THANKS_PAGE: 'THANKS_PAGE',
  SIGN_IN_PAGE: 'SIGN_IN_PAGE',
  ORDERS_PAGE: 'ORDERS_PAGE'
};

var currentPage = PAGES.LANDING_PAGE;

var delivery = false;
var collection = false;

var isSignedIn = false;

function toggleDeliveryChoice() {
  if (delivery === true) {
    delivery = false;
  }
  else {
    delivery = true;
  }
  StateStore.emit('change');
}

function toggleCollectionChoice() {
  if (collection === true) {
    collection = false;
  }
  else {
    collection = true;
  }
  StateStore.emit('change');
}

function changeToLandingPage() {
  currentPage = PAGES.LANDING_PAGE;
  StateStore.emit('change');
}

function changeToTreePage() {
  currentPage = PAGES.TREE_PAGE;
  StateStore.emit('change');
}

function changeToDecorationsPage() {
  currentPage = PAGES.DECORATIONS_PAGE;
  StateStore.emit('change');
}

function changeToDeliveryPage() {
  currentPage = PAGES.DELIVERY_PAGE;
  StateStore.emit('change');
}

function changeToPaymentPage() {
  currentPage = PAGES.PAYMENT_PAGE;
  StateStore.emit('change');
}

function changeToThanksPage() {
  currentPage = PAGES.THANKS_PAGE;
  StateStore.emit('change');
}

function changeToSignInPage() {
  currentPage = PAGES.SIGN_IN_PAGE;
  StateStore.emit('change');
}

function changeToOrdersPage() {
  currentPage = PAGES.ORDERS_PAGE;
  StateStore.emit('change');
}

function removeListItem(listItemId) {
  delete shoppingList[listItemId];

  ListItemStore.emit('change');
}

function removeAllListItems() {
  shoppingList = {};

  ListItemStore.emit('change');
}

var StateStore = objectAssign({}, EventEmitter.prototype, {
  
  getCurrentPage: function () {
    return currentPage;
  },

  getSignedInStatus: function () {
    return isSignedIn;
  },

  getDeliveryChoice: function () {
    return delivery;
  },

  getCollectionChoice: function () {
    return collection;
  },

  signIn: function () {
  isSignedIn = true;
  },

  addChangeListener: function (changeEventHandler) {
    this.on('change', changeEventHandler);
  },

  removeChangeListener: function (changeEventHandler) {
    this.removeListener('change', changeEventHandler);
  }

});

function handleAction(action) {
  if (action.type === 'change-to-landing-page') {
    changeToLandingPage();
  } else if (action.type === 'change-to-tree-page') {
    changeToTreePage();
  } else if (action.type === 'change-to-decorations-page') {
    changeToDecorationsPage();
  } else if (action.type === 'change-to-delivery-page') {
    changeToDeliveryPage();
  } else if (action.type === 'change-to-payment-page') {
    changeToPaymentPage();
  } else if (action.type === 'change-to-thanks-page') {
    changeToThanksPage();   
  } else if (action.type === 'change-to-sign-in-page') {
    changeToSignInPage();                   
  } else if (action.type === 'change-to-orders-page') {
    changeToOrdersPage();   
  } else if (action.type === 'toggle-collection-choice') {
    toggleCollectionChoice();   
  } else if (action.type === 'toggle-delivery-choice') {
    toggleDeliveryChoice();   
  } else if (action.type === 'remove_all_list_items') {
    removeListItem(action.itemId);
  }
}

StateStore.dispatchToken = Dispatcher.register(handleAction);

module.exports = StateStore;