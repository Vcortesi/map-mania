let map;

function initMap() {

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });

  var marker = new google.maps.Marker({position:{lat:41.787980,lng:-87.767250}, map:map});
  var marker2 = new google.maps.Marker({position:{lat:41.706917,lng:-87.716133}, map:map});
  var marker3 = new google.maps.Marker({position:{lat:41.6050,lng:-88.0806}, map:map});

  marker2.setIcon("http://maps.google.com/mapfiles/kml/pal2/icon10.png");
  marker3.setIcon("http://maps.google.com/mapfiles/kml/pal2/icon10.png");

  var infoWindow = new google.maps.InfoWindow({content:'My House'});
  var infoWindow2 = new google.maps.InfoWindow({content:'SXU'});
  var infoWindow3 = new google.maps.InfoWindow({content:'Lewis'});

  marker.addListener('click',function() {
    infoWindow.open(map, marker);
  });

  marker2.addListener('click',function() {
    infoWindow2.open(map, marker2);
  });

  marker3.addListener('click',function() {
    infoWindow3.open(map, marker3);
  });
  google.maps.event.addListener(map,'idle', function() {
    updateGame()
  });
  
}


function updateGame(){
  console.log('function UpdateGame()!');
  var zoomLvl = map.getZoom()
  var inBounds = false;

  if (map.getBounds().contains({lat:41.787980,lng:-87.767250})) {
    inBounds = true;
  console.log("inBounds:"+inBounds+"zoomLevel: "+zoomLvl);

  }

}

function initApplication() {
  console.log("Map Mania Starting Up!")
}



