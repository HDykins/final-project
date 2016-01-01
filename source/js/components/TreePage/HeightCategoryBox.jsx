var React = require('react');

var HeightCategoryBox = React.createClass({
  render: function () {
    return (
	<div className="rounded-box">
		<div className="col-xs-4">
			<div className="rounded-box no-highlight">
				<h4>
					Small
				</h4>
				<div>
					<span>Under 4ft</span>
				</div>
				<div>
					Min Price Specified <span className="price">(£20)</span>
				</div>
			</div>
		</div>
		<div className="col-xs-4">
			<div className="rounded-box no-highlight">
				<h4>
					Medium
				</h4>
				<div>
					<span>3 - 9ft</span>
				</div>
				<div>
					Variable price <span className="price">(£24)</span>
				</div>
			</div>
		</div>
		<div className="col-xs-4">
			<div className="rounded-box no-highlight">
				<h4>
					Large
				</h4>
				<div>
					<span>Over 9ft</span>
				</div>
				<div>
					Max Price Specified <span className="price">(£40)</span>
				</div>
			</div>
		</div>
	</div>
    );
  }
});

module.exports = HeightCategoryBox;