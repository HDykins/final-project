var React = require('react');

var TreeIcon = React.createClass({
  render: function () {
    return (
	<div className="col-xs-3">
		<div id="tree-icon" className="rounded-box">
			<img src="../source/images/tree-photos/norwegian-spruce.jpg" className="tree-icon-image" />
			<div id="tree-price" className="tree-price">
				£20-40
			</div>
			<div id="tree-name" className="tree-name">
				Norwegian Spruce
			</div>
		</div>
	</div>
    );
  }
});

module.exports = TreeIcon;

