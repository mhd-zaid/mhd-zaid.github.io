/*----------VARIABLES----------*/
const SCOREMAX = 5;
let manche = 0;
let score = 0;

/*----------Fonctions----------*/
//Affiche ou non les boutons de validations
function manageButton(){
    let button = document.getElementById("buttons")
    if (markerIsPlaced){
        button.style.display = "flex";
    }else{
        button.style.display = "none";
    }
}

//Vérifie si l'utilisateur obtient un point ou non
function chechResult(){
    if (markerIsPlaced){
        circle = L.circle(monumentPosition, {radius: 5000}).addTo(mymap);
        
        let radius = circle.getRadius();
        let circleCenterPoint = circle.getLatLng();
        let isInCircleRadius = Math.abs(circleCenterPoint.distanceTo(theMarker.getLatLng())) <= radius;
        traceLine(circle);
        let tempScore;
        tempScore = (1000 - Math.round((circleCenterPoint.distanceTo(theMarker.getLatLng())/1000)))/10;
        1000 - Math.round((circleCenterPoint.distanceTo(theMarker.getLatLng())/1000)) < 0 ? tempScore = 0 : tempScore = tempScore;
        isInCircleRadius ? tempScore = 150 : tempScore = tempScore;
        score += tempScore;
        theMarker.bindPopup("Le monument se trouve à exactement "+ Math.round(Math.abs(circleCenterPoint.distanceTo(theMarker.getLatLng()))/1000) + " km").openPopup();
        moreInformations(true);
    }
}

//Passe au prochain round APRES UN CERTAIN DELAIS
function nextRound(){
    moreInformations(false);
    if (manche < (SCOREMAX - 1)){
        manche += 1;
        resetMarker();
        nextMonument();
        removeAnnotations();
    }else{
        endScreen();
    }
}

//affiche le menu pour avoir plus d'information
function moreInformations(state){
    let block = document.getElementById("moreInformations");
    if (state) {
        block.style.display = "flex";
        document.getElementById("confirm").disabled = true;
        document.getElementById("reset").disabled = true;
    }else{
        block.style.display = "none"
        document.getElementById("confirm").disabled = false;
        document.getElementById("reset").disabled = false;
    }
}

//Affiche l'écran de fin (créer entierement en js)
function endScreen(){
    document.getElementById("buttons").remove();
    document.getElementById("question").remove();
    let new_div = document.createElement("div");
    new_div.setAttribute("id", "score")
    let new_title = document.createElement("h2");
    new_title.innerHTML = "Bien joué !<br>Votre score est de :";
    let new_score = document.createElement("p");
    new_score.innerHTML = score;
    let new_btn = document.createElement("button");
    new_btn.innerHTML = "REJOUER";
    new_btn.setAttribute ("onClick", "document.location.reload();");
    document.getElementById("container").appendChild(new_div);
    new_div.appendChild(new_title);
    new_div.appendChild(new_score);
    new_div.appendChild(new_btn);
    disableMap(true);
}

/*----------EVENT----------*/
//Démarre le mini-jeu avec le choix d'un monument
window.addEventListener("load", function(){
    nextMonument();
})