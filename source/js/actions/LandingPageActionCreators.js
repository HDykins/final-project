var Dispatcher = require('../dispatcher/Dispatcher');

function changeToTreePage() {
	var action = {
		type: 'change-to-tree-page',
	};

	Dispatcher.dispatch(action);
}

module.exports = {
	changeToTreePage: changeToTreePage
};