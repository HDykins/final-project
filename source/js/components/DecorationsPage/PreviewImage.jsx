var React = require('react');

var PreviewImage = React.createClass({
  render: function () {
  	console.log(this.props.decoration);
    return (
   	<div className="col-xs-6">
		<div>
			{this.props.decoration === null ? <img className="photo-far" src={"./build/images/tree-photos/norwegian-spruce.jpg"} /> : <img className="photo-far" src={"./build/images/tree-photos/" + this.props.decoration.far + ".jpg"} />}
			{this.props.decoration === null ? <img className="photo-tree" src={"./build/images/tree-photos/norwegian-spruce.jpg"} /> : <img className="photo-tree" src={"./build/images/tree-photos/" + this.props.decoration.tree + ".jpg"} />}
			{this.props.decoration === null ? <img className="photo-close" src={"./build/images/landing-page-background.jpg"} /> : <img className="photo-close" src={"./build/images/tree-photos/" + this.props.decoration.close + ".jpg"} />}
		</div>
	</div>
    );
  }
});

module.exports = PreviewImage;