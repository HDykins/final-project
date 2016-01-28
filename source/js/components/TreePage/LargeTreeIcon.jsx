var React = require('react');

var LargeTreeIcon = React.createClass({
  render: function () {
  	if (this.props.treeView === "NORWEGIAN_SPRUCE") {
	    return (
		<div>
			<img src="../../images/tree-photos/norwegian-spruce.jpg" className="tree-icon-image-large" />
		</div>
		);
  	} else if (this.props.treeView === "NORDMANN_FIR") {
	    return (
		<div>
			<img src="http://www.cawstonchristmastrees.co.uk/media/catalog/product/cache/1/image/a064d5fcd2c1dc59bbfcc0d0b1e10b16/7/f/7ft_premier_nordmann_fir.jpg" className="tree-icon-image-large" />
		</div>
	    );	
  	} else if (this.props.treeView === "FRASER_FIR") {
	    return (
		<div>
			<img src="http://www.balsamhill.co.uk/v/vspfiles/photos/FRA-T-UK-2.jpg" className="tree-icon-image-large" />
		</div>
	    );	
  	} else if (this.props.treeView === "ARTIFICIAL") {
	    return (
		<div>
			<img src="https://26jvuybq3aw22hpt11xno70y-wpengine.netdna-ssl.com/assets/Memphis-Spruce-Christmas-Tree1.jpg" className="tree-icon-image-large" />
		</div>
	    );	
  	}
  }
});

module.exports = LargeTreeIcon;

