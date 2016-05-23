  function initMap(){
                          var mapDiv = document.getElementById('map');
                          var map = new google.maps.Map(mapDiv,{
                              center: {lat:44.540, lng: -78.546},
                              zoom: 13
                          });
                          var geocoder = new google.maps.Geocoder();
                          geocodeAddress(geocoder, map);
                      }
                                        
                      function geocodeAddress(geocoder, resultsMap) {
                           var address = document.getElementById('address').value;
                           var infowindow = new google.maps.InfoWindow;
                          geocoder.geocode({'address': address}, function(results, status) {
                              if (status === google.maps.GeocoderStatus.OK) {
                                  resultsMap.setCenter(results[0].geometry.location);
                                  var marker = new google.maps.Marker({
                                      map: resultsMap,
                                      position: results[0].geometry.location
                                  });
                                  infowindow.setContent(results[0].formatted_address)
                                  infowindow.open(resultsMap,marker)
                                  }
                          })
                      }

function saveIt(){
           
            var geocoder = new google.maps.Geocoder();
            var address = document.getElementById('address').value;
            var nickName = document.getElementById('nickname').value;
            
    
            geocoder.geocode({'address': address}, function(results, status) {
                
                if (status == google.maps.GeocoderStatus.OK){
                  
                var lat =  results[0].geometry.location.lat();    
                var lng =  results[0].geometry.location.lng(); 
                    
                var save = new LocationWeatherCache();
                
                if (nickName === ""){
                  save.addLocation(lat,lng,results[0].formatted_address)  
                }
                else{
                    
                 save.addLocation(lat,lng,nickName) 
                 
                }
                    window.location='index.html';
                
                    
                }
            });
}
