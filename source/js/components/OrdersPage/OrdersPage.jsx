var React = require('react');
var NavBar = require('../NavBar.jsx');
var OrdersStore = require('../../stores/OrdersStore.js');
var PopUpStore = require('../../stores/PopUpStore.js');
var Header1 = require('../Header1.jsx');
var OrderSummary = require('../OrderSummary.jsx');
var OrderOptionsButtons = require('./OrderOptionsButtons.jsx');
var OrderCancellationConfirmation = require('./OrderCancellationConfirmation.jsx');

var OrdersPage = React.createClass({

  getInitialState: function () {
    return {
      isCancellationFormVisible: PopUpStore.getCancellationFormIsVisible()
    };
  },

  updateState: function () {
    this.setState(
    {
      isCancellationFormVisible: PopUpStore.getCancellationFormIsVisible()
    });
  },

  componentDidMount: function () {
    PopUpStore.addChangeListener(this.updateState);
  },

  componentWillUnmount: function () {
    PopUpStore.removeChangeListener(this.updateState);
  },

  createOrders: function () {
    var orders = OrdersStore.getOrdersArray().map(function (orderObject) {
      return (
        <div key={Math.random()} className="row">
          <OrderSummary key={orderObject.id} order={orderObject.userChoices} />
          <OrderOptionsButtons key={orderObject._id} />
        </div>
      );
    });
    return orders;
  },

  render: function () {
    return (
    	<div className="container-fluid grey-background">
        	<NavBar />
        	<div className="container">
        		<div className="row">
              <Header1 label="Order History"/>
	        	</div>	
            <div className="rounded-box">
                {this.createOrders()}
	        	</div>
              {this.state.isCancellationFormVisible ? <OrderCancellationConfirmation /> : null}
      		</div>
      	</div>
    );
  }
});

module.exports = OrdersPage;