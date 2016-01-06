var React = require('react');
var NavBar = require('../NavBar.jsx');
var CurrentDecorationsUserDetailsStore = require('../../stores/CurrentDecorationsUserDetailsStore.js');
var Header1 = require('../Header1.jsx');
var PreviewImage = require('./PreviewImage.jsx');
var DecorationsList = require('./DecorationsList.jsx');
var DecorationsCostBox = require('./DecorationsCostBox.jsx');
var BackButton = require('../BackButton.jsx');
var PriceTotal = require('../PriceTotal.jsx');
var ContinueButton = require('../ContinueButton.jsx');

var DecorationsPage = React.createClass({

  getInitialState: function () {
    return {
      decorations: CurrentDecorationsUserDetailsStore.getDecorationStatus()
    };
  },

  updateState: function () {
    this.setState({
      decorations: CurrentDecorationsUserDetailsStore.getDecorationStatus()
    });
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
        		<img src="../source/images/current-step-image-2.png" />
        		<Header1 label="Choose tree decorations"/>
        		<div className="row">
	        		<DecorationsList />
	        		<PreviewImage />
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
      	</div>
    );
  }
});

module.exports = DecorationsPage;