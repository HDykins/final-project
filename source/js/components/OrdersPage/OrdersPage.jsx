var React = require('react');
var NavBar = require('../NavBar.jsx');
var Header1 = require('../Header1.jsx');
var OrderSummary = require('./OrderSummary.jsx');
var OrderOptionsButtons = require('./OrderOptionsButtons.jsx');
var OrderCancellationConfirmation = require('./OrderCancellationConfirmation.jsx');

var OrdersPage = React.createClass({

  render: function () {
    return (
    	<div className="container-fluid">
        	<NavBar />
        	<div className="container">
        		<div className="row">
              <Header1 />
	        	</div>	
	        	<div className="row">
              <div className="rounded-box">
                <OrderSummary />
                <OrderOptionsButtons />
              </div>
	        	</div>
            <div className="transparent">
              <OrderCancellationConfirmation />
            </div>
      		</div>
      	</div>
    );
  }
});

module.exports = OrdersPage;