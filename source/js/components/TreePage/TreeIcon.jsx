var React = require('react');

var TreeIcon = React.createClass({

  render: function () {
    return (
	<div className="col-xs-3">
		<div onClick={this.props.handleClick} id="tree-icon" className={"rounded-box " + this.props.className}>
			<div>
				<span id="tree-name" className="tree-name">{this.props.label}</span>
			</div>
			<img src={this.props.image} className="tree-icon-image" />
			<div>
				<span className="price tree-price" id="tree-price">{this.props.price}</span>
			</div>
		</div>
	</div>
    );
  }
});

module.exports = TreeIcon;

