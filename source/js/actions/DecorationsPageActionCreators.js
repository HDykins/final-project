var Dispatcher = require('../dispatcher/Dispatcher');


function changeToTreePage() {
	var action = {
		type: 'change-to-tree-page',
	};
	Dispatcher.dispatch(action);
}

function changeToDeliveryPage() {
	var action = {
		type: 'change-to-delivery-page',
	};
	Dispatcher.dispatch(action);
}


module.exports = {
	changeToTreePage: changeToTreePage,
	changeToDeliveryPage: changeToDeliveryPage
};