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

  handleYearSelectionClickEvent: function () {
  	DeliveryPageActionCreators.setCurrentYearSelection(2016);
  	DeliveryPageActionCreators.setDeliveryOptionPrice();
  	DeliveryPageActionCreators.sumAllPrices()
  },

  handleSetTimeToMorningClickEvent: function () {
  	DeliveryPageActionCreators.setCurrentTimeSelectionToMorning();
  },

  handleSetTimeToAfternoonClickEvent: function () {
  	DeliveryPageActionCreators.setCurrentTimeSelectionToAfternoon();
  },  

  render: function () {
    return (
   	<div>
   		<div className="col-xs-4">
   			<div className="rounded-box">
				<h4>{this.props.label}</h4>
			</div>
		</div>
		<div className="col-xs-4">
   			<div className="rounded-box visible dropdown-date">
   				<div className="no-padding col-xs-4">
					<div className="dropdown">
			            <button className="btn small-button dropdown-toggle" type="button" id="dropdown-lights" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
			              <span className="white-text">{CurrentDeliveryUserDetailsStore.getCurrentDaySelection()}</span>
			              <span className="caret"></span>
			            </button>
			            <ul className="dropdown-menu" aria-labelledby="dropdown-lights">
			              {this.addDayListItems()}
			            </ul>
			         </div>
		        </div>
		        <div className="no-padding col-xs-4">
					<div className="dropdown">
			            <button className="btn small-button dropdown-toggle" type="button" id="dropdown-lights" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
			              <span className="white-text">{CurrentDeliveryUserDetailsStore.getCurrentMonthSelection()}</span>
			              <span className="caret"></span>
			            </button>
			            <ul className="dropdown-menu" aria-labelledby="dropdown-lights">
			              {this.addMonthListItems()}
			            </ul>
			        </div>
		        </div>
		        <div className="no-padding col-xs-4">
					<div className="dropdown">
			            <button className="btn small-button dropdown-toggle" type="button" id="dropdown-lights" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
			              <span className="white-text">{CurrentDeliveryUserDetailsStore.getCurrentYearSelection()}</span>
			              <span className="caret"></span>
			            </button>
			            <ul className="dropdown-menu" aria-labelledby="dropdown-lights">
			              <li onClick={this.handleYearSelectionClickEvent}><a>2016</a></li>
			            </ul>
			        </div>	
		        </div>	         
			</div>
		</div>
		<div className="col-xs-4">
   			<div className="rounded-box visible dropdown-time">
				<div className="dropdown">
		            <button className="btn small-button dropdown-toggle" type="button" id="dropdown-lights" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
		              <span className="white-text">{CurrentDeliveryUserDetailsStore.getCurrentTimeSelection()}</span>
		              <span className="caret"></span>
		            </button>
		            <ul className="dropdown-menu" aria-labelledby="dropdown-lights">
		              <li onClick={this.handleSetTimeToMorningClickEvent}><a>Morning ( 8-12:30 )</a></li>
		              <li onClick={this.handleSetTimeToAfternoonClickEvent}><a>Afternoon ( 12:30-5 )</a></li>
		            </ul>
		         </div>	
			</div>
		</div>
	</div>
    );
  }
});

module.exports = DeliveryDate;