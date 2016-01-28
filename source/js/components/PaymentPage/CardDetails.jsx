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
	    <div className="col-xs-8 col-xs-offset-2">	
			<div>
				<div className="rounded-box input-div">
					<input type="text" placeholder="Name (as shown on card)" />
				</div>
				<div className="rounded-box input-div">
					<select name="cards" className="form-control btn small-button dropdown-toggle" data-width="fit">
			              <option>Visa</option>
			              <option>Visa Debit</option>
			              <option>American Express</option>
			              <option>Maestro</option>
			              <option>Mastercard</option>
					</select>
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