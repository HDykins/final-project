var React = require('react');
var TreeInformationStore = require('../../stores/TreeInformationStore.js');

var FactList = React.createClass({
  render: function () {
    if (TreeInformationStore.getCurrentTreeView() === "NORWEGIAN_SPRUCE") {
        return (
        <ul>
        	<li>Traditional Christmas tree style</li>
        	<li>Great for holding heavy decorations</li>
        	<li>Amazing Value</li>
        	<li>Pleasant but not overbearing frangrance</li>
        	<li>Sourced from Norway GUARANTEED</li>
        </ul>
        );
    } else if (TreeInformationStore.getCurrentTreeView() === "NORDMANN_FIR") {
        return (
        <ul>
            <li>Slightly flatter branches</li>
            <li>Very faint scent</li>
            <li>Holds it's leaves for longer</li>
            <li>Conical shape, with broad leaves</li>
            <li>Sourced from Scotland GUARANTEED</li>
        </ul>
        );
    } else if (TreeInformationStore.getCurrentTreeView() === "FRASER_FIR") {
        return (
        <ul>
            <li>Narrower base than traditional trees</li>
            <li>Great for smaller spaces due to width</li>
            <li>Holds it's leaves for longer</li>
            <li>Popular in America</li>
            <li>Sourced from America GUARANTEED</li>
        </ul>
        );
    } else if (TreeInformationStore.getCurrentTreeView() === "ARTIFICIAL") {
        return (
        <ul>
            <li>No needles to drop</li>
            <li>Comes in many different sizes</li>
            <li>A tree for life!</li>
            <li>Fire resistant</li>
            <li>Sourced from China GUARANTEED</li>
        </ul>
        );
    }
  }
});

module.exports = FactList;
