var React = require('react');
var NavBar = require('../NavBar.jsx');
var Header1 = require('../Header1.jsx');
var PreviewImage = require('./PreviewImage.jsx');
var DecorationsList = require('./DecorationsList.jsx');
var DecorationsCostBox = require('./DecorationsCostBox.jsx');
var BackButton = require('../BackButton.jsx');
var PriceTotal = require('../PriceTotal.jsx');
var ContinueButton = require('../ContinueButton.jsx');

var DecorationsPage = React.createClass({

  render: function () {
    return (
    	<div className="container-fluid">
        	<NavBar />
        	<div className="container">
        		<img src="../source/images/current-step-image-2.png" />
        		<Header1 />
        		<div className="row">
	        		<DecorationsList />
	        		<PreviewImage />
	        	</div>	
	        	<div className="row">
	        		<DecorationsCostBox />
	        	</div>
	        	<div className="row">
	        		<BackButton />
	        		<PriceTotal />
	        		<ContinueButton />
	        	</div>
      		</div>
      	</div>
    );
  }
});

module.exports = DecorationsPage;