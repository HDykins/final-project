var React = require('react');
var TreeIcon = require('./TreeIcon.jsx');

var TreeIcons = React.createClass({
  render: function () {
    return (
	<div className="row">
		<TreeIcon />
		<TreeIcon />
		<TreeIcon />
		<TreeIcon />
	</div>
    );
  }
});

module.exports = TreeIcons;

