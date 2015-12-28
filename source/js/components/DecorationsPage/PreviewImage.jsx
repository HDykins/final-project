var React = require('react');

var PreviewImage = React.createClass({
  render: function () {
    return (
   	<div className="col-xs-6">
		<div className="rounded-box">
			<img className="photo-far" src="../source/images/tree-photos/silver-baubles-far.jpg" />
			<img className="photo-tree" src="../source/images/tree-photos/silver-baubles-tree.jpg" />
			<img className="photo-close" src="../source/images/tree-photos/silver-baubles-close.jpg" />
		</div>
	</div>
    );
  }
});

module.exports = PreviewImage;