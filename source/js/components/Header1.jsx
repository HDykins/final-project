var React = require('react');
var StateStore = require('../stores/StateStore.js');

var Header1 = React.createClass({
  render: function () {

    var currentPage = StateStore.getCurrentPage();  

    return (
	<div className="row rounded-box">
		<h1>{this.props.label}</h1>
		{currentPage === "DECORATIONS_PAGE" ? <button className="btn">No Decorations</button> : null}
	</div>
    );
  }
});

module.exports = Header1;


