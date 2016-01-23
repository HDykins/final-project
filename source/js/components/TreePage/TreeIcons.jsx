var React = require('react');
var TreeIcon = require('./TreeIcon.jsx');
var TreeInformationStore = require('../../stores/TreeInformationStore.js');
var TreePageActionCreators = require('../../actions/TreePageActionCreators.js');

var TreeIcons = React.createClass({

  changeToNorwegianView: function () {
  	TreePageActionCreators.changeToNorwegianView();
    TreePageActionCreators.setCurrentTreePrice();
    TreePageActionCreators.sumAllPrices();
    TreePageActionCreators.setHeightValue(TreeInformationStore.getCurrentHeightValue());
  },

  changeToNordmannView: function () {
  	TreePageActionCreators.changeToNordmannView()
    TreePageActionCreators.setCurrentTreePrice();
    TreePageActionCreators.sumAllPrices();
    TreePageActionCreators.setHeightValue(TreeInformationStore.getCurrentHeightValue());
  },

  changeToFraserView: function () {
  	TreePageActionCreators.changeToFraserView()
    TreePageActionCreators.setCurrentTreePrice();
    TreePageActionCreators.sumAllPrices();
    TreePageActionCreators.setHeightValue(TreeInformationStore.getCurrentHeightValue());
  },

  changeToArtificialView: function () {
  	TreePageActionCreators.changeToArtificialView()
    TreePageActionCreators.setCurrentTreePrice();
    TreePageActionCreators.sumAllPrices();
    TreePageActionCreators.setHeightValue(TreeInformationStore.getCurrentHeightValue());
  },

  render: function () {
    return (
	<div className="row">
		<TreeIcon handleClick={this.changeToNorwegianView} label="Norwegian Spruce" price="£20-40" image="../source/images/tree-photos/norwegian-spruce.jpg" className={TreeInformationStore.getCurrentTreeView() === "NORWEGIAN_SPRUCE" ? "highlight" : null} />
		<TreeIcon handleClick={this.changeToNordmannView} label="Nordmann Fir" price="£28-48" image="http://www.cawstonchristmastrees.co.uk/media/catalog/product/cache/1/image/a064d5fcd2c1dc59bbfcc0d0b1e10b16/7/f/7ft_premier_nordmann_fir.jpg" className={TreeInformationStore.getCurrentTreeView() === "NORDMANN_FIR" ? "highlight" : null} />
		<TreeIcon handleClick={this.changeToFraserView} label="Fraser Fir" price="£35-55" image="http://www.balsamhill.co.uk/v/vspfiles/photos/FRA-T-UK-2.jpg" className={TreeInformationStore.getCurrentTreeView() === "FRASER_FIR" ? "highlight" : null} />
		<TreeIcon handleClick={this.changeToArtificialView} label="Artificial" price="£12-70" image="https://26jvuybq3aw22hpt11xno70y-wpengine.netdna-ssl.com/assets/Memphis-Spruce-Christmas-Tree1.jpg" className={TreeInformationStore.getCurrentTreeView() === "ARTIFICIAL" ? "highlight" : null} />
	</div>
    );
  }
});

module.exports = TreeIcons;

