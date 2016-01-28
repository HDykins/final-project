var React = require('react');
var DeliveryPageActionCreators = require('../../actions/DeliveryPageActionCreators.js');
var CurrentDeliveryUserDetailsStore = require('../../stores/CurrentDeliveryUserDetailsStore.js');
var AuthenticationService = require('../../services/authentication.js');

var PostCode = React.createClass({

  handleFindButtonClickEvent: function () {
  	event.preventDefault();
    AuthenticationService.getPostCode(this.refs.postcode.value, function handleGetDetailsFromDetails(error, response) {
          DeliveryPageActionCreators.setDeliveryAddressDetails(response)
          console.log(CurrentDeliveryUserDetailsStore.getDeliveryAddressDetails());
      });

  },

  render: function () {
    return (
    <div className="col-xs-6 col-xs-offset-3">	
	   	<div>
			<input className="postcode-input" type="text" ref="postcode" placeholder="Please input your postcode"/>
			<button onClick={this.handleFindButtonClickEvent} className="btn btn-option">Find</button>
		</div>
	</div>
    );
  }
});

module.exports = PostCode;