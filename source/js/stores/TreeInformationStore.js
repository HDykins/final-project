var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');

var TREE_TYPES = {
	NORWEGIAN_SPRUCE: "NORWEGIAN_SPRUCE",
	NORDMANN_FIR: "NORDMANN_FIR",
	FRASER_FIR: "FRASER_FIR",
	ARTIFICIAL: "ARTIFICIAL"
}

var currentTreeView = TREE_TYPES.NORWEGIAN_SPRUCE;

function changeToNorwegianView() {
  currentTreeView = TREE_TYPES.NORWEGIAN_SPRUCE;
  TreeInformationStore.emit('change');
}

function changeToNordmannView() {
  currentTreeView = TREE_TYPES.NORDMANN_FIR;
  TreeInformationStore.emit('change');
}

function changeToFraserView() {
  currentTreeView = TREE_TYPES.FRASER_FIR;
  TreeInformationStore.emit('change');
}

function changeToArtificialView() {
  currentTreeView = TREE_TYPES.ARTIFICIAL;
  TreeInformationStore.emit('change');
}

var TreeInformationStore = objectAssign({}, EventEmitter.prototype, {
  
  getCurrentTreeView: function () {
    return currentTreeView;
  },

  addChangeListener: function (changeEventHandler) {
    this.on('change', changeEventHandler);
  },

  removeChangeListener: function (changeEventHandler) {
    this.removeListener('change', changeEventHandler);
  }


});

function handleAction(action) {
  if (action.type === 'change-to-norwegian-view') {
    changeToNorwegianView();
  } else if (action.type === 'change-to-nordmann-view') {
    changeToNordmannView();
  } else if (action.type === 'change-to-fraser-view') {
    changeToFraserView();
  } else if (action.type === 'change-to-artificial-view') {
    changeToArtificialView();
  }
}

TreeInformationStore.dispatchToken = Dispatcher.register(handleAction);

module.exports = TreeInformationStore;