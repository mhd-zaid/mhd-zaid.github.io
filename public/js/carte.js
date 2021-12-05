/*----------VARIABLES----------*/
const CENTER_OF_MAP = L.latLng(42, 16);
let markerIsPlaced = false;
let theMarker;
let trajet;
let trajetIsDisplayed = false;
let monumentPosition;
let line;
let circle;

/*----------Fonctions carte----------*/
//Création de la carte
let mymap = L.map('mapid');

L.tileLayer('http://a.tile.stamen.com/toner/{z}/{x}/{y}.png', {
    attribution: 'Mathieu, Zaid, Rayan et Marwan',
}).addTo(mymap);

let redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

//Placer un marqueur à l'endroit cliqué
function manageMarker(e){
    if (!markerIsPlaced){
        theMarker = L.marker(e.latlng, {icon: redIcon}).addTo(mymap);
        markerIsPlaced = true;
        manageButton();
    }else{
        mymap.removeLayer(theMarker);
        markerIsPlaced = false;
        manageMarker(e);
    }
}

//Retire le marqueur
function resetMarker(){
    if(markerIsPlaced){
        mymap.removeLayer(theMarker);
        markerIsPlaced = false;
        manageButton();
    }
}

//Affecte les variables correspondantes au prochain monument
function nextMonument(){
    let monument = getRandomData();
    let div = document.getElementById("moreInformations")
    monumentPosition = monument.localisation;
    mymap.setView(CENTER_OF_MAP, 2);
    document.getElementById("monumentName").innerHTML = monument.name;
    div.children[0].innerHTML = monument.name;
    div.children[1].innerHTML = monument.desc;

}

//Trace une ligne entre le marqueur et le monument
function traceLine(element){
    let latlngs  = [theMarker.getLatLng(), element.getLatLng()];
    line = L.polyline(latlngs , {color: 'SteelBlue', opacity: 1}).addTo(mymap);
}

//Retire la ligne de la carte
function removeAnnotations(){
    mymap.removeLayer(line);
    mymap.removeLayer(circle);
    mymap.removeControl(trajet);
    trajetIsDisplayed = false;
}

//Désactive les interactions avec la carte(navigation, zoom, etc...)
function disableMap(state){
    if (state) {
        mymap.dragging.disable();
        mymap.touchZoom.disable();
        mymap.doubleClickZoom.disable();
        mymap.scrollWheelZoom.disable();
        mymap.boxZoom.disable();
        mymap.keyboard.disable();
    }else{
        mymap.dragging.enable();
        mymap.touchZoom.enable();
        mymap.doubleClickZoom.enable();
        mymap.scrollWheelZoom.enable();
        mymap.boxZoom.enable();
        mymap.keyboard.enable();
    }
}

//Tracer l'itinéraire
function findItineraire(){
    if (!trajetIsDisplayed) {
        trajetIsDisplayed = true;
        trajet = L.Routing.control({
            waypoints: [
                theMarker.getLatLng(),
                monumentPosition
            ]
          });
        trajet.addTo(mymap);
    }
}

/*----------EVENTS----------*/
//Attend un clique sur la carte
mymap.on('click', function(e){
    manageMarker(e);
});