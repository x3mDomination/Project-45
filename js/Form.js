class Form {
    constructor(){
        var loadingAngle = 90;
        angleMode(DEGREES);
        this.name = createInput("Name");
        this.confirm = createButton("Confirm");
        //this.reset = createButton("Reset");
    }

    display(){
        this.name.position(width/2-100,height/2);
        this.confirm.position(width/2-50,height/2+30);
        //this.reset.position(10,10);

        this.confirm.mousePressed(()=>{
            this.name.hide();
            this.confirm.hide();
            player.name = this.name.value();
            playerCount++;
            player.index = playerCount;
            player.update(playerCount,gameState);

            this.greeting = createElement('h2');
            this.greeting.html("Hello "+player.name+"!");
            this.greeting.position(300,200);
        });

    }

    reset(){
        player.update(0,0);
        database.ref('players').remove();
    }

    arc(){
        arc(width/2,height/2,20,20,loadingAngle,loadingAngle+90);
    }


}