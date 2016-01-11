var React = require('react');
var DeliveryPageActionCreators = require('../../actions/DeliveryPageActionCreators.js');
var CurrentDeliveryUserDetailsStore = require('../../stores/CurrentDeliveryUserDetailsStore.js');

var DeliveryDayListItem = React.createClass({

  handleDaySelectionClickEvent: function () {
  	DeliveryPageActionCreators.setCurrentDaySelection(this.props.day);
  	console.log(CurrentDeliveryUserDetailsStore.getCurrentDaySelection());
  },

	render: function () {
    return (<li onClick={this.handleDaySelectionClickEvent}><a href="#">{this.props.day}</a></li>);
  }
});

module.exports = DeliveryDayListItem;