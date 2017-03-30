//map initialization
/*
var map = new L.Map('map', { center: new L.LatLng(-1.2641,36.7494),zoom: 13,minZoom: 12,maxZoom: 16});
*/
var map = new L.Map('map',{scrollWheelZoom:false}).setView([-1.2641,36.7494], 13);
 
//TMS layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//Add custom icon

var MyIcon = L.icon({
iconUrl: '..../svg/flame.svg',
iconSize: [20, 20], // size of the icon
popupAnchor: [0,-15]
});

//Add interaction: popup 
/*
var marker = L.marker([-1.2641,36.7494], {icon: MyIcon}).addTo(map);
https://github.com/OpenMaps/tutor/blob/master/svg/dribble_gif.gif

L.marker([-1.2641,36.7494], {icon: MyIcon}).bindPopup('Nairobi').addTo(map);
*/
//Custom popup

var customPopup = "Nairobi<br/><img src='..../svg/dribble_gif.gif' alt='dribble_gif gif'width='350px'/>";
var customOptions ={
    'maxWidth': '500',
    'className' : 'custom'
}
L.marker([-1.2641,36.7494], {icon: MyIcon}).bindPopup(customPopup,customOptions).addTo(map);


/*
var schools = {
"type": "FeatureCollection",
"features": [{ "type": "Feature",
"properties": { "name": "Chianina" },
"geometry": { "type": "Point", "coordinates": [ 24.929369, 60.22817 ] }
},

var schoolpoints = L.geoJson(schools, {
	pointToLayer: function (feature, latlng) {
	return L.marker(latlng, schoolsymbol);
	}
}).addTo(map);

function showCoords(e) {
	popup
		.setLatLng(e.latlng)
		.setContent(e.latlng.toString())
		.openOn(map);
}
map.on('click', showCoords);
*/
