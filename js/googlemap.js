function myMap() {
  var myCenter = new google.maps.LatLng(50.071148, 14.457602);
  var mapCanvas = document.getElementById("googleMap");
  var mapOptions = {
    center: myCenter, 
    zoom: 17,
    panControl: false,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: false,
    overviewMapControl: true,
    rotateControl: true
    };
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
}