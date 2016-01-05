var React = require('react');
var TreeInformationStore = require('../../stores/TreeInformationStore.js');

var TreeDescription = React.createClass({
  render: function () {
  	if (TreeInformationStore.getCurrentTreeView() === "NORWEGIAN_SPRUCE") {
	    return (
		<div className="rounded-box">
			<p>The Norway Spruce is the traditional Christmas tree which can be found in many homes throughout the UK and Europe.   Norway Spruce can be found naturally in Northern and Central Europe. The tree features pointed mid-green colour needles with long cylindrical brown cones which hang down. Many people enjoy its scent once its indoors during December.</p>
		</div>
		);
	} else if (TreeInformationStore.getCurrentTreeView() === "NORDMANN_FIR") {
        return (
        <div className="rounded-box">	
			<p>An excellent needle retaining species with soft glossy dark green needles. Nordman Fir is probably the most popular Christmas tree in this country, one of the reasons being that it has a lovely symmetrical shape with strong branches.</p>
		</div>
		);
	} else if (TreeInformationStore.getCurrentTreeView() === "FRASER_FIR") {
        return (
        <div className="rounded-box">
			<p>The Fraser fir branches turn slightly upward. They have good form and needle-retention. They are dark blue-green in colour, and have excellent shipping characteristics. Fraser firs are known for their wonderful Christmassy scent.</p>
		</div>
		);
	} else if (TreeInformationStore.getCurrentTreeView() === "ARTIFICIAL") {
        return (
        <div className="rounded-box">	
			<p>One of the biggest advantages of using artificial trees is the cost savings. Artificial trees are also very convenient. It’s always that “perfect shape”, and you don’t have to worry about haggling with the Christmas tree lot salesman to get a good deal. The trees don’t need any watering and won’t scatter mounds of messy needles all over the floor.</p>
		</div>
    	);
    }	
  }
});

module.exports = TreeDescription;