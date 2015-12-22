var React = require('react');

var HeightCategoryBox = React.createClass({
  render: function () {
    return (
	<div className="rounded-box">
		<div className="rounded-box no-highlight">
			<h4>
				Small
			</h4>
			<div>
				Under 4ft
			</div>
			<div>
				Min Price Specified <span>(£20)</span>
			</div>
		</div>
		<div className="rounded-box no-highlight">
			<h4>
				Medium
			</h4>
			<div>
				3 - 9ft
			</div>
			<div>
				Variable price <span>(£24)</span>
			</div>
		</div>
		<div className="rounded-box no-highlight">
			<h4>
				Large
			</h4>
			<div>
				Over 9ft
			</div>
			<div>
				Max Price Specified <span>(£40)</span>
			</div>
		</div>
	</div>
    );
  }
});

module.exports = HeightCategoryBox;