var fade = 0;
var gameState = 0;
var database;
var playerCount = 0;
var form, game, player;
var games = ["card flip"];
var currentGame;
var cardBackIMG;
var cards = [];
var otherPlayerName,otherPlayerPoints,otherPlayerIndex;

function preload(){
    cardBackIMG = loadImage("images/Card.jpg")
}

function setup(){
    createCanvas(800,600);

    database = firebase.database();
    game = new Game();
    form = new Form();
    player = new Player();

    form.reset();
}

function draw(){
    game.state();
    player.getCount();

    if(gameState === 0){
        background(166, 10, 10);
        textFont("courier new");
        textSize(250);
        fill(0, 255, 221, fade);
        text("MIND", 100,200);
        fill(1, 140, 8, fade);
        text("RACE", 100, 500);
        if(fade <= 255){
            fade += 5;
        }
        else {
            game.matchPlayers();
        }
    }

    if(playerCount === 2){
        gameState = 1;
        game.updateState();
    }


    if(gameState === 1){
        form.greeting.hide();
        background(166, 10, 10);
        game.scores();
        currentGame = games[0];
        if(currentGame === "card flip"){
            game.cardflip();
        }
    }
  
}