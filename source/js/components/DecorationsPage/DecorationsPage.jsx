var React = require('react');
var NavBar = require('../NavBar.jsx');
var TotalPriceStore = require('../../stores/TotalPriceStore.js');
var CurrentDecorationsUserDetailsStore = require('../../stores/CurrentDecorationsUserDetailsStore.js');
var Header1 = require('../Header1.jsx');
var PreviewImage = require('./PreviewImage.jsx');
var DecorationsList = require('./DecorationsList.jsx');
var DecorationsCostBox = require('./DecorationsCostBox.jsx');
var BackButton = require('../BackButton.jsx');
var PriceTotal = require('../PriceTotal.jsx');
var ContinueButton = require('../ContinueButton.jsx');
var Footer = require('../Footer.jsx');
var DecorationsPageActionCreators = require('../../actions/DecorationsPageActionCreators.js');

var decorationsSourceImages = {
  FairyLights: 
    {far: "fairy-lights-far",
    tree: "fairy-lights-tree",
    close: "fairy-lights-close"},
  Extension: 
    {far: "norwegian-spruce",
    tree: "norwegian-spruce",
    close: "norwegian-spruce"},
  BaublesGold: 
    {far: "gold-baubles-far",
    tree: "gold-baubles-tree",
    close: "gold-baubles-close"},
  BaublesSilver: 
    {far: "silver-baubles-far",
    tree: "silver-baubles-tree",
    close: "silver-baubles-close"},
  BaublesColoured: 
    {far: "coloured-baubles-far",
    tree: "coloured-baubles-tree",
    close: "coloured-baubles-close"},
  BaublesCat: 
    {far: "cat-baubles-far",
    tree: "cat-baubles-tree",
    close: "cat-baubles-close"},
  TinselSilver: 
    {far: "silver-tinsel-far",
    tree: "silver-tinsel-tree",
    close: "silver-tinsel-close"},
  TinselHybrid: 
    {far: "hybrid-tinsel-far",
    tree: "hybrid-tinsel-tree",
    close: "hybrid-tinsel-close"},
  TinselPurple: 
    {far: "purple-tinsel-far",
    tree: "purple-tinsel-tree",
    close: "purple-tinsel-close"},
  Stars: 
    {far: "gold-stars-far",
    tree: "gold-stars-tree",
    close: "gold-stars-close"},
  IciclesGold: 
    {far: "gold-icicles-far",
    tree: "gold-icicles-tree",
    close: "gold-icicles-close"},
  IciclesPatterned: 
    {far: "patterned-icicles-far",
    tree: "patterned-icicles-tree",
    close: "patterned-icicles-close"},
  GlitterBalls: 
    {far: "glitter-balls-far",
    tree: "glitter-balls-tree",
    close: "glitter-balls-close"},
  PineConesGold: 
    {far: "gold-pinecones-far",
    tree: "gold-pinecones-tree",
    close: "gold-pinecones-close"},
  Robins: 
    {far: "robin-family-far",
    tree: "robin-family-tree",
    close: "robin-family-close"},
  Ribbons: 
    {far: "red-ribbons-far",
    tree: "red-ribbons-tree",
    close: "red-ribbons-close"},
  Angel: 
    {far: "white-angel-far",
    tree: "white-angel-tree",
    close: "white-angel-close"}
};

var DecorationsPage = React.createClass({

  getInitialState: function () {
    return {
      decorationsSelected: CurrentDecorationsUserDetailsStore.getDecorationStatus(),
      decorationsHovered: CurrentDecorationsUserDetailsStore.getHoveredDecoration(),
      totalPrice: TotalPriceStore.getCurrentOverallPrice()
    };
  },

  updateState: function () {
    this.setState({
      decorationsSelected: CurrentDecorationsUserDetailsStore.getDecorationStatus(),
      decorationsHovered: CurrentDecorationsUserDetailsStore.getHoveredDecoration(),
      totalPrice: TotalPriceStore.getCurrentOverallPrice()
    });
  },

  isHovering: function (decorationName) {
    console.log("Hovering");
    console.log(decorationName);
    DecorationsPageActionCreators.setHoveredDecoration(decorationName);
  }, 

  isNotHovering: function (decorationName) {
    console.log("Not Hovering");
    DecorationsPageActionCreators.setHoveredDecorationToNull(decorationName);
  },

  getPhotoSource: function() {
    console.log(CurrentDecorationsUserDetailsStore.getHoveredDecoration());
    return decorationsSourceImages[CurrentDecorationsUserDetailsStore.getHoveredDecoration()] || null;
  },

  componentDidMount: function () {
      CurrentDecorationsUserDetailsStore.addChangeListener(this.updateState);
  },

  componentWillUnmount: function () {
      CurrentDecorationsUserDetailsStore.removeChangeListener(this.updateState);
  },  

  render: function () {
    return (
    	<div className="container-fluid grey-background">
        	<NavBar />
        	<div className="container">
        		<img src="../build/images/current-step-image-2.png" />
        		<Header1 label="Choose tree decorations"/>
        		<div className="row">
	        		<DecorationsList handleHoverOnDecoration={this.isHovering} handleUnHoverOnDecoration={this.isNotHovering} />
	        		<PreviewImage decoration={this.getPhotoSource()} />
	        	</div>	
	        	<div className="row">
	        		<DecorationsCostBox />
	        	</div>
	        	<div className="row">
	        		<BackButton label="Back to tree page" />
	        		<PriceTotal />
	        		<ContinueButton label="Continue to delivery page" />
	        	</div>
      		</div>
          <Footer />
      	</div>
    );
  }
});

module.exports = DecorationsPage;