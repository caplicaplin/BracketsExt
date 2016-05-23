Afiq


Search Drive

Drive
.
Folder Path
ENG1003
code
js
NEW 
Folders and views
My Drive
Shared with me
Google Photos
Recent
Starred
Bin
8 GB used
.

Javascript
addlocationPage.js

Javascript
locationWeatherCache.js

Javascript
mainPage.js

Javascript
viewLocationPage.js


// Code for the View Location page.

// This is sample code to demonstrate navigation.
// You need not use it for final app.
var APP_PREFIX = "weatherApp";


var locationIndex = localStorage.getItem(APP_PREFIX + "-selectedLocation"); 
if (locationIndex !== null)
{
    var locationNames = [ "Location A", "Location B" ];
    // If a location name was specified, use it for header bar title.
    document.getElementById("headerBarTitle").textContent = nickname1;
}

                      function initMap(){
                          var mapDiv = document.getElementById('map');
                          var map = new google.maps.Map(mapDiv,{
                              center: {lat:44.540, lng: -78.546},
                              zoom: 13
                          });
                          var geocoder = new google.maps.Geocoder();
                      }
var myObject = {
    
}
