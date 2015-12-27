var React = require('react');

var ContinueButton = React.createClass({
  render: function () {
    return (
    <div className="col-xs-3 right">	
		<div className="rounded-box">
			Continue to decorations
			<img src="http://www.guitarkevin.com/images/TinyPlayButton.bmp" />
		</div>
	</div>	
    );
  }
});

module.exports = ContinueButton;