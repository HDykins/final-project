var React = require('react');
var NavBar = require('../NavBar.jsx');
var SignInForm = require('../SignInForm.jsx');
var RegisterForm = require('../RegisterForm.jsx');

var SignInPage = React.createClass({

  render: function () {
    return (
    	<div className="container-fluid">
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
              <button>Alternatively you can proceed to build your own tree as a guest!</button>
            </div>
            <RegisterForm />
      		</div>
      	</div>
    );
  }
});

module.exports = SignInPage;