var React = require('react');
var TreeInformationStore = require('../stores/TreeInformationStore.js');
var CurrentDecorationsUserDetailsStore = require('../stores/CurrentDecorationsUserDetailsStore.js');
var CurrentDeliveryUserDetailsStore = require('../stores/CurrentDeliveryUserDetailsStore.js');
var TotalPriceStore = require('../stores/TotalPriceStore.js');

var OrderSummary = React.createClass({

  addDecorationToList: function () {
  	var decorationsToAdd = CurrentDecorationsUserDetailsStore.getListOfSelectedDecorations().map(
		function renderDecorationListInCostBox(name) {
			return (
				<li key={name}><span className="price">{CurrentDecorationsUserDetailsStore.getDecorationDescriptions()[name]}: </span><span className="price">{'£' + CurrentDecorationsUserDetailsStore.getDecorationPrice()[name]}</span></li>
			);
		}
	);
	return decorationsToAdd;
  },

  render: function () {
    return (
	<div>
		<div className="col-xs-6">	
			<div className="rounded-box">
				<div className="col-xs-6">
					<h3>Rundown of costs</h3>
					<h4>Tree: {TreeInformationStore.getCurrentTreeView()}<span className="price">{"+£" + TreeInformationStore.getCurrentPrice()}</span></h4>
					<ul className="list-unstyled">
						<li>Height: 4ft</li>
						<li>Width: ~3ft</li>
					</ul>				
					<h4>Services:<span className="price">{ "+£" + CurrentDeliveryUserDetailsStore.getCurrentTotalDeliveryPrice()}</span></h4>
					<ul className="list-unstyled">
						<li>Delivery: <span className="price">{ "+£" + CurrentDeliveryUserDetailsStore.getDeliveryOptionPrice()}</span></li>
						{CurrentDeliveryUserDetailsStore.getDecorationInstallationSelectionStatus() ? <li>Fitted and decorated: <span className="price"> +£15</span></li> : null}
					</ul>
				</div>
				<div className="col-xs-6">
					<h4>Decorations:<span className="price">{ "+£" + CurrentDecorationsUserDetailsStore.getCurrentTotalDecorationsPrice()}</span></h4>
					<ul className="list-unstyled">
						{this.addDecorationToList()}
					</ul>				
				</div>
			</div>
		</div>
		<div className="col-xs-6">
			<div className="rounded-box">
				<h2>Final and total Price:</h2>
				<span className="price total-price">£{TotalPriceStore.getCurrentOverallPrice()}</span>
			</div>
			<div className="rounded-box">
				<h2>Estimated delivery date:</h2>
				<span className="delivery-date">{CurrentDeliveryUserDetailsStore.getCurrentDaySelection()}th December</span>
			</div>
		</div>
	</div>
    );
  }
});

module.exports = OrderSummary;

