var React = require('react');
var GoogleMapsLoader = require('google-maps');
var CurrentDeliveryUserDetailsStore = require('../../stores/CurrentDeliveryUserDetailsStore.js');
var DeliveryPageActionCreators = require ('../../actions/DeliveryPageActionCreators.js');

GoogleMapsLoader.KEY = 'AIzaSyB8WWc9dvvtCbgLGkEWj3Ma1I01OsWYJaw';

var mapInfo = {
	center: {lat: 51.583276, lng: -0.072053},
	zoom: 10
};



var CollectionMap = React.createClass({

	initMap: function () {

		GoogleMapsLoader.load(function(google) {

			var collectionMap = new google.maps.Map(document.querySelector('.map-div'), mapInfo);

			var array = [];

			var marker = new google.maps.Marker({
		    	position: {lat: 51.643334192204, lng: -0.0714564561271418},
		    	map: collectionMap
	    	});
	    	array.push(marker);

			var marker = new google.maps.Marker({
		    	position: {lat: 51.6031465071854, lng: -0.067600130393771},
		    	map: collectionMap
	    	});
	    	array.push(marker);

	    	var marker = new google.maps.Marker({
		    	position: {lat: 51.4999559669139, lng: -0.08397005327594798},
		    	map: collectionMap
	    	});
	    	array.push(marker)

	    	DeliveryPageActionCreators.setMarkerArray(array);
	    	DeliveryPageActionCreators.animateMarkersOnLocationChange();
		});
	},

	clearMap: function () {
		GoogleMapsLoader.release(function () {
			console.log('No map');
		});
	},

	componentDidMount: function () {
		this.initMap();
	},

	componentWillUnmount: function () {
		this.clearMap();
	}, 

	render: function () {
		return (
			<div className="col-xs-6">
			<div className="rounded-box">
				<div className="map-div">Not today</div>
			</div>
		</div>
		);
	}
});

module.exports = CollectionMap;