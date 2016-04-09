var React = require('react');
var NavBar = require('../NavBar.jsx');
var PopUpStore = require('../../stores/PopUpStore.js');
var ThanksMessage = require('./ThanksMessage.jsx');
var SignInForm = require('../SignInForm.jsx');
var Header1 = require('../Header1.jsx');
var SocialMedia = require('./SocialMedia.jsx');
var RegisterForm = require('../RegisterForm.jsx');
var Footer = require('../Footer.jsx');

var ThanksPage = React.createClass({

  getInitialState: function () {
      return {
        isRegisterFormVisible: PopUpStore.getRegisterFormIsVisible()
      };
  },

  updateState: function () {
      this.setState({
        isRegisterFormVisible: PopUpStore.getRegisterFormIsVisible()
      });
  },

  componentDidMount: function () {
      PopUpStore.addChangeListener(this.updateState);
  },

  componentWillUnmount: function () {
      PopUpStore.removeChangeListener(this.updateState);
  },    

  render: function () {
    return (
    	<div className="container-fluid grey-background">
        	<NavBar />
        	<div className="container">
        		<div className="row">
              <ThanksMessage />
	        	</div>	
	        	<div className="row">
              <SignInForm />
	        	</div>
            <div className="row">
              <Header1 label="Do you want to share your order details" />
              <SocialMedia />
            </div>
            <div className="row">
              {this.state.isRegisterFormVisible ? <RegisterForm /> : null}
            </div>
      		</div>
          <Footer />
      	</div>
    );
  }
});

module.exports = ThanksPage;