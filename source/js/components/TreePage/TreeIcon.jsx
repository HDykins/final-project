var React = require('react');

var TreeIcon = React.createClass({
  render: function () {
    return (
	<div className="col-xs-3">
		<div id="tree-icon" className="no-highlight">
			<img src="http://www.christmaswow.com/wp-content/uploads/2011/06/Miniature-Christmas-Trees.jpg" className="tree-icon-image" />
			<div id="tree-price">
				£20-40
			</div>
			<div id="tree-name">
				Norwegian Spruce
			</div>
		</div>
	</div>
    );
  }
});

module.exports = TreeIcon;

