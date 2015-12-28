var React = require('react');

var BackButton = React.createClass({
  render: function () {
    return (
    <div className="col-xs-3">	
		<div className="rounded-box">
			<span><strong>Decorate Tree</strong></span><br />
			<img className="arrow-button" src="../source/images/back.png" />
		</div>
	</div>
    );
  }
});

module.exports = BackButton;