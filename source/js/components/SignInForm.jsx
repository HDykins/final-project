var React = require('react');
var StateStore = require('../stores/StateStore.js');
var SignInFormActionCreators = require('../actions/SignInFormActionCreators.js');
var AuthenticationService = require('../services/authentication.js');


var SignInForm = React.createClass({

  getInitialState: function () {
  	return {
  		failMessage: null,
  		successMessage: null
  	};
  },	

  showSignInFailMessage: function (message) {
  	this.setState({
  		failMessage: message
  	});
  },

  showSignInSuccessMessage: function (message) {
  	this.setState({
  		successMessage: message
  	});
  },

  hideSignInFailMessage: function (message) {
  	this.setState({
  		failMessage: null
  	});
  },

  hideSignInSuccessMessage: function (message) {
  	this.setState({
  		successMessage: null
  	});
  },

  handleRegisterButtonClickEvent: function () {
  	event.preventDefault();

    SignInFormActionCreators.setShowRegisterForm();
  },

  handleUserSignInFormSubmit: function () {
    AuthenticationService.signIn(this.refs.email.value, this.refs.password.value, function handleUserSignIn(error, response) {

      if (error) {
      	this.hideSuccessMessage();
        this.showSignInFailMessage('Failed to log in. Check email and password');
        return;
      }

      SignInFormActionCreators.setUserAuthenticationToken(response.token);
      SignInFormActionCreators.setSignedInStatusToTrue();
      this.hideSignInFailMessage();
      this.showSuccessMessage('You are signed in');

    }.bind(this));
  },

  render: function () {
  var currentPage = StateStore.getCurrentPage();

    return (
	<div className="rounded-box" id="sign-in-form">
		{currentPage === "THANKS_PAGE" ? <div>
			<h3>Would you like the ability to review your order at a later time?</h3>
			<span>(You will need to sign in)</span>
		</div> : null}
		<h4>Sign-in form</h4>
		<div className="col-xs-8 col-xs-offset-2">
			<div className="rounded-box">
				<div className="col-xs-6">
					<div className="rounded-box">
						<input type="text" placeholder="Email" ref="email" />
					</div>
					<br />
					{this.state.successMessage ?
					<div className="rounded-box">
						<span className="red">{this.state.successMessage}</span>
					</div>
				    : null}
				    {this.state.failMessage ?
					<div className="rounded-box">
						<span className="red">{this.state.failMessage}</span>
					</div>
				    :null }
				</div>
				<div className="col-xs-6">
					<div className="rounded-box">
						<input type="text" placeholder="Password" ref="password" />
					</div>				
					<button onClick={this.handleUserSignInFormSubmit} className="important-button btn btn-success">Sign-in</button>
				</div>

			</div>
		</div>
		<div className="col-xs-12">
			<h3>Don't have an account?</h3>
			<button onClick={this.handleRegisterButtonClickEvent} className="important-button btn btn-success">Register</button>
			<br /><br />
		</div>	
	</div>
    );
  }
});

module.exports = SignInForm;