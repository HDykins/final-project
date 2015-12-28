var React = require('react');
var NavBar = require('../NavBar.jsx');
var Header1 = require('../Header1.jsx');
var LargeTreeIcon = require('./LargeTreeIcon.jsx');
var TreeIcons = require('./TreeIcons.jsx');
var TreeInfo = require('./TreeInfo.jsx');
var SliderBox = require('./SliderBox.jsx');
var HeightCategoryBox = require('./HeightCategoryBox.jsx');
var PriceTotal = require('../PriceTotal.jsx');
var ContinueButton = require('../ContinueButton.jsx');

var TreePage = React.createClass({

  render: function () {
    return (
    	<div className="container-fluid grey-background">
        	<NavBar />
        	<div className="container">
        		<img src="../source/images/current-step-image-1.png" />
        		<div className="row">
	        		<Header1 />
	        	</div>
        		<div className="row">
	        		<LargeTreeIcon />
	        	</div>	
				<TreeIcons />
	        	<div className="row">
					<TreeInfo />       		
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
	        		<div className="col-xs-3"></div>
	        		<PriceTotal />
	        		<ContinueButton />
	        	</div>
      		</div>
      	</div>
    );
  }
});

module.exports = TreePage;