var React = require('react');
var SignInFormActionCreators = require('../actions/SignInFormActionCreators.js');

var RegisterForm = React.createClass({

  handleXButtonClickEvent: function () {
  	event.preventDefault();

    SignInFormActionCreators.setHideRegisterForm();
  },

  render: function () {
    return (
	<div className="transparent col-xs-8 register-form">
		<div className="rounded-box">
			<h2>Register</h2>
		</div>
		<button onClick={this.handleXButtonClickEvent} className="btn btn-default x-button">X</button>
		<div className="rounded-box">
			<input className="registration-input" placeholder="Email" />
		</div>
		<div className="rounded-box">
			<input className="registration-input" placeholder="Retype email" />
		</div>
		<div className="rounded-box">
			<input className="registration-input" placeholder="Password" />
		</div>
		<div className="rounded-box">
			<input className="registration-input" placeholder="Retype password" />
		</div>
		<div className="rounded-box">
			<input className="registration-input" placeholder="Phone number" />
		</div>
		<div className="col-xs-6 col-xs-offset-3">
			<div className="rounded-box">
				<p>Password must be between 6-16 characters and contain at least one number</p>
			</div>
		</div>
		<div className="col-xs-12">
			<button className="btn important-button btn-success">Register</button>
			<br /><br />
		</div>	
	</div>
    );
  }
});

module.exports = RegisterForm;