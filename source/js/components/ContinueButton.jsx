var React = require('react');

var ContinueButton = React.createClass({
  render: function () {
    return (
    <div className="col-xs-3 right">	
		<div className="rounded-box">
			<span><strong>Continue to decorations</strong></span><br />
			<img className="arrow-button" src="../source/images/forward.png" />
		</div>
	</div>	
    );
  }
});

module.exports = ContinueButton;