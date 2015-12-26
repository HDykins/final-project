var React = require('react');

var CardDetails = React.createClass({
  render: function () {
    return (
    <div>	
	    <div className="col-xs-6 col-xs-offset-3">	
			<div className="rounded-box">
				<div className="rounded-box input-div">
					<input type="text" />
				</div>
				<div className="rounded-box input-div">
					<div className="dropdown">
			            <button className="btn btn-default dropdown-toggle" type="button" id="dropdown-lights" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
			              Card Type
			              <span className="caret"></span>
			            </button>
			            <ul className="dropdown-menu" aria-labelledby="dropdown-lights">
			              <li><a href="#">Visa</a></li>
			              <li><a href="#">Visa Debit</a></li>
			              <li><a href="#">American Express</a></li>
			              <li><a href="#">Maestro</a></li>
			              <li><a href="#">Mastercard</a></li>
			            </ul>
			        </div>
				</div>
				<div className="rounded-box input-div">
					<input type="text" />
				</div>
				<div className="rounded-box input-div">
					<input type="text" />
				</div>
				<div className="rounded-box input-div">
					<label>Expiry date</label>
					<input type="text" />/
					<input type="text" />/
					<input type="text" />
				</div>
				<div className="col-xs-6">
					You must accept the <span>terms and conditions</span>
				</div>
				<div className="col-xs-6">
					I Accept <input type="checkbox" />
				</div>
			</div>
		</div>
	</div>	
    );
  }
});

module.exports = CardDetails;