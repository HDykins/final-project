var React = require('react');
var LogOutButton = require('./LogOutButton.jsx');
var StateStore = require('../stores/StateStore.js');
var UserSignInDetailsStore = require('../stores/UserSignInDetailsStore.js');
var OrdersStore = require('../stores/OrdersStore.js');
var SignInFormActionCreators = require('../actions/SignInFormActionCreators.js');
var AuthenticationService = require('../services/authentication.js');

var SignInForm = React.createClass({

  getInitialState: function () {
  	return {
  		failMessage: null,
  		successMessage: null,
      isSignedIn: UserSignInDetailsStore.getSignedInStatus()
  	};
  },

  updateState: function () {
    this.setState({
      isSignedIn: UserSignInDetailsStore.getSignedInStatus()
    });
  },

  componentDidMount: function () {
    UserSignInDetailsStore.addChangeListener(this.updateState);
  },


  componentWillUnmount: function () {
    UserSignInDetailsStore.removeChangeListener(this.updateState);
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

  hideSignInFailMessage: function () {
  	this.setState({
  		failMessage: null
  	});
  },

  hideSignInSuccessMessage: function () {
  	this.setState({
  		successMessage: null
  	});
  },

  handleRegisterButtonClickEvent: function () {
  	event.preventDefault();

    SignInFormActionCreators.setShowRegisterForm();
  },

  handleReviewOrdersButton: function () {
    SignInFormActionCreators.sendOrdersToStore();
    SignInFormActionCreators.changeToOrdersPage();
  },

  handleUserSignInFormSubmit: function () {

    if (StateStore.getCurrentPage() === "THANKS_PAGE") {

      AuthenticationService.signIn(this.refs.email.value, this.refs.password.value, function handleUserSignIn(error, response) {

        if (error) {
        	this.hideSignInSuccessMessage();
          this.showSignInFailMessage('Failed to log in. Check email and password');
          return;
        }

        SignInFormActionCreators.setUserAuthenticationToken(response.token);
        SignInFormActionCreators.setCurrentUserId(response.id);
        SignInFormActionCreators.setSignedInStatusToTrue();
        this.hideSignInFailMessage();
        this.showSignInSuccessMessage('You are signed in');
        // console.log(OrdersStore.getOrder());
        // console.log(UserSignInDetailsStore.getSignedInStatus());
        // console.log(UserSignInDetailsStore.getCurrentToken());

          AuthenticationService.assignOrderToUser(OrdersStore.getCurrentOrderId(), UserSignInDetailsStore.getCurrentUserId(), UserSignInDetailsStore.getCurrentToken(), function handleUserSignIn(error, response) {

        if (error) {
          console.log("No");
          // this.hideSignInSuccessMessage();
          // this.showSignInFailMessage('Failed to log in. Check email and password');
          return;
        }

        console.log("OrderAssignedHopefully");

        }.bind(this));
            

      }.bind(this));
    } else if (StateStore.getCurrentPage() === "SIGN_IN_PAGE") { 

    AuthenticationService.signIn(this.refs.email.value, this.refs.password.value, function handleUserSignIn(error, response) {

      if (error) {
        this.hideSignInSuccessMessage();
        this.showSignInFailMessage('Failed to log in. Check email and password');
        return;
      }

      SignInFormActionCreators.setUserAuthenticationToken(response.token);
      SignInFormActionCreators.setCurrentUserId(response.id);
      SignInFormActionCreators.setSignedInStatusToTrue();
      this.hideSignInFailMessage();
      this.showSignInSuccessMessage('You are signed in');

      SignInFormActionCreators.sendOrdersToStore();
      console.log(OrdersStore.getOrdersArray());
      // console.log(OrdersStore.getOrder());
      // console.log(UserSignInDetailsStore.getSignedInStatus());
      // console.log(UserSignInDetailsStore.getCurrentToken());
      }.bind(this));

    }

  },


  render: function () {
  var currentPage = StateStore.getCurrentPage();

  if (!UserSignInDetailsStore.getSignedInStatus()) { 
    return (   
  	<div className="rounded-box" id="sign-in-form">
  		{currentPage === "THANKS_PAGE" ? <div>
  			<h3>Would you like the ability to review your order at a later time?</h3>
  			<span>(You will need to sign in)</span>
  		</div> : null}
  		<h4>Sign-in form</h4>
  		<div className="col-xs-8 col-xs-offset-2">
  			<div>
  				<div className="col-xs-6">
  					<div>
  						<input type="text" placeholder="Email" ref="email" />
  					</div>
  					<br />
  				    {this.state.failMessage ?
  					<div>
  						<span className="red">{this.state.failMessage}</span>
  					</div>
  				    :null }
  				</div>
  				<div className="col-xs-6">
  					<div>
  						<input type="password" placeholder="Password" ref="password" />
  					</div>				
  					<button onClick={this.handleUserSignInFormSubmit} className="btn btn-success btn-lg">Sign-in</button>
  				</div>

  			</div>
  		</div>
  		<div className="col-xs-12">
  			<h3>Don't have an account?</h3>
  			<button onClick={this.handleRegisterButtonClickEvent} className="btn btn-success btn-lg">Register</button>
  			<br /><br />
  		</div> 
  	</div>
    );
  } else {
    return (  
      <div className="rounded-box" id="sign-in-form"><p>{this.state.successMessage}</p>
        <LogOutButton />
        <p>Your order comfirmation has been sent to your provided email address</p>
        <a onClick={this.handleReviewOrdersButton} href="#top" role="button" className="btn btn-success btn-lg">Review my orders</a>
      </div>
    );
  }
}
});

module.exports = SignInForm;