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
var Footer = require('../Footer.jsx');
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
  var node = this.getDOMNode();
  node.scrollTop = node.scrollHeight;
  },

  componentWillUnmount: function () {
    console.debug("degugged");
      StateStore.removeChangeListener(this.updateState);
      CurrentDeliveryUserDetailsStore.removeChangeListener(this.updateState);
  },    

  render: function () {

    console.log(CurrentDeliveryUserDetailsStore.getDeliveryAddressDetails());
    return (
    	<div className="container-fluid grey-background">
        	<NavBar />
        	<div className="container">
        		<img src="../images/current-step-image-3.png" />
        		<Header1 label="Collect or Deliver?" />
        		<div className="row">
        			<CollectOrDeliver deliveryChoice={this.state.deliveryButtonChosen} collectionChoice={this.state.collectionButtonChosen} />
        		</div>

        		{this.state.collectionButtonChosen ?
            <div>  
              <hr />  
              <div className="row">
                <h2>Choose collection point</h2>
              </div>
              <hr />
              <div className="row">
  	        		<CollectionMap />
  	        		<CollectionLocationDetails />
              </div> 
              <div className="row">
              <hr />
                <h2>Choose a collection date and preferred time</h2>
              </div>
              <hr />
              <div className={CurrentDeliveryUserDetailsStore.getShowDateValidationMessage() ? "rounded-box required-field" : "rounded-box"}>
                <div className="row">
                  <DeliveryDate />
                </div>
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
                <h2>Choose a delivery date and preferred time</h2>
              </div>
              <div className={CurrentDeliveryUserDetailsStore.getShowDateValidationMessage() ? "rounded-box required-field" : "rounded-box"}>
                <div className="row">
                  <DeliveryDate />
                </div>
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
          <Footer />
      	</div>
    );
  }
});

module.exports = DeliveryPage;