var React = require('react');

var LargeTreeIcon = React.createClass({
  render: function () {
    return (
	<div className="rounded-box">
		<img src="../source/images/tree-photos/norwegian-spruce.jpg" className="tree-icon-image-large" />
	</div>
    );
  }
});

module.exports = LargeTreeIcon;

