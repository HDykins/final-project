var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');

var shoppingList = {};

function addListItem(listItem) {
	shoppingList[listItem.id] = listItem;
	console.log('1');
	ListItemStore.emit('change');
}

function removeListItem(listItemId) {
	delete shoppingList[listItem.id];
}

function removeAllListItems() {
	shoppingList = {};
}

var ListItemStore = objectAssign({}, EventEmitter.prototype, {
	getAllListItems: function () {
		return shoppingList;
	},
	addChangeListener: function (changeEventHandler) {
		console.log('addChangeListener');
		this.on('change', changeEventHandler);
	},
	removeChangeListener: function (changeEventHandler) {
		this.removeListener('change', changeEventHandler);
	}
});

Dispatcher.register(function handleAction(action) {
	console.log(action);
	addListItem(action.item);
});

module.exports = ListItemStore;