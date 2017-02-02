;(function($) {
	"use strict";
// Slider

$(window).on('load', function() { 
	$('.ba-features__slider').slick({
		slide: '.ba-features__slide',
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		prevArrow: '.ba-features__prev-arrow',
		nextArrow: '.ba-features__next-arrow',
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 700,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		    ]
		}); 
});

// Google map
var map;
var YogyakartaMarker;
var YogyakartaInfoWindow;
var YogyakartaOffice = {lat:-7.8513828, lng: 110.4305992};

var content = $('.ba-location__title').html();

function initMap() {
	map = new google.maps.Map( $('.ba-location__map')[0], {
		center: {lat:-7.8513828, lng: 110.4305992},
		zoom: 2,
		disableDefaultUI: true,
		styles: 
		[
		{
			"featureType": "all",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"saturation": 36
			},
			{
				"color": "#000000"
			},
			{
				"lightness": 40
			}
			]
		},
		{
			"featureType": "all",
			"elementType": "labels.text.stroke",
			"stylers": [
			{
				"visibility": "on"
			},
			{
				"color": "#000000"
			},
			{
				"lightness": 16
			}
			]
		},
		{
			"featureType": "all",
			"elementType": "labels.icon",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "geometry.fill",
			"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 20
			}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "geometry.stroke",
			"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 17
			},
			{
				"weight": 1.2
			}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "labels.text",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 20
			}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "labels.text",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "landscape.natural.terrain",
			"elementType": "geometry.fill",
			"stylers": [
			{
				"saturation": "0"
			}
			]
		},
		{
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 21
			}
			]
		},
		{
			"featureType": "poi",
			"elementType": "labels.text",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "road",
			"elementType": "labels.text",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry.fill",
			"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 17
			}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 29
			},
			{
				"weight": 0.2
			}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 18
			}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 16
			}
			]
		},
		{
			"featureType": "transit",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 19
			}
			]
		},
		{
			"featureType": "transit",
			"elementType": "labels.text",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "water",
			"elementType": "all",
			"stylers": [
			{
				"visibility": "on"
			}
			]
		},
		{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#363855"
			},
			{
				"lightness": "0"
			}
			]
		},
		{
			"featureType": "water",
			"elementType": "labels.text",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		}
		]
	});
}
function initMarkers() {
	YogyakartaMarker = new google.maps.Marker({
		position: YogyakartaOffice,
		map: map,
		title: 'Yogyakarta, Indonesia, 55282',
		icon: "dist/images/marker.svg",
		size: new google.maps.Size(5, 5),
	});
}
initMap();
initMarkers();

var YogyakartaInfoWindow = new google.maps.InfoWindow({
	content: content,
});

YogyakartaMarker.addListener('click', function() {
	YogyakartaInfoWindow.open(map, YogyakartaMarker);
});
})(jQuery);