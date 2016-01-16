var React = require('react');
var StateStore = require('../../stores/StateStore.js');
var DeliveryPageActionCreators = require('../../actions/DeliveryPageActionCreators.js');

var CollectOrDeliver = React.createClass({

  handleDeliverButtonClickEvent: function () {
  event.preventDefault();
    if (StateStore.getCollectionChoice()) {
    	DeliveryPageActionCreators.toggleCollectionChoice();
      DeliveryPageActionCreators.toggleDeliveryChoice()
      DeliveryPageActionCreators.sumAllPrices();
    } else if (StateStore.getDeliveryChoice()) {
      DeliveryPageActionCreators.toggleDeliveryChoice();
      DeliveryPageActionCreators.setDeliveryOptionPriceToZero();
      DeliveryPageActionCreators.sumAllPrices();
    } else {
      DeliveryPageActionCreators.toggleDeliveryChoice();
      DeliveryPageActionCreators.setDeliveryOptionPrice();
      DeliveryPageActionCreators.sumAllPrices();
    }
  },

  handleCollectButtonClickEvent: function () {
  event.preventDefault();
    if (StateStore.getDeliveryChoice()) {
    	DeliveryPageActionCreators.toggleDeliveryChoice()
      DeliveryPageActionCreators.toggleCollectionChoice();
      DeliveryPageActionCreators.setDeliveryOptionPriceToZero();
      DeliveryPageActionCreators.sumAllPrices()
    } else if (StateStore.getCollectionChoice()) {
      DeliveryPageActionCreators.toggleCollectionChoice();
      DeliveryPageActionCreators.sumAllPrices()
    } else {
      DeliveryPageActionCreators.toggleCollectionChoice();
      DeliveryPageActionCreators.sumAllPrices()
    }
  },

  render: function () {
  	console.log(this.props.deliveryChoice);
    return (
    <div>
		<button onClick={this.handleCollectButtonClickEvent} className="btn important-button">Collect</button>
		<button onClick={this.handleDeliverButtonClickEvent} className="btn important-button">Deliver</button>
	</div>
    );
  }
});

module.exports = CollectOrDeliver;