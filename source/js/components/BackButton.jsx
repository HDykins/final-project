var React = require('react');

var BackButton = React.createClass({
  render: function () {
    return (
	<div className="rounded-box">
		Decorate Tree
		<img src="http://www.guitarkevin.com/images/TinyPlayButton.bmp" />
	</div>
    );
  }
});

module.exports = BackButton;