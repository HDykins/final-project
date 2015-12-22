var Dispatcher = require('../dispatcher/Dispatcher');

function createShoppingListItem(item) {
	var action = {
		type: 'create-shopping-list-item',
		item: item
	};
	console.log('2');

	Dispatcher.dispatch(action);
}

module.exports = {
	createShoppingListItem: createShoppingListItem
};