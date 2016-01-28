var React = require('react');
var SignInFormActionCreators = require('../actions/SignInFormActionCreators.js');
var AuthenticationService = require('../services/authentication.js');
var StateStore = require('../stores/StateStore.js');
var OrdersStore = require('../stores/OrdersStore.js');
var UserSignInDetailsStore = require('../stores/UserSignInDetailsStore.js');
var HashID = require ('../services/HashID');

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
  	console.log(this.validateRegisterFields());

    SignInFormActionCreators.setHideRegisterForm();
  },

  validateRegisterFields: function () {

	function validateEmail(email) {
	var emailInput = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return emailInput.test(email);
	}

	function validatePassword(password) {
	  var passwordInput = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,16}$/;
	  return passwordInput.test(password);
	}

	function validateUKPhoneNumber(phoneNumber) {
	  var phoneNumberInput = /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/;
	return phoneNumberInput.test(phoneNumber);
	}

	// console.log("email: " + validateEmail(this.refs.newEmail.value));
	// console.log("password " + validatePassword(this.refs.newPassword.value));
	// console.log("phoneNumberUK " + validateUKPhoneNumber(this.refs.phoneNumber.value));
	// console.log("aaaaallll o it " + validateEmail(this.refs.newEmail.value) && 
 //  		validatePassword(this.refs.newPassword.value) && 
 //  		validateUKPhoneNumber(this.refs.phoneNumber.value) && 
 //  		this.refs.newEmail.value === this.refs.retypeEmail.value && 
 //  		this.refs.newPassword.value === this.refs.retypePassword.value);

  	if (validateEmail(this.refs.newEmail.value) && 
  		validatePassword(this.refs.newPassword.value) && 
  		validateUKPhoneNumber(this.refs.phoneNumber.value) && 
  		this.refs.newEmail.value === this.refs.retypeEmail.value && 
  		this.refs.newPassword.value === this.refs.retypePassword.value) {
		return true;
  	}
  	else {
  		return false;
  	}
  },

  handleUserRegisterFormSubmit: function () {

  	if (this.validateRegisterFields) {
  		var id = HashID.generate();
  		console.log(id)
	    AuthenticationService.register(this.refs.newEmail.value, this.refs.newPassword.value, this.refs.phoneNumber.value, id, function handleUserRegister(error, response) {

	      if (error) {
	        this.showRegisterFailMessage('Failed to register. Email may be in use');
	        return;
	      }

			AuthenticationService.signIn(this.refs.newEmail.value, this.refs.newPassword.value, function handleUserSignIn(error, response) {

				if (error) {
				    console.log('Cant sign in');
				    return;
				}

				SignInFormActionCreators.setUserAuthenticationToken(response.token);
				SignInFormActionCreators.setCurrentUserId(response.id);
				SignInFormActionCreators.setSignedInStatusToTrue();

				this.hideRegisterFailMessage();
				this.showRegisterSuccessMessage('Successfully registered');

				console.log("Signed in as well");

				if (StateStore.getCurrentPage() === "THANKS_PAGE") {

					console.log(UserSignInDetailsStore.getCurrentToken());

					AuthenticationService.assignOrderToUser(OrdersStore.getCurrentOrderId(), UserSignInDetailsStore.getCurrentUserId(), UserSignInDetailsStore.getCurrentToken(), function handleUserSignIn(error, response) {

						if (error) {
						  console.log("No");
						  // this.hideSignInSuccessMessage();
						  // this.showSignInFailMessage('Failed to log in. Check email and password');
						  return;
						}

						console.log("OrderAssignedHopefully");

					}.bind(this));		
				}
			}.bind(this));

	    }.bind(this));
	} else {
		console.log("no dice");
	}
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
				<input className="registration-input" ref="retypeEmail" placeholder="Retype email" />
			</div>
			<div className="rounded-box">
				<input className="registration-input" type="password" ref="newPassword" placeholder="Password" />
			</div>
			<div className="rounded-box">
				<input className="registration-input" type="password" ref="retypePassword" placeholder="Retype password" />
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