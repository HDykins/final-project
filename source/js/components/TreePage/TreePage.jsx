var React = require('react');
var NavBar = require('../NavBar.jsx');
var TreeInformationStore = require('../../stores/TreeInformationStore.js');
var Header1 = require('../Header1.jsx');
var LargeTreeIcon = require('./LargeTreeIcon.jsx');
var TreeIcons = require('./TreeIcons.jsx');
var TreeInfo = require('./TreeInfo.jsx');
var SliderBox = require('./SliderBox.jsx');
var HeightCategoryBox = require('./HeightCategoryBox.jsx');
var PriceTotal = require('../PriceTotal.jsx');
var ContinueButton = require('../ContinueButton.jsx');
var Footer = require('../Footer.jsx');

var TreePage = React.createClass({

  getInitialState: function () {
        return {
          treeView: TreeInformationStore.getCurrentTreeView()
        };
    },

    updateState: function () {
        this.setState(
        {
          treeView: TreeInformationStore.getCurrentTreeView(),
          height: TreeInformationStore.getCurrentHeight()
        });
    },

    componentDidMount: function () {
        TreeInformationStore.addChangeListener(this.updateState);
    },

    componentWillUnmount: function () {
        TreeInformationStore.removeChangeListener(this.updateState);
    },    	

  render: function () {
    return (
    	<div className="container-fluid grey-background">
        	<NavBar />
        	<div className="container">
            <img src="./build/images/current-step-image-1.png" />
            <div className="row">
              <Header1 label="Choose tree type" />
            </div>
            <div className="rounded-box">
          		<div className="row">
  	        		<LargeTreeIcon treeView={this.state.treeView} />
  	        	</div>	
  				    <TreeIcons />
  	        	<div className="row">
  					   <TreeInfo />       		
  	        	</div>
            </div>
	        	<Header1 label="Choose tree height"/>
            <div className="rounded-box">
  	        	<div className="row">
  	        		<div className="col-xs-6">
  	        			<SliderBox />
  	        		</div>
  	        		<div className="col-xs-6">
  	        			<HeightCategoryBox />
  	        		</div>	
  	        	</div>
            </div>
	        	<div className="row">
	        		<div className="col-xs-3"></div>
	        		<PriceTotal />
	        		<ContinueButton label="Continue to decorations page" />
	        	</div>
      		</div>
          <Footer />
      	</div>
    );
  }
});

module.exports = TreePage;