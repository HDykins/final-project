var React = require('react');
var TreePageActionCreators = require('../actions/TreePageActionCreators.js');
var StateStore = require('../stores/StateStore.js');

var ContinueButton = React.createClass({

  handleContinueButtonClickEvent: function () {
  	event.preventDefault();
    console.log(StateStore.getCurrentPage());
  	if (StateStore.getCurrentPage() === 'TREE_PAGE') {
  		TreePageActionCreators.changeToDecorationsPage();
  	} 
    // else if (StateStore.getCurrentPage() === 'DECORATIONS_PAGE') {
    //   TreePageActionCreators.changeToDecorationsPage();
    // } 
  },

  render: function () {
    return (
    <div onClick={this.handleContinueButtonClickEvent} className="col-xs-3 right">	
		<div className="rounded-box">
			<span><strong>Continue to decorations</strong></span><br />
			<img className="arrow-button" src="../source/images/forward.png" />
		</div>
	</div>	
    );
  }
});

module.exports = ContinueButton;