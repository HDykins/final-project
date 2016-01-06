var React = require('react');
var CurrentDecorationsUserDetailsStore = require('../../stores/CurrentDecorationsUserDetailsStore.js');

var DecorationsCostBox = React.createClass({

  addDecorationToList: function () {
  	var decorationsToAdd = CurrentDecorationsUserDetailsStore.getListOfSelectedDecorations().map(
		function renderDecorationListInCostBox(name) {
			return (
				<li key={name}><span className="decorations-cost-box">{CurrentDecorationsUserDetailsStore.getDecorationDescriptions()[name]}: </span><span className="price decorations-cost-box">£{CurrentDecorationsUserDetailsStore.getDecorationPrice()[name]}</span></li>
			);
		}
	);
	return decorationsToAdd;
  },

  updateTotalPrice: function () {
  	return CurrentDecorationsUserDetailsStore.getCurrentTotalDecorationsPrice();
  },

  render: function () {
	return (
	<div className="rounded-box" id="decorations-cost-box">
		<ul className="list-unstyled">
			{this.addDecorationToList()}
		</ul>
		<em className="decorations-cost-box">Total price of decorations: </em><span className="price decorations-cost-box">£{this.updateTotalPrice()}</span>
	</div>
    );
  }
});

module.exports = DecorationsCostBox;
