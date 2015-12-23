var React = require('react');

var DecorationsCostBox = React.createClass({
  render: function () {
    return (
	<div className="row rounded-box">
		<ul>
			<li>Example - <span className="price">£24</span></li>
		</ul>
		<em>Total Price: <span className="price">£36</span></em>
	</div>
    );
  }
});

module.exports = DecorationsCostBox;
