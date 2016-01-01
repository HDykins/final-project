var React = require('react');

var DeliveryDate = React.createClass({
  render: function () {
    return (
   	<div>
   		<div className="col-xs-4">
   			<div className="rounded-box">
				<h4>Choose delivery date and preferred time</h4>
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
			              <li><a href="#">24th</a></li>
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
			              <li><a href="#">12</a></li>
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
			              <li><a href="#">2015</a></li>
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
		              <li><a href="#">Morning (8-12:30)</a></li>
		              <li><a href="#">Afternoon (12:30-5)</a></li>
		            </ul>
		         </div>	
			</div>
		</div>
	</div>
    );
  }
});

module.exports = DeliveryDate;