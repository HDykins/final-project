var React = require('react');

var PostCode = React.createClass({
  render: function () {
    return (
   	<div>
		<input type="text" placeholder="Please input your postcode"/>
		<button>Find</button>
	</div>
    );
  }
});

module.exports = PostCode;