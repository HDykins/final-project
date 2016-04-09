var React = require('react');
var StateStore = require('../stores/StateStore.js');
var TreeInformationStore = require('../stores/TreeInformationStore.js');
var CurrentDecorationsUserDetailsStore = require('../stores/CurrentDecorationsUserDetailsStore.js');
var CurrentDeliveryUserDetailsStore = require('../stores/CurrentDeliveryUserDetailsStore.js');
var TotalPriceStore = require('../stores/TotalPriceStore.js');
var moment = require('moment');

var OrderSummary = React.createClass({

  addDecorationToList: function () {
  	if (StateStore.getCurrentPage() === "ORDERS_PAGE") {
  		var decorationsToAdd = this.props.order.listOfSelectedDecorations.map(
			function renderDecorationListInCostBox(name) {
				return (
					<li key={name}><span className="price">{CurrentDecorationsUserDetailsStore.getDecorationDescriptions()[name]}: </span><span className="price">{'£' + CurrentDecorationsUserDetailsStore.getDecorationPrice()[name]}</span></li>
				);
			}
	);
	return decorationsToAdd;
	} else {
		var decorationsToAdd = CurrentDecorationsUserDetailsStore.getListOfSelectedDecorations().map(
			function renderDecorationListInCostBox(name) {
				return (
					<li key={name}><span className="price">{CurrentDecorationsUserDetailsStore.getDecorationDescriptions()[name]}: </span><span className="price">{'£' + CurrentDecorationsUserDetailsStore.getDecorationPrice()[name]}</span></li>
				);
			}
		);
	return decorationsToAdd;	
	}
  },

  render: function () {
	if (StateStore.getCurrentPage() === "ORDERS_PAGE") {
		return (
			<div className="row">
				<div className="col-xs-6">	
					<div>
						<div className="col-xs-6">
							<h3>Rundown of costs</h3>
							<h4>Tree: {this.props.order.tree}<span className="price">{" +£" + this.props.order.treePrice}</span></h4>
							<ul className="list-unstyled">
								<li>Height: {this.props.order.heightValue + "ft"}</li>
								<li>Width: {this.props.order.widthValue + "ft"}</li>
							</ul>				
							<h4>Services:<span className="price">{ " +£" + this.props.order.totalDeliveryPrice}</span></h4>
							<ul className="list-unstyled">
								<li>Delivery: <span className="price">{ " +£" + this.props.order.deliveryOptionPrice}</span></li>
								{this.props.order.decorationInstallation ? <li>Fitted and decorated: <span className="price">"+" + £15</span></li> : null}
							</ul>
						</div>
						<div className="col-xs-6">
							<h4>Decorations:<span className="price">{ " +£" + this.props.order.totalDecorationsPrice}</span></h4>
							<ul className="list-unstyled">
								{this.addDecorationToList()}
							</ul>				
						</div>
					</div>
				</div>
				<div className="col-xs-6">
					<div>
						<h2>Final and total Price:</h2>
						<span className="price total-price">{"£" + this.props.order.totalPrice}</span>
					</div>
					<div>
						<h2>Estimated delivery date:</h2>
						<span className="delivery-date">{moment().date(this.props.order.deliveryDay).format('Do')} {moment().month(this.props.order.deliveryMonth).format('MMMM')}</span>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="row">
				<div className="col-xs-6">	
					<div>
						<div className="col-xs-6">
							<h3>Rundown of costs</h3>
							<h4>Tree: {TreeInformationStore.getCurrentTreeView()}<span className="price">{" +£" + TreeInformationStore.getCurrentPrice()}</span></h4>
							<ul className="list-unstyled">
								<li>Height: {TreeInformationStore.getCurrentHeightValue() + "ft"}</li>
								<li>Width: {TreeInformationStore.getCurrentWidthValue() + "ft"}</li>
							</ul>				
							<h4>Services:<span className="price">{ " +£" + CurrentDeliveryUserDetailsStore.getCurrentTotalDeliveryPrice()}</span></h4>
							<ul className="list-unstyled">
								<li>Delivery: <span className="price">{ " +£" + CurrentDeliveryUserDetailsStore.getDeliveryOptionPrice()}</span></li>
								{CurrentDeliveryUserDetailsStore.getDecorationInstallationSelectionStatus() ? <li>Fitted and decorated: <span className="price"> +£15</span></li> : null}
							</ul>
						</div>
						<div className="col-xs-6">
							<h4>Decorations:<span className="price">{ " +£" + CurrentDecorationsUserDetailsStore.getCurrentTotalDecorationsPrice()}</span></h4>
							<ul className="list-unstyled">
								{this.addDecorationToList()}
							</ul>				
						</div>
					</div>
				</div>
				<div className="col-xs-6">
					<div>
						<h2>Final and total Price:</h2>
						<span className="price total-price">{"£" + TotalPriceStore.getCurrentOverallPrice()}</span>
					</div>
					<div>
						<h2>Estimated delivery date:</h2>
						<span className="delivery-date">{moment().date(CurrentDeliveryUserDetailsStore.getCurrentDaySelection()).format('Do')} {moment().month(CurrentDeliveryUserDetailsStore.getCurrentMonthSelection()).format('MMMM')}</span>
					</div>
				</div>
			</div>
    	);
	}
  }
});

module.exports = OrderSummary;

