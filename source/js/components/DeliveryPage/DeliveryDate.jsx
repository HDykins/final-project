var React = require('react');
var CurrentDeliveryUserDetailsStore = require('../../stores/CurrentDeliveryUserDetailsStore.js');
var DeliveryDayListItem = require('./DeliveryDayListItem.jsx');
var DeliveryMonthListItem = require('./DeliveryMonthListItem.jsx');
var DeliveryPageActionCreators = require('../../actions/DeliveryPageActionCreators.js');

var DeliveryDate = React.createClass({

  addDayListItems: function () {
	var dayListItem = [];
	for (var iterator = 1; iterator<32; iterator = iterator + 1) {
		dayListItem.push(<DeliveryDayListItem key={iterator} day={iterator} />);
	}
	return dayListItem;
  },

  addMonthListItems: function () {
	var monthListItem = [];
	for (var iterator = 1; iterator<13; iterator = iterator + 1) {
		monthListItem.push(<DeliveryMonthListItem key={iterator} month={iterator} />);
	}
	return monthListItem;
  },

  handleDaySelectionChange: function () {
  	DeliveryPageActionCreators.setCurrentDaySelection(parseInt(this.refs.day.value));
  	DeliveryPageActionCreators.setDeliveryOptionPrice();
  	DeliveryPageActionCreators.sumAllPrices()
  },

  handleMonthSelectionChange: function () {
  	console.log("stored date month    " + parseInt(this.refs.month.value));
  	DeliveryPageActionCreators.setCurrentMonthSelection(parseInt(this.refs.month.value));
  	DeliveryPageActionCreators.setDeliveryOptionPrice();
  	DeliveryPageActionCreators.sumAllPrices()
  },

  handleYearSelectionChange: function () {
  	DeliveryPageActionCreators.setCurrentYearSelection(2016);
  	DeliveryPageActionCreators.setDeliveryOptionPrice();
  	DeliveryPageActionCreators.sumAllPrices()
  },

  handleTimeSelectionChange: function () {
  	if (this.refs.time.value === "Morning ( 8-12:30 )") {
	  	DeliveryPageActionCreators.setCurrentTimeSelectionToMorning();
	} else if (this.refs.time.value === "Afternoon ( 12:30-5 )") {
	  	DeliveryPageActionCreators.setCurrentTimeSelectionToAfternoon();
	}
  },

  render: function () {
  	console.log(CurrentDeliveryUserDetailsStore.getShowDateValidationMessage());
    return (
   	<div>
		<div className="col-xs-8">
			<div className="row">
   				<div className="no-padding col-xs-4">
					<select onChange={this.handleDaySelectionChange} name="days" className="form-control btn small-button dropdown-toggle" data-width="fit" ref="day">
						<option value="">Day</option>
			            {this.addDayListItems()}
				    </select>
		        </div>
		        <div className="no-padding col-xs-4">
					<select onChange={this.handleMonthSelectionChange} name="months" className="form-control btn small-button dropdown-toggle" data-width="fit" ref="month">
						<option value="">Month</option>
						{this.addMonthListItems()}
					</select>
		        </div>
		        <div className="no-padding col-xs-4">
					<select onChange={this.handleYearSelectionChange} name="years" className="form-control btn small-button dropdown-toggle" data-width="fit" ref="year">
						<option value="">Year</option>
			            <option>2016</option>   
			        </select>
		        </div>	         
			</div>
		</div>
		<div className="col-xs-4">
			<div className="row">
			<div className="no-padding col-xs-12">
	             <select onChange={this.handleTimeSelectionChange} name="times" className="form-control btn small-button dropdown-toggle" data-width="fit" ref="time">
					<option value="">Time</option>
	            	<option>Morning ( 8-12:30 )</option>
	            	<option>Afternoon ( 12:30-5 )</option>
	            </select>
	        </div>
	        </div>	
		</div>
		{CurrentDeliveryUserDetailsStore.getShowDateValidationMessage() ?
		<div>Please select a date before continuing</div>
		: null}
	</div>
    );
  }
});

module.exports = DeliveryDate;