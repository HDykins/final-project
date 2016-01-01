var React = require('react');

var CollectOrDeliver = React.createClass({
  render: function () {
    return (
    <div>
		<button className="btn important-button">Collect</button>
		<button className="btn important-button">Deliver</button>
	</div>
    );
  }
});

module.exports = CollectOrDeliver;