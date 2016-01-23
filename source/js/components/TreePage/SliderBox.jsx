var React = require('react');
var TreeInformationStore = require('../../stores/TreeInformationStore.js');
var TreePageActionCreators = require('../../actions/TreePageActionCreators.js');
var Rcslider = require('rc-slider');


var SliderBox = React.createClass({

  handleSliderEvent: function (value) {
    if (value < 5) {
      TreePageActionCreators.changeHeightToSmall();
      TreePageActionCreators.setCurrentTreePrice();
      TreePageActionCreators.sumAllPrices();
    } else if (value > 8) {
      TreePageActionCreators.changeHeightToLarge();
      TreePageActionCreators.setCurrentTreePrice();
      TreePageActionCreators.sumAllPrices();
    } else {
      TreePageActionCreators.changeHeightToMedium();
      TreePageActionCreators.setCurrentTreePrice();
      TreePageActionCreators.sumAllPrices();
    }
    TreePageActionCreators.setHeightValue(value)
  },

  render: function () {
    return (
	<div className="rounded-box">
    <Rcslider onChange={this.handleSliderEvent} min={3} max={12} step={0.5} defaultValue={7} />
  	<label>Height: <p>{TreeInformationStore.getCurrentHeightValue() + "ft"}</p></label><br />
  	<label>Est. Max Width: <p>{TreeInformationStore.getCurrentWidthValue() + "ft"}</p></label>
	</div>
    );
  }
});

module.exports = SliderBox;