var React = require('react');
var DeliveryPageActionCreators = require('../../actions/DeliveryPageActionCreators.js');
var CurrentDeliveryUserDetailsStore = require('../../stores/CurrentDeliveryUserDetailsStore.js');

var DeliveryDayListItem = React.createClass({

  handleDaySelectionClickEvent: function () {
  	DeliveryPageActionCreators.setCurrentDaySelection(this.props.day);
  	DeliveryPageActionCreators.setDeliveryOptionPrice();
  	DeliveryPageActionCreators.sumAllPrices()
  },

	render: function () {
    return (<option onClick={this.handleDaySelectionClickEvent}>{this.props.day}</option>);
  }
});

module.exports = DeliveryDayListItem;