var React = require('react');

var TreeIcon = React.createClass({
  render: function () {
    return (
	<div className="col-xs-3">
		<div id="tree-icon" className="rounded-box">
			<div>
				<span id="tree-name" className="tree-name">Norwegian Spruce</span>
			</div>
			<img src="../source/images/tree-photos/norwegian-spruce.jpg" className="tree-icon-image" />
			<div>
				<span className="price tree-price" id="tree-price">£20-40</span>
			</div>
		</div>
	</div>
    );
  }
});

module.exports = TreeIcon;

