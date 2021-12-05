<?php

$req = $_SERVER['REQUEST_URI'];

switch ($req) {
  case '/':
    require 'views/home.php';
    break;
  case '/game':
    require 'views/game.php';
    break;
  case '/data':
    require 'utils/data.php';
    break;
  case '/team':
    require 'views/team.php';
    break;
  default:
    require 'views/errors/404.php';
    break;
}