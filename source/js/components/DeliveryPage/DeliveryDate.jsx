var React = require('react');

var DeliveryDate = React.createClass({

  addDayListItems: function () {
	var dayListItem = [];
	for (var iterator = 1; iterator<32; iterator = iterator + 1) {
		dayListItem.push(<li key={iterator} day={iterator} onClick={this.handleDaySelectionClickEvent}><a href="#">{iterator}</a></li>);
	}
	return dayListItem;
  },

  addMonthListItems: function () {
	var monthListItem = [];
	for (var iterator = 1; iterator<13; iterator = iterator + 1) {
		monthListItem.push(<li key={iterator} month={iterator} onClick={this.handleMonthSelectionClickEvent}><a href="#">{iterator}</a></li>);
	}
	return monthListItem;
  },

  handleDaySelectionClickEvent: function () {
  	DeliveryPageActionCreators.setCurrentDaySelection();
  },

  handleMonthSelectionClickEvent: function () {
  	DeliveryPageActionCreators.setCurrentMonthSelection();
  },

  handleYearSelectionClickEvent: function () {
  	DeliveryPageActionCreators.setCurrentYearSelection();
  },

  handleTimeSelectionClickEvent: function () {
  	DeliveryPageActionCreators.setCurrentTimeSelection();
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
			              Day
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
			              Month
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
			              Year
			              <span className="caret"></span>
			            </button>
			            <ul className="dropdown-menu" aria-labelledby="dropdown-lights">
			              <li onClick={this.handleYearSelectionClickEvent}><a href="#">2016</a></li>
			            </ul>
			        </div>	
		        </div>	         
			</div>
		</div>
		<div className="col-xs-4">
   			<div className="rounded-box visible dropdown-time">
				<div className="dropdown">
		            <button className="btn small-button dropdown-toggle" type="button" id="dropdown-lights" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
		              Time
		              <span className="caret"></span>
		            </button>
		            <ul className="dropdown-menu" aria-labelledby="dropdown-lights">
		              <li onClick={this.handleTimeSelectionClickEvent}><a href="#">Morning (8-12:30)</a></li>
		              <li onClick={this.handleTimeSelectionClickEvent}><a href="#">Afternoon (12:30-5)</a></li>
		            </ul>
		         </div>	
			</div>
		</div>
	</div>
    );
  }
});

module.exports = DeliveryDate;