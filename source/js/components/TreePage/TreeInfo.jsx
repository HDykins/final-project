var React = require('react');
var FactList = require('./FactList.jsx');
var TreeDescription = require('./TreeDescription.jsx');

var TreeInfo = React.createClass({
  render: function () {
    return (
	<div className="rounded-box">
		<div className="col-xs-4">
			<h4>Tree Details</h4>
			<FactList />
		</div>
		<div className="col-xs-8">
			<TreeDescription />
		</div>	
	</div>
	);
  }
});

module.exports = TreeInfo; 