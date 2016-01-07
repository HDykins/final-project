var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');

var isDecorationSelected = {
	FairyLights: false,
	Extension: false,
	BaublesGold: false,
	BaublesSilver: false,
	BaublesColoured: false,
	BaublesCat: false,
	TinselSilver: false,
	TinselHybrid: false,
	TinselPurple: false,
	Stars: false,
	IciclesGold: false,
	IciclesPatterned: false,
	GlitterBalls: false,
	PineConesGold: false,
	Robins: false,
	Ribbons: false,
	Angel: false
};

var decorationHovered = null;

var decorationDescription = {
	FairyLights: "Fairy Lights - 5m",
	Extension: "Extension socket",
	BaublesGold: "Baubles Gold - 6 pack",
	BaublesSilver: "Baubles Silver - 6 pack",
	BaublesColoured: "Baubles Coloured + Patterned - 6 pack",
	BaublesCat: "Baubles Cat - 6 pack",
	TinselSilver: "Silver - 2m",
	TinselHybrid: "Gold/silver hybrid - 2m",
	TinselPurple: "Purple - 2m",
	Stars: "Stars - 8 pack",
	IciclesGold: "Icicles Gold - 6 Pack",
	IciclesPatterned: "Icicles Patterned - 6 Pack",
	GlitterBalls: "Glitter Balls - 6 pack",
	PineConesGold: "Pine cones Gold - 8 pack",
	Robins: "Robin family",
	Ribbons: "Ribbons 8-pack",
	Angel: "White angel"
};

var listOfSelectedDecorations = [];

var currentTotalDecorationsPrice = 0;

var DECORATION_PRICE = {
	FairyLights: 7,
	Extension: 5,
	BaublesGold: 5,
	BaublesSilver: 5,
	BaublesColoured: 4,
	BaublesCat: 6,
	TinselSilver: 3,
	TinselHybrid: 3,
	TinselPurple: 3,
	Stars: 4,
	IciclesGold: 5,
	IciclesPatterned: 4,
	GlitterBalls: 3,
	PineConesGold: 3,
	Robins: 6,
	Ribbons: 3,
	Angel: 7
};

function toggleDecorationSelection(decoration) {
	if (isDecorationSelected[decoration]) {
	  listOfSelectedDecorations.splice(listOfSelectedDecorations.indexOf(decoration), 1);
	  setCurrentTotalDecorationsPrice();
	  isDecorationSelected[decoration] = false;
	}
	else {
	  listOfSelectedDecorations.push(decoration);
	  setCurrentTotalDecorationsPrice();
	  isDecorationSelected[decoration] = true;	
	}
	console.log("here");
	console.log(listOfSelectedDecorations);
	CurrentDecorationsUserDetailsStore.emit('change');
}

function setCurrentTotalDecorationsPrice() {
	var sum = 0;
  	listOfSelectedDecorations.map(
		function renderDecorationListInCostBox(name) {
			return (
				sum = sum + DECORATION_PRICE[name]
			);
		}
	);
	currentTotalDecorationsPrice = sum;
}

function setHoveredDecoration(decorationName) {
	decorationHovered = decorationName;
	CurrentDecorationsUserDetailsStore.emit('change');
}

function setHoveredDecorationToNull(decorationName) {
	decorationHovered = null;
	CurrentDecorationsUserDetailsStore.emit('change');
}

var CurrentDecorationsUserDetailsStore = objectAssign({}, EventEmitter.prototype, {
  
  getDecorationStatus: function () {
    return isDecorationSelected;
  },

  getHoveredDecoration: function () {
    return decorationHovered;
  },

  getDecorationDescriptions: function () {
    return decorationDescription;
  },

  getListOfSelectedDecorations: function () {
    return listOfSelectedDecorations;
  },

  getDecorationPrice: function () {
    return DECORATION_PRICE;
  },

  getCurrentTotalDecorationsPrice: function () {
  	return currentTotalDecorationsPrice;
  },

  addChangeListener: function (changeEventHandler) {
    this.on('change', changeEventHandler);
  },

  removeChangeListener: function (changeEventHandler) {
    this.removeListener('change', changeEventHandler);
  }

});

function handleAction(action) {
  if (action.type === 'toggle-decoration-selection') {
    toggleDecorationSelection(action.decorationName);
  }
  if (action.type === 'set-hovered-decoration') {
    setHoveredDecoration(action.decorationName);
  }
  if (action.type === 'set-hovered-decoration-to-null') {
    setHoveredDecorationToNull(action.decorationName);
  }  
}

CurrentDecorationsUserDetailsStore.dispatchToken = Dispatcher.register(handleAction);

module.exports = CurrentDecorationsUserDetailsStore;    