var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');

var PAGES = {
  LANDING_PAGE: 'LANDING_PAGE',
  TREE_PAGE: 'TREE_PAGE',
  DECORATIONS_PAGE: 'DECORATIONS_PAGE',
  DELIVERY_PAGE: 'DELIVERY_PAGE',
  PAYMENT_PAGE: 'PAYMENT_PAGE',
  THANKS_PAGE: 'PAYMENT_PAGE',
  ORDER_PAGE: 'ORDER_PAGE',
  SIGN_IN_PAGE: 'SIGN_IN_PAGE'
};

var currentPage = PAGES.LANDING_PAGE;

function changeToTreePage() {
  currentPage = PAGES.TREE_PAGE;
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

  addChangeListener: function (changeEventHandler) {
    this.on('change', changeEventHandler);
  },

  removeChangeListener: function (changeEventHandler) {
    this.removeListener('change', changeEventHandler);
  }

});

function handleAction(action) {
  if (action.type === 'change-to-tree-page') {
    changeToTreePage();
  } else if (action.type === 'remove_list_item') {
    removeListItem(action.itemId);
  } else if (action.type === 'remove_all_list_items') {
    removeAllListItems();
  }
}

StateStore.dispatchToken = Dispatcher.register(handleAction);

module.exports = StateStore;