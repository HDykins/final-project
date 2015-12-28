var React = require('react');

var OrderSummary = React.createClass({
  render: function () {
    return (
	<div className="rounded-box">
		<div className="col-xs-6">	
			<div className="rounded-box">
				<div className="col-xs-6">
					<h3>Rundown of costs</h3>
					<h4>Tree:<span className="price"> +£12</span></h4>
					<ul className="list-unstyled">
						<li>Height: 4ft</li>
						<li>Width: ~3ft</li>
					</ul>				
					<h4>Services:<span className="price"> +£21</span></h4>
					<ul className="list-unstyled">
						<li>Delivery: <span className="price"> +£6</span></li>
						<li>Fitted and decorated: <span className="price"> +£15</span></li>
					</ul>
				</div>
				<div className="col-xs-6">
					<h4>Decorations:<span className="price"> +£24</span></h4>
					<ul className="list-unstyled">
						<li>Baubbles Gold - 6 pack: <span className="price"> +£5</span></li>
						<li>Stars Gold - 8 pack: <span className="price"> +£4</span></li>
						<li>Glitter Balls - 6 pack: <span className="price"> +£3</span></li>
					</ul>				
				</div>
			</div>
		</div>
		<div className="col-xs-6">
			<div className="rounded-box">
				<h2>Final and total Price:</h2>
				<span className="price total-price">£57</span>
			</div>
			<div className="rounded-box">
				<h2>Estimated delivery date:</h2>
				<span className="delivery-date">15th December</span>
			</div>
		</div>
	</div>
    );
  }
});

module.exports = OrderSummary;

