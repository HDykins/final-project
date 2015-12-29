var React = require('react');
var NavBar = require('../NavBar.jsx');
var SignInForm = require('../SignInForm.jsx');
var RegisterForm = require('../RegisterForm.jsx');

var SignInPage = React.createClass({

  render: function () {
    return (
    	<div className="container-fluid grey-background">
        	<NavBar />
        	<div className="container">
        		<div className="row">
              <div className="rounded-box">
                <h2> You must sign-in to view your orders</h2>
              </div>
	        	</div>	
	        	<div className="row">
              <SignInForm />
	        	</div>
            <div className="row">
              <h3>Alternatively you can proceed to build your own tree as a guest!</h3>
              <button className="btn important-button btn-success">Build tree</button>
            </div>
            <RegisterForm />
      		</div>
      	</div>
    );
  }
});

module.exports = SignInPage;