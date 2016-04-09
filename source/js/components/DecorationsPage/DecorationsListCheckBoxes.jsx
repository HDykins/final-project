var React = require('react');
var CurrentDecorationsUserDetailsStore = require('../../stores/CurrentDecorationsUserDetailsStore.js');
var DecorationsPageActionCreators = require('../../actions/DecorationsPageActionCreators.js');

var DecorationsListCheckBoxes = React.createClass({

	handleCheckBoxChange: function () {
		DecorationsPageActionCreators.toggleDecorationSelection(this.props.decorationName);
		DecorationsPageActionCreators.sumAllPrices();
	},

	render: function () {
	    return (
			<input onChange={this.handleCheckBoxChange} type="checkbox" checked={CurrentDecorationsUserDetailsStore.getDecorationStatus()[this.props.decorationName] ? "checked" : null} id="ID" />
		);
	}
});

module.exports = DecorationsListCheckBoxes;