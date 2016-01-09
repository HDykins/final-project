var React = require('react');
var StateStore = require('../stores/StateStore.js');
var DecorationsPageActionCreators = require('../actions/DecorationsPageActionCreators.js');

var Header1 = React.createClass({

  handleNoDecorationsButtonClickEvent: function () {
  	event.preventDefault();
    DecorationsPageActionCreators.setCurrentTotalDecorationsPriceToZero();
    DecorationsPageActionCreators.clearSelectedDecorationsList();
    DecorationsPageActionCreators.sumAllPrices();
    DecorationsPageActionCreators.changeToDeliveryPage();
  },

  render: function () {

    var currentPage = StateStore.getCurrentPage();  

    return (
	<div className="row rounded-box">
		<h1>{this.props.label}</h1>
		{currentPage === "DECORATIONS_PAGE" ? <button onClick={this.handleNoDecorationsButtonClickEvent} className="btn">No Decorations</button> : null}
	</div>
    );
  }
});

module.exports = Header1;


