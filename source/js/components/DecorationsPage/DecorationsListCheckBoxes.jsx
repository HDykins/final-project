var React = require('react');
var DecorationsPageActionCreators = require('../../actions/DecorationsPageActionCreators.js')

var DecorationsListCheckBoxes = React.createClass({

	handleCheckBoxChange: function () {
		DecorationsPageActionCreators.toggleDecorationSelection(this.props.decorationName);
	},

	render: function () {
	    return (
			<input onChange={this.handleCheckBoxChange} type="checkbox" id="ID" />
		);
	}
});

module.exports = DecorationsListCheckBoxes;