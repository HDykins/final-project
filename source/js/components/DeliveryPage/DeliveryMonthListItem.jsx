var React = require('react');
var DeliveryPageActionCreators = require('../../actions/DeliveryPageActionCreators.js');

var DeliveryMonthListItem = React.createClass({

  handleMonthSelectionClickEvent: function () {
  	DeliveryPageActionCreators.setCurrentMonthSelection(this.props.month);
  	DeliveryPageActionCreators.setDeliveryOptionPrice();
  	DeliveryPageActionCreators.sumAllPrices()
  },

	render: function () {
    return (<li onClick={this.handleMonthSelectionClickEvent}><a>{this.props.month}</a></li>);
  }
});

module.exports = DeliveryMonthListItem;