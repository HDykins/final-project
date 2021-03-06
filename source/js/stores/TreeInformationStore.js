var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');

var TREE_TYPES = {
	NORWEGIAN_SPRUCE: "NORWEGIAN_SPRUCE",
	NORDMANN_FIR: "NORDMANN_FIR",
	FRASER_FIR: "FRASER_FIR",
	ARTIFICIAL: "ARTIFICIAL"
}

var TREE_PRICES = {
  NORWEGIAN_SPRUCE: {SMALL: 20, MEDIUM: 24, LARGE: 40},
  NORDMANN_FIR: {SMALL: 28, MEDIUM: 32, LARGE: 48},
  FRASER_FIR: {SMALL: 35, MEDIUM: 42, LARGE: 55},
  ARTIFICIAL: {SMALL: 12, MEDIUM: 40, LARGE: 70}
}

var HEIGHTS = {
  SMALL: "SMALL",
  MEDIUM: "MEDIUM",
  LARGE: "LARGE"
}

var currentTreeView = TREE_TYPES.NORWEGIAN_SPRUCE;
var currentHeight = HEIGHTS.MEDIUM;
var currentHeightValue = 7;
var currentWidthValue = 3.5;
var currentPrice = 24;

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

function changeHeightToSmall() {
  currentHeight = HEIGHTS.SMALL;
  TreeInformationStore.emit('change');
}

function changeHeightToMedium() {
  currentHeight = HEIGHTS.MEDIUM;
  TreeInformationStore.emit('change');
}

function changeHeightToLarge() {
  currentHeight = HEIGHTS.LARGE;
  TreeInformationStore.emit('change');
}

function setHeight(height) {
  currentHeight = HEIGHTS[height];
  TreeInformationStore.emit('change');
}

function setHeightValue(height) {
  currentHeightValue = height;
  if (currentTreeView === "FRASER_FIR") {
    currentWidthValue = (height/3).toFixed(2);
  } else {
    currentWidthValue = (height/2).toFixed(2);
  }
  TreeInformationStore.emit('change');
}

function setTreeType(treeType) {
  currentTreeView = TREE_TYPES[treeType];
  TreeInformationStore.emit('change');
}

function setCurrentTreePrice() {
    currentPrice = TREE_PRICES[currentTreeView][currentHeight];
    console.log(currentPrice);
    TreeInformationStore.emit('change');
}

var TreeInformationStore = objectAssign({}, EventEmitter.prototype, {
  
  getCurrentTreeView: function () {
    return currentTreeView;
  },

  getCurrentHeight: function () {
    return currentHeight;
  },

  getCurrentHeightValue: function () {
    return currentHeightValue;
  },

  getCurrentWidthValue: function () {
    return currentWidthValue;
  },

  getCurrentPrice: function () {
    return currentPrice;
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
  } else if (action.type === 'change-height-to-small') {
    changeHeightToSmall();
  } else if (action.type === 'change-height-to-medium') {
    changeHeightToMedium();
  } else if (action.type === 'change-height-to-large') {
    changeHeightToLarge();
  } else if (action.type === 'set-height') {
    setHeight(action.height);
  } else if (action.type === 'set-height-value') {
    setHeightValue(action.heightValue);
  } else if (action.type === 'set-tree-type') {
    setTreeType(action.treeType);
  } else if (action.type === 'set-current-tree-price') {
    setCurrentTreePrice();
  }
}

TreeInformationStore.dispatchToken = Dispatcher.register(handleAction);

module.exports = TreeInformationStore;