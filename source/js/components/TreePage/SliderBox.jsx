var React = require('react');

var SliderBox = React.createClass({
  render: function () {
    return (
	<div className="rounded-box">
		<input id="ex9" type="text"/>
		<label>Height<input /></label>
		<label>Est. Max Width<input /></label>
	</div>
    );
  }
});

module.exports = SliderBox;