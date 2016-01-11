var React = require('react');
var SignInFormActionCreators = require('../actions/SignInFormActionCreators.js');
var AuthenticationService = require('../services/authentication.js');
var StateStore = require('../stores/StateStore.js');

var RegisterForm = React.createClass({

  getInitialState: function () {
  	return {
  		failMessage: null,
  		successMessage: null
  	};
  },

  showRegisterFailMessage: function (message) {
  	this.setState({
  		failMessage: message
  	});
  },

  showRegisterSuccessMessage: function (message) {
  	this.setState({
  		successMessage: message
  	});
  },

  hideRegisterFailMessage: function (message) {
  	this.setState({
  		failMessage: null
  	});
  },

  handleXButtonClickEvent: function () {
  	event.preventDefault();

    SignInFormActionCreators.setHideRegisterForm();
  },

  handleUserRegisterFormSubmit: function () {
    AuthenticationService.register(this.refs.newEmail.value, this.refs.newPassword.value, this.refs.phoneNumber.value, function handleUserRegister(error, response) {

      if (error) {
        this.showRegisterFailMessage('Failed to register. Email may be in use');
        return;
      }

      SignInFormActionCreators.setUserAuthenticationToken(response.token);
      SignInFormActionCreators.setSignedInStatusToTrue();
      this.hideRegisterFailMessage();
      this.showRegisterSuccessMessage('Successfully registered');

    }.bind(this));
  },

  render: function () {
    return (
	<div className="transparent col-xs-8 register-form">
		<div className="rounded-box">
			<h2>Register</h2>
		</div>
		<button onClick={this.handleXButtonClickEvent} className="btn btn-default x-button">X</button>
		{!this.state.successMessage ?
		<div>
			<div className="rounded-box">
				<p>Password must be between 6-16 characters and contain at least one number</p>
			</div>
			<div className="rounded-box">
				<input className="registration-input" ref="newEmail" placeholder="Email" />
			</div>
			<div className="rounded-box">
				<input className="registration-input" placeholder="Retype email" />
			</div>
			<div className="rounded-box">
				<input className="registration-input" ref="newPassword" placeholder="Password" />
			</div>
			<div className="rounded-box">
				<input className="registration-input" placeholder="Retype password" />
			</div>
			<div className="rounded-box">
				<input className="registration-input" ref="phoneNumber" placeholder="Phone number" />
			</div>
			{this.state.failMessage ? 
				<div className="col-xs-8 col-xs-offset-2">
					<div className="rounded-box">
						<p className="red">{this.state.failMessage}</p>
					</div>
				</div>
			:null }
			<div className="col-xs-12">
				<button onClick={this.handleUserRegisterFormSubmit} className="btn important-button btn-success">Register</button>
				<br /><br />
			</div>
		</div>
		:
		<div>
			<div className="col-xs-8 col-xs-offset-2">
				<div className="rounded-box">
					<p>Thanks for registering, a confirmation of your order has been sent to your email</p>
				</div>
			</div>
			<div className="col-xs-12">
				{StateStore.getCurrentPage() === "SIGN_IN_PAGE" ? <button className="btn important-button btn-success">Continue to orders</button> : <button className="btn important-button btn-success">Continue</button>}
				<br /><br />
			</div>
		</div> }	
	</div>
    );
  }
});

module.exports = RegisterForm;