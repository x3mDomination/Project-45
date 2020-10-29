class Game {
    constructor(){

    }

    state(){
      database.ref('/gameState').on("value",function(data){
        gameState = data.val();
      })
    }

    updateState(){
      database.ref('/').update({
        gameState: gameState
      })
    }

    async matchPlayers(){
      if(gameState === 0){
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form.display();
      }
    }
    
    scores(){
      if(player.index === 1){
        otherPlayerIndex = 2; 
      }
      else {
        otherPlayerIndex = 1;
      }
      database.ref('players/player'+otherPlayerIndex+'/name').on("value",function(data){
        otherPlayerName = data.val();
      });
      database.ref('players/player'+otherPlayerIndex+'/points').on("value",function(data){
        otherPlayerPoints = data.val();
      });
      push();
      textSize(20);
      textFont("courier new");
      fill("cyan");
      text(player.name+" (You): "+player.points,50,25);
      text(otherPlayerName+": "+otherPlayerPoints,600,25);
      pop();
    }

    cardflip(){
      for(var i=170;i<600;i+=100){
        for(var j=150;j<600;j+=120){
          var card = createSprite(i,j,30,70);
          card.addImage("card back",cardBackIMG);
          card.scale = 0.1;
          cards.push(card);
        }
      }

      push();
      fill(0);
      textSize(30);
      textFont("courier new");
      text("Card Memory",300,25);
      textSize(16);
      text("Find matching pairs to make all the cards disappear!",125,50);
      pop();

      

      drawSprites();
    }
}