var React = require('react');
var DeliveryPageActionCreators = require('../../actions/DeliveryPageActionCreators.js');

var DeliveryMonthListItem = React.createClass({

  handleMonthSelectionClickEvent: function () {
  	DeliveryPageActionCreators.setCurrentMonthSelection(this.props.month);
  	DeliveryPageActionCreators.setDeliveryOptionPrice();
  	DeliveryPageActionCreators.sumAllPrices()
  },

	render: function () {
    return (<option onClick={this.handleMonthSelectionClickEvent}>{this.props.month}</option>);
  }
});

module.exports = DeliveryMonthListItem;