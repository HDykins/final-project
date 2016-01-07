var React = require('react');

var PreviewImage = React.createClass({
  render: function () {
  	console.log(this.props.decoration);
    return (
   	<div className="col-xs-6">
		<div className="rounded-box">
			{this.props.decoration === null ? <img className="photo-far" src={"../source/images/tree-photos/norwegian-spruce.jpg"} /> : <img className="photo-far" src={"../source/images/tree-photos/" + this.props.decoration.far + ".jpg"} />}
			{this.props.decoration === null ? <img className="photo-tree" src={"../source/images/tree-photos/norwegian-spruce.jpg"} /> : <img className="photo-tree" src={"../source/images/tree-photos/" + this.props.decoration.tree + ".jpg"} />}
			{this.props.decoration === null ? <img className="photo-close" src={"../source/images/landing-page-background.jpg"} /> : <img className="photo-close" src={"../source/images/tree-photos/" + this.props.decoration.close + ".jpg"} />}
		</div>
	</div>
    );
  }
});

module.exports = PreviewImage;