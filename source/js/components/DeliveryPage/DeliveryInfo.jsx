var React = require('react');

var DeliveryInfo = React.createClass({
  render: function () {
    return (
	<div>
		<div className="col-xs-4">
			<div className="rounded-box">
				<span><h3>Additional delivery information</h3></span>
			</div>
			<div className="rounded-box">
				<p>Beware of Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
			</div>
		</div>
		<div className="col-xs-8">
			<div className="rounded-box">
				<div className="row">
					<div className="col-xs-4">
						<div className="rounded-box">
							Next day delivery<br />
							(If ordered before 3pm)<br />
							£15
						</div>
					</div>
					<div className="col-xs-4">
						<div className="rounded-box">
							1-5 days<br />
							<br />
							£6					
						</div>
					</div>
					<div className="col-xs-4">
						<div className="rounded-box">
							5-10 days<br />
							<br />
							£3					
						</div>
					</div>
				</div>		
			</div>
			<div className="rounded-box">
				<h3>Fitted and decorated by our staff? <span className="price">+£15</span></h3>
				<input type="checkbox" size="width:20px" />
			</div>
		</div>
	</div>
    );
  }
});

module.exports = DeliveryInfo;

