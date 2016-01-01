var React = require('react');

var DecorationsCostBox = React.createClass({
  render: function () {
    return (
	<div className="rounded-box" id="decorations-cost-box">
		<ul className="list-unstyled">
			<li><span className="decorations-cost-box">Example - </span><span className="price decorations-cost-box">£24</span></li>
		</ul>
		<em className="decorations-cost-box">Total Price: </em><span className="price decorations-cost-box">£36</span>
	</div>
    );
  }
});

module.exports = DecorationsCostBox;
