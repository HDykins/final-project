var React = require('react');

var CollectionLocationDetails = React.createClass({
  render: function () {
    return (
   	<div className="col-xs-6">
		<div className="rounded-box">
			<h2>Collection Points</h2>
		</div>
		<div className="rounded-box">
			<div className="col-xs-4">
				40 Abbey Road<br/>Bush Hill Park<br/>Enfield
			</div>
			<div className="col-xs-4">
				Collection times: 9-5pm<br/>Monday-Friday
			</div>
			<div className="col-xs-4">
				Middlesex<br/>London<br/>EN12QN
			</div>
		</div>
		<div className="rounded-box">
			<div className="col-xs-4">
				41 Abbey Road<br/>Bush Hill Park<br/>Enfield
			</div>
			<div className="col-xs-4">
				Collection times: 9-5pm<br/>Monday-Friday
			</div>
			<div className="col-xs-4">
				Middlesex<br/>London<br/>EN12QN
			</div>
		</div>
		<div className="rounded-box">
			<div className="col-xs-4">
				42 Abbey Road<br/>Bush Hill Park<br/>Enfield
			</div>
			<div className="col-xs-4">
				Collection times: 9-5pm<br/>Monday-Friday
			</div>
			<div className="col-xs-4">
				Middlesex<br/>London<br/>EN12QN
			</div>
		</div>
	</div>
    );
  }
});

module.exports = CollectionLocationDetails;