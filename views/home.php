<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PWEB-Guess-Where Welcome</title>
    <link rel="stylesheet" href="../css/main.css">
</head>
<body>
    <header>
        <div id="logo">
            <img src="./res/img/logo.png" alt="Logo Mathieu - Zaid">
        </div>
        <ul id="menu">
            <li id="menuSelected"><a href="#">Home</a></li>
            <li><a href="/team">Team</a></li>
        </ul>
    </header>
    <div id="home-container">
        <div id="home-presentation" class="home-block">
            <h1>PROJET<br>PWEB</h1>
            <h2>GUESS WHERE est un jeu codé dans le cadre d'un projet universitaire. Le but est simple, il suffit de trouver sur une carte l'emplacement d'une série de monuments qui vont être proposé de manière aléatoire.</h2>
            <button onclick="window.location.href = '/game'">DEMARRER UNE PARTIE ></button>
        </div>
        <div id="home-demonstration" class="home-block">
            <div id="home-demonstration-video">
                <video autoplay muted repeat src="../res/videos/demo.mp4"></video>
            </div>
        </div>
    </div>
</body>
</html>