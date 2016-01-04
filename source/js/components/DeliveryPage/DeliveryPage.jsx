var React = require('react');
var NavBar = require('../NavBar.jsx');
var Header1 = require('../Header1.jsx');
var CollectOrDeliver = require('./CollectOrDeliver.jsx');
var CollectionMap = require('./CollectionMap.jsx');
var CollectionLocationDetails = require('./CollectionLocationDetails.jsx');
var PostCode = require('./PostCode.jsx');
var DeliveryAddress = require('./DeliveryAddress.jsx');
var DeliveryDate = require('./DeliveryDate.jsx');
var DeliveryInfo = require('./DeliveryInfo.jsx')
var BackButton = require('../BackButton.jsx');
var PriceTotal = require('../PriceTotal.jsx');
var ContinueButton = require('../ContinueButton.jsx');

var DeliveryPage = React.createClass({

  render: function () {
    return (
    	<div className="container-fluid grey-background">
        	<NavBar />
        	<div className="container">
        		<img src="../source/images/current-step-image-3.png" />
        		<Header1 label="Collect or Deliver?" />
        		<div className="row">
        			<CollectOrDeliver />
        		</div>
        		<div className="row">
	        		<CollectionMap />
	        		<CollectionLocationDetails />
	        	</div>	
	        	<div className="row">
	        		<PostCode />
	        	</div>
	        	<div className="row">
	        		<DeliveryAddress />
	        	</div>
            <div className="row">
              <DeliveryDate />
            </div>
            <div className="row">
              <DeliveryInfo />
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

module.exports = DeliveryPage;