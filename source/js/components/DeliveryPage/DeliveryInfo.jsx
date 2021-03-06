var React = require('react');
var DeliveryPageActionCreators = require('../../actions/DeliveryPageActionCreators.js');
var TotalPriceStore = require('../../stores/TotalPriceStore.js');
var CurrentDeliveryUserDetailsStore = require('../../stores/CurrentDeliveryUserDetailsStore.js');

var DeliveryInfo = React.createClass({

  handleDecorationInstallationChangeEvent: function () {
  	DeliveryPageActionCreators.toggleDecorationInstallationServiceSelection();
  	DeliveryPageActionCreators.sumAllPrices()
  },

  handleAdditionalInformationTextarea: function () {
  	DeliveryPageActionCreators.setAdditionalInformation(this.refs.information.value);
  },

  render: function () {
    return (
    <div>	
		<div className="row">
			<div className="col-xs-12">
				<div>
					<div className="row">
						<div className="col-xs-4">
							<div className={CurrentDeliveryUserDetailsStore.getDeliveryOptionPrice() === 15 ? "rounded-box highlight" : "rounded-box"}>
								Next day delivery<br />
								(If ordered before 3pm)<br />
								£15
							</div>
						</div>
						<div className="col-xs-4">
							<div className={CurrentDeliveryUserDetailsStore.getDeliveryOptionPrice() === 6 ? "rounded-box highlight" : "rounded-box"}>
								1-5 days<br />
								<br />
								£6					
							</div>
						</div>
						<div className="col-xs-4">
							<div className={CurrentDeliveryUserDetailsStore.getDeliveryOptionPrice() === 3 ? "rounded-box highlight" : "rounded-box"}>
								6+ days<br />
								<br />
								£3					
							</div>
						</div>
					</div>		
				</div>
			</div>
		</div>
		<div className="row">		
			<div className="col-xs-8 col-xs-offset-2">
				<div>
					<h3>Fitted and decorated by our staff? <span className="price">+£15</span></h3>
					<input onChange={this.handleDecorationInstallationChangeEvent} type="checkbox" checked={CurrentDeliveryUserDetailsStore.getDecorationInstallationSelectionStatus() ? "checked" : null} size="width:20px" />
				</div>
			</div>
		</div>	
		<div className="row">
			<h3>Additional delivery information</h3>
		</div>
		<div className="row">		
			<div className="col-xs-4 col-xs-offset-4">
				<div>
					<p><textarea onChange={this.handleAdditionalInformationTextarea} ref="information" value={CurrentDeliveryUserDetailsStore.getAdditionalInformation()} placeholder="Beware of the dog, mobile number etc."></textarea></p>
				</div>
			</div>
		</div>	
	</div>	
    );
  }
});

module.exports = DeliveryInfo;

