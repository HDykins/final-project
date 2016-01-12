var React = require('react');
var PaymentPageActionCreators = require('../../actions/PaymentPageActionCreators.js');


var CardDetails = React.createClass({

  handleTermsConditionsLinkClickEvent: function () {
  	event.preventDefault();

    PaymentPageActionCreators.setShowTermsConditionsForm();
  },

  render: function () {
    return (
    <div>	
	    <div className="col-xs-6 col-xs-offset-3">	
			<div className="rounded-box">
				<div className="rounded-box input-div">
					<input type="text" placeholder="Name (as shown on card)" />
				</div>
				<div className="rounded-box input-div">
					<div className="dropdown">
			            <button className="btn btn-default dropdown-toggle" type="button" id="dropdown-card-type" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
			              <span className="white-text">Card Type</span>
			              <span className="caret"></span>
			            </button>
			            <ul className="dropdown-menu" aria-labelledby="dropdown-card-type">
			              <li><a href="#">Visa</a></li>
			              <li><a href="#">Visa Debit</a></li>
			              <li><a href="#">American Express</a></li>
			              <li><a href="#">Maestro</a></li>
			              <li><a href="#">Mastercard</a></li>
			            </ul>
			        </div>
				</div>
				<div className="rounded-box input-div">
					<input type="text" placeholder="Card Number" />
				</div>
				<div className="rounded-box input-div">
					<input type="text" placeholder="Security Number (3-digit number)" />
				</div>
				<div className="rounded-box input-div">
					<h4>Expiry date</h4>
					<input type="text" placeholder="Day" />
					<input type="text" placeholder="Month"/>
					<input type="text" placeholder="Year"/>
				</div>
				<div className="col-xs-3 col-xs-offset-3 terms-conditions-message">
					You must accept the <a onClick={this.handleTermsConditionsLinkClickEvent}>terms and conditions</a>
				</div>
				<div className="col-xs-3 accept-message">
					I Accept <input type="checkbox" />
				</div>
			</div>
		</div>
	</div>	
    );
  }
});

module.exports = CardDetails;