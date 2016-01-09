var React = require('react');
var TreeInformationStore = require('../../stores/TreeInformationStore.js');

var HeightCategoryBox = React.createClass({

  changePriceInHeightCategoryBox: function () {
  	if (TreeInformationStore.getCurrentTreeView() === "NORWEGIAN_SPRUCE") {
  		return {SMALL: '(£20)', MEDIUM: '(£24)', LARGE: '(£40)'};
  	} else if (TreeInformationStore.getCurrentTreeView() === "NORDMANN_FIR") {
  		return {SMALL: '(£28)', MEDIUM: '(£32)', LARGE: '(£48)'};
  	} else if (TreeInformationStore.getCurrentTreeView() === "FRASER_FIR") {
  		return {SMALL: '(£35)', MEDIUM: '(£42)', LARGE: '(£55)'};
  	} else if (TreeInformationStore.getCurrentTreeView() === "ARTIFICIAL") {
  		return {SMALL: '(£12)', MEDIUM: '(£38)', LARGE: '(£70)'};
  	}	
  },

  render: function () {
    return (
	<div className="rounded-box">
		<div className="col-xs-4">
			<div className={TreeInformationStore.getCurrentHeight() === "SMALL" ? "rounded-box highlight" : "rounded-box no-highlight"}>
				<h4>
					Small
				</h4>
				<div>
					<span>Under 4ft</span>
				</div>
				<div>
					Min Price Specified <span className="price">{this.changePriceInHeightCategoryBox().SMALL}</span>
				</div>
			</div>
		</div>
		<div className="col-xs-4">
			<div className={TreeInformationStore.getCurrentHeight() === "MEDIUM" ? "rounded-box highlight" : "rounded-box no-highlight"}>
				<h4>
					Medium
				</h4>
				<div>
					<span>3 - 9ft</span>
				</div>
				<div>
					Variable price <span className="price">{this.changePriceInHeightCategoryBox().MEDIUM}</span>
				</div>
			</div>
		</div>
		<div className="col-xs-4">
			<div className={TreeInformationStore.getCurrentHeight() === "LARGE" ? "rounded-box highlight" : "rounded-box no-highlight"}>
				<h4>
					Large
				</h4>
				<div>
					<span>Over 9ft</span>
				</div>
				<div>
					Max Price Specified <span className="price">{this.changePriceInHeightCategoryBox().LARGE}</span>
				</div>
			</div>
		</div>
	</div>
    );
  }
});

module.exports = HeightCategoryBox;