var React = require('react');
var NavBar = require('../NavBar.jsx');
var ThanksMessage = require('./ThanksMessage.jsx');
var SignInForm = require('../SignInForm.jsx');
var Header1 = require('../Header1.jsx');
var SocialMedia = require('./SocialMedia.jsx');
var RegisterForm = require('../RegisterForm.jsx');

var ThanksPage = React.createClass({

  render: function () {
    return (
    	<div className="container-fluid">
        	<NavBar />
        	<div className="container">
        		<div className="row">
              <ThanksMessage />
	        	</div>	
	        	<div className="row">
              <SignInForm />
	        	</div>
            <div className="row">
              <Header1 />
              <SocialMedia />
            </div>
            <div className="row">
              <RegisterForm />
            </div>
      		</div>
      	</div>
    );
  }
});

module.exports = ThanksPage;