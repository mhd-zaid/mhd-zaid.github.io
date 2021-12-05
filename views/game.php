<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8" />
    <title>PWEB-Guess-Where</title>
    <link rel="stylesheet" href="./css/main.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
    integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
    crossorigin=""/>
    <link rel="stylesheet" href="https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.css" />
</head>
<body>
    <!--En-tête-->
    <header>
        <div id="logo">
            <img src="./res/img/logo.png" alt="Logo Mathieu - Zaid">
        </div>
        <ul id="menu">
            <li><a href="../">Home</a></li>
            <li><a href="../team">Team</a></li>
        </ul>
    </header>
    <button id="closeGame" onclick="window.location.href = '../'">
        <img id="closeGame-img" src="./res/icons/close.png" alt="Fermer le jeu">
    </button>

    <!--Contenu (Carte, jeu etc...)-->
    <div id="container">
        <div id="question">
            <h2>Où se situe . . .</h2>
            <h3 id="monumentName">{Monument}</h3>
        </div>
        <div id="mapid"></div>
        <div id="buttons">
            <button id="confirm" class="button" onclick="chechResult()">
                <p class="buttons-text">Confirmer mon choix</p>
            </button>
            <button id="reset" class="button" onclick="resetMarker()">
                <p class="buttons-text">Reset</p>
            </button>
        </div>
        <div id="moreInformations">
            <h2>{titre du monument}</h2>
            <p>{description du monument, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi esse consectetur voluptas in rem minima saepe deleniti ex molestiae possimus, architecto reprehenderit minus velit? Est alias similique ab necessitatibus deleniti.}</p>
            <button onclick="findItineraire()">Voir l'itinéraire</button>
            <button id="moreInformations-suite" onclick="nextRound()">Suite</button>
        </div>
    </div>

     <!-- Make sure you put this AFTER Leaflet's CSS -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
    integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
    crossorigin=""></script>
    <script src="https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.js"></script>
    <script src="./js/carte.js"></script>
    <script src="./js/game.js"></script>
    <script src="./js/data.js"></script>
</body>
</html>
