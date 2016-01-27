var React = require('react');
var NavBar = require('../NavBar.jsx');
var OrdersStore = require('../../stores/OrdersStore.js');
var PopUpStore = require('../../stores/PopUpStore.js');
var Header1 = require('../Header1.jsx');
var OrderSummary = require('../OrderSummary.jsx');
var OrderOptionsButtons = require('./OrderOptionsButtons.jsx');
var OrderCancellationConfirmation = require('./OrderCancellationConfirmation.jsx');
var OrdersPageActionCreators = require('../../actions/OrdersPageActionCreators.js');


var selectedOrderId = null;

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
    OrdersStore.addChangeListener(this.updateState);
  },

  componentWillUnmount: function () {
    PopUpStore.removeChangeListener(this.updateState);
    OrdersStore.removeChangeListener(this.updateState);
  },

  createOrders: function () {
    var orders = OrdersStore.getOrdersArray().map(function (orderObject) {
      console.log('orderObject' + orderObject);
      return (
        <div key={Math.random()} className="row order-row">
          <OrderSummary key={orderObject.id} order={orderObject.userChoices} />
          <OrderOptionsButtons key={orderObject._id} order={orderObject} setOrderToBeChanged={this.setSelectedOrderId} />
        </div>
      );
    }.bind(this));
    return orders;
  },

  setSelectedOrderId: function (orderId) {
    selectedOrderId = orderId;
  },

  handleNewOrderClickEvent: function () {
    OrdersPageActionCreators.changeToTreePage();
  },

  render: function () {
    console.log(this.createOrders());
    return (
    	<div className="container-fluid grey-background">
        	<NavBar />
        	<div className="container">
        		<div className="row">
              <Header1 label="Order History"/>
	        	</div>	
            {this.createOrders().length === 0 ? 
            (<div className="rounded-box">  
              <p>You have no orders</p>
              <h3>Would you like to create a new order?</h3>
              <a onClick={this.handleNewOrderClickEvent} href="#top" role="button" className="btn btn-success bt-lg">Build tree</a>
            </div>) 
            : 
            (<div className="rounded-box">
              {this.createOrders()}
            </div>)
            }
          {this.state.isCancellationFormVisible ? <OrderCancellationConfirmation orderId={selectedOrderId} /> : null}
    		</div>
      </div>
    );
  }
});

module.exports = OrdersPage;