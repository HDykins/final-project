var React = require('react');
var NavBar = require('../NavBar.jsx');
var Header1 = require('../Header1.jsx');
var LargeTreeIcon = require('./LargeTreeIcon.jsx');
var TreeIcons = require('./TreeIcons.jsx');
var FactList = require('./FactList.jsx');
var TreeDescription = require('./TreeDescription.jsx');
var SliderBox = require('./SliderBox.jsx');
var HeightCategoryBox = require('./HeightCategoryBox.jsx');
var PriceTotal = require('../PriceTotal.jsx');
var ContinueButton = require('../ContinueButton.jsx');

var TreePage = React.createClass({

  render: function () {
    return (
    	<div className="container-fluid">
        	<NavBar />
        	<div className="container">
        		<img src="../source/images/current-step-image-1.png" />
        		<Header1 />
        		<LargeTreeIcon />
				<TreeIcons />
	        	<div className="row rounded-box">
	        		<div className="col-xs-4">
	        			<FactList />
	        		</div>
	        		<div className="col-xs-8">
	        			<TreeDescription />
	        		</div>	        		
	        	</div>
	        	<Header1 />
	        	<div className="row">
	        		<div className="col-xs-6">
	        			<SliderBox />
	        		</div>
	        		<div className="col-xs-6">
	        			<HeightCategoryBox />
	        		</div>	
	        	</div>
	        	<div className="row">
	        		<PriceTotal />
	        		<ContinueButton />
	        	</div>
      		</div>
      	</div>
    );
  }
});

module.exports = TreePage;