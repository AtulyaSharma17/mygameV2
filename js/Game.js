class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  } 

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    carkey = createSprite(420,456);
    carkey.addImage (carkeyImg)
    carkey.scale = 0.1
    carkey.rotation=270;

   camera = createSprite(1120,547);
    camera.addImage (cameraImg)
    camera.scale = 0.14
    camera.rotation=145;

    apple = createSprite(1030,290);
    apple.addImage (appleImg)
    apple.scale = 0.07
    apple.rotation=20;


    wallet = createSprite(150,260);
    wallet.addImage (walletImg)
    wallet.scale = 0.06
    wallet.rotation=20;


    
    phone = createSprite(790,240);
    tint(150)
    phone.addImage (phoneImg)
    
    phone.scale = 0.14
    phone.rotation=25;
   

    
    
  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    
    //player.getCarsAtEnd();
    

    if(allPlayers !== undefined){
      //var display_position = 100;
      //background(ground)
      image(backgroundImage,0,0,displayWidth, displayHeight)
      //index of the array
     // var index = 0;

      //x and y position of the cars
      //var x = 175;
      //var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        //index = index + 1 ;

        //position the cars a little away from each other in x direction
       // x = x + 200;
        //use data form the database to display the cars in y direction
       // y = displayHeight - allPlayers[plr].distance;
        //cars[index-1].x = x;
        //cars[index-1].y = y;

        //if (index === player.index){
        //  fill("Cyan")
         // rectMode(CENTER)
         // rect(x,y,70,70)
         // textAlign(CENTER)
         // textSize(25)
         // text(player.name,x,y+70)
         // cars[index - 1].shapeColor = "red";
         // camera.position.x = displayWidth/2;
         // camera.position.y = cars[index-1].y
       // }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      
      }
      drawSprites();
    }

   // if(keyIsDown(UP_ARROW) && player.index !== null){
      //player.distance += 10
     // player.update();

   // }

    // if(player.distance>3500){
    //   gameState = 2
    //   player.rank+=1;
    //  // Player.updateCarsAtEnd(player.rank)
    // }

   
  }

  end (){
    //console.log("Game Ended");
   // console.log(player.rank)
  }

}
