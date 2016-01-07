var React = require('react');
var DecorationsListCheckBoxes = require('./DecorationsListCheckBoxes.jsx');
var CurrentDecorationsUserDetailsStore = require('../../stores/CurrentDecorationsUserDetailsStore.js');

var DecorationsListItem = React.createClass ({

	handleMouseOver: function () {
		this.props.handleMouseOver(this.props.decorationName);
	},

	handleMouseOut: function () {
		this.props.handleMouseOut(this.props.decorationName);
	},

	render: function () {
		// console.log(CurrentDecorationsUserDetailsStore.getHoveredDecoration());
	    return (
			<li onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
				<label htmlFor="ID">{this.props.label}</label>
				<DecorationsListCheckBoxes decorationName={this.props.decorationName} />
			</li>
	    );
  	}
});

module.exports = DecorationsListItem;

