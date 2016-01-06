var React = require('react');

var Slider = require('react-rangeslider');



var SliderBox = React.createClass({
  render: function () {
    return (
	<div className="rounded-box">
		<input id="ex9" type="text"/><br />
		<label>Height: <input /></label><br />
		<label>Est. Max Width: <input /></label>
	</div>
    );
  }
});

module.exports = SliderBox;