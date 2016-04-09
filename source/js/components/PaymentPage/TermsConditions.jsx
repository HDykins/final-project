var React = require('react');
var PaymentPageActionCreators = require('../../actions/PaymentPageActionCreators.js');

var TermsConditions = React.createClass({

  handleXButtonClickEvent: function () {
  	event.preventDefault();

    PaymentPageActionCreators.setHideTermsConditionsForm();
  },  

  render: function () {
    return (
    <div className="col-xs-8 transparent terms-conditions">
    	<button onClick={this.handleXButtonClickEvent} className="btn btn-default x-button">X</button>
		<div className="rounded-box">
			<h2>Terms & Conditions</h2>	
		</div>
		<div className="rounded-box">
			<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>	
		</div>
	</div>
    );
  }
});

module.exports = TermsConditions;