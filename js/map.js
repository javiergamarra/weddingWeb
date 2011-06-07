var map;
var directionDisplay;
var directionsService = new google.maps.DirectionsService();
function initialize() {
	directionsDisplay = new google.maps.DirectionsRenderer();
	var latlng = new google.maps.LatLng(0, 0);
	var myOptions = {
		zoom : 8,
		center : latlng,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	}
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	directionsDisplay.setMap(map);
}

function calculateRouteToHotel() {
	var start = document.getElementById("hotelAddress").value;
	calculateRouteTo(start,"Hotel La Vega, Carretera Salamanca, Valladolid");
}

function calculateRouteToChurch() {
	var start = document.getElementById("churchAddress").value;
	calculateRouteTo(start, "Calle de la Plateria, Valladolid");
}

function calculateRouteTo(start,end) {
	createPanel("map");
	initialize();
	var request = {
		origin : start,
		destination : end,
		travelMode : google.maps.DirectionsTravelMode.DRIVING
	};
	directionsService.route(request, function(result, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			directionsDisplay.setDirections(result);
		}
	});
}
