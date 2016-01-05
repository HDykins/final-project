var React = require('react');
var DeliveryPageActionCreators = require('../../actions/DeliveryPageActionCreators.js');
var CurrentDeliveryUserDetailsStore = require('../../stores/CurrentDeliveryUserDetailsStore.js');

var PostCode = React.createClass({

  handleFindButtonClickEvent: function () {
  	event.preventDefault();
  	DeliveryPageActionCreators.setPostCode()
  	console.log(CurrentDeliveryUserDetailsStore.getCurrentPostCode());
  },

  render: function () {
    return (
    <div className="col-xs-6 col-xs-offset-3">	
	   	<div className="rounded-box">
			<input className="postcode-input" type="text" placeholder="Please input your postcode"/>
			<button onClick={this.handleFindButtonClickEvent} className="btn">Find</button>
		</div>
	</div>
    );
  }
});

module.exports = PostCode;