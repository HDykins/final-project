var React = require('react');
var CurrentDeliveryUserDetailsStore = require('../stores/CurrentDeliveryUserDetailsStore.js');
var SignInFormActionCreators = require('../actions/SignInFormActionCreators.js');
var UserSignInDetailsStore = require('../stores/UserSignInDetailsStore.js');

var LogOutButton = React.createClass({

  handleLogOutClickEvent: function () {
  	SignInFormActionCreators.setSignedInStatusToFalse();
  	console.log(UserSignInDetailsStore.getSignedInStatus());
  },


  render: function () {
    return (
<button onClick={this.handleLogOutClickEvent} className="btn-option btn-sm">Log Out</button>
    );
  }
});

module.exports = LogOutButton;