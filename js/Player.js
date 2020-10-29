class Player {
    constructor(){
        this.points = 0;
        this.completed = false;
        this.name = null;
        this.index = null;
    }

    update(count,state){
        database.ref('players/player'+this.index).set({
            points: this.points,
            completed: this.completed,
            name: this.name
        });
        
        database.ref('/').update({
            playerCount: count,
            gameState: state
        });

    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
          playerCount = data.val();
        })
      }
}