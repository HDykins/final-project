var React = require('react');
var NavBar = require('../NavBar.jsx');
var PopUpStore = require('../../stores/PopUpStore.js');
var SignInForm = require('../SignInForm.jsx');
var RegisterForm = require('../RegisterForm.jsx');
var SignInPageActionCreators = require('../../actions/SignInPageActionCreators.js');

var SignInPage = React.createClass({

  getInitialState: function () {
      return {
        isRegisterFormVisible: PopUpStore.getRegisterFormIsVisible()
      };
  },

  updateState: function () {
      this.setState(
      {
        isRegisterFormVisible: PopUpStore.getRegisterFormIsVisible()
      });
  },

  componentDidMount: function () {
      PopUpStore.addChangeListener(this.updateState);
  },

  componentWillUnmount: function () {
      PopUpStore.removeChangeListener(this.updateState);
  },    

  handleBuildTreeAsGuestButtonClickEvent: function () {
    event.preventDefault();

    SignInPageActionCreators.changeToTreePage();
  },

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
              <button onClick={this.handleBuildTreeAsGuestButtonClickEvent} className="btn important-button btn-success">Build tree</button>
            </div>
            {this.state.isRegisterFormVisible ? <RegisterForm /> : null}
      		</div>
      	</div>
    );
  }
});

module.exports = SignInPage;