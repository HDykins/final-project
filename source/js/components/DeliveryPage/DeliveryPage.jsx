var React = require('react');
var NavBar = require('../NavBar.jsx');
var StateStore = require('../../stores/StateStore.js');
var CurrentDeliveryUserDetailsStore = require('../../stores/CurrentDeliveryUserDetailsStore.js');
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
var DeliveryPageActionCreators = require('../../actions/DeliveryPageActionCreators.js');

var DeliveryPage = React.createClass({

  getInitialState: function () {
      return {
        deliveryButtonChosen: StateStore.getDeliveryChoice(),
        collectionButtonChosen: StateStore.getCollectionChoice()
      };
  },

  updateState: function () {
      this.setState(
      {
        deliveryButtonChosen: StateStore.getDeliveryChoice(),
        collectionButtonChosen: StateStore.getCollectionChoice()
      });
  },

  componentDidMount: function () {
      StateStore.addChangeListener(this.updateState);
      CurrentDeliveryUserDetailsStore.addChangeListener(this.updateState);
  },

  componentWillUnmount: function () {
      StateStore.removeChangeListener(this.updateState);
      CurrentDeliveryUserDetailsStore.addChangeListener(this.updateState);
  },    

  render: function () {

    console.log(CurrentDeliveryUserDetailsStore.getDeliveryAddressDetails());
    return (
    	<div className="container-fluid grey-background">
        	<NavBar />
        	<div className="container">
        		<img src="../source/images/current-step-image-3.png" />
        		<Header1 label="Collect or Deliver?" />
        		<div className="row">
        			<CollectOrDeliver deliveryChoice={this.state.deliveryButtonChosen} collectionChoice={this.state.collectionButtonChosen} />
        		</div>

        		{this.state.collectionButtonChosen ? 
            <div className="row">
	        		<CollectionMap />
	        		<CollectionLocationDetails />
              <div className="row">
                <DeliveryDate label="Choose collection date and preferred time" />
              </div>
	        	</div> 
            : null}

            {this.state.deliveryButtonChosen ? 
	        	<div className="row">
	        		<PostCode />
	        	</div>
            : null}
            
            {CurrentDeliveryUserDetailsStore.getDeliveryAddressDetails().postcode && this.state.deliveryButtonChosen ?
            <div>   
  	        	<div className="row">
  	        		<DeliveryAddress />
  	        	</div>
              <div className="row">
                <DeliveryDate label="Choose delivery date and preferred time" />
              </div>
              <div className="row">
                <DeliveryInfo />
              </div>
            </div>
            : null}

	        	<div className="row">
	        		<BackButton label="Back to decorations page" />
	        		<PriceTotal />
	        		<ContinueButton label="Continue to payment" />
	        	</div>
      		</div>
      	</div>
    );
  }
});

module.exports = DeliveryPage;