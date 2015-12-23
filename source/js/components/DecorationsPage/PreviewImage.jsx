var React = require('react');

var PreviewImage = React.createClass({
  render: function () {
    return (
   	<div className="col-xs-6">
		<div className="rounded-box">
			<img src="http://www.guitarkevin.com/images/TinyPlayButton.bmp" />
			<img src="http://www.guitarkevin.com/images/TinyPlayButton.bmp" />
			<img src="http://www.guitarkevin.com/images/TinyPlayButton.bmp" />
		</div>
	</div>
    );
  }
});

module.exports = PreviewImage;