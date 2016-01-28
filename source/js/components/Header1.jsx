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
  <div>    
    <hr />
  	<div className="row">
  		<h1>{this.props.label}</h1>
      {currentPage ==="DELIVERY_PAGE" ? <h3>10% off the total price price when you collect!</h3>: null}
  		{currentPage === "DECORATIONS_PAGE" ? <button onClick={this.handleNoDecorationsButtonClickEvent} className="btn btn-option">No Decorations</button> : null}
  	</div>
    <hr />
  </div>
    );
  }
});

module.exports = Header1;


