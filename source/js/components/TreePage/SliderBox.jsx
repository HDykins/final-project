var React = require('react');
var Slider = require('react-rangeslider');
var TreePageActionCreators = require('../../actions/TreePageActionCreators.js');


var SliderBox = React.createClass({

  handleSmallSelectionClickEvent: function () {
  	TreePageActionCreators.changeHeightToSmall();
  	TreePageActionCreators.setCurrentTreePrice();
  	TreePageActionCreators.sumAllPrices();
  },

  handleMediumSelectionClickEvent: function () {
  	TreePageActionCreators.changeHeightToMedium();
  	TreePageActionCreators.setCurrentTreePrice();
  	TreePageActionCreators.sumAllPrices();
  },

  handleLargeSelectionClickEvent: function () {
  	TreePageActionCreators.changeHeightToLarge();
  	TreePageActionCreators.setCurrentTreePrice();
  	TreePageActionCreators.sumAllPrices();
  },

  render: function () {
    return (
	<div className="rounded-box">
		<div className="dropdown">
	        <button className="btn small-button dropdown-toggle" type="button" id="dropdown-height" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
	          Height
	          <span className="caret"></span>
	        </button>
	        <ul className="dropdown-menu" aria-labelledby="dropdown-height">
	          <li onClick={this.handleSmallSelectionClickEvent}>Small</li>
	          <li onClick={this.handleMediumSelectionClickEvent}>Medium</li>
	          <li onClick={this.handleLargeSelectionClickEvent}>Large</li>
	        </ul>
	    </div>
		<label>Height: <input /></label><br />
		<label>Est. Max Width: <input /></label>
	</div>
    );
  }
});

module.exports = SliderBox;