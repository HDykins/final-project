var React = require('react');

var FactList = React.createClass({
  render: function () {
    return (
    <ul>
    	<li>Fact 1</li>
    	<li>Fact 2</li>
    	<li>Fact 3</li>
    	<li>Fact 4</li>
    	<li>Fact 5</li>
    </ul>
    );
  }
});

module.exports = FactList;
