var React = require('react');

var CollectOrDeliver = React.createClass({
  render: function () {
    return (
    <div>
		<button className="btn btn-success important-button">Collect</button>
		<button className="btn btn-success important-button">Deliver</button>
	</div>
    );
  }
});

module.exports = CollectOrDeliver;