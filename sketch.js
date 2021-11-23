var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var database;
var camera, cameraImg, carkey, carkeyImg, apple, appleImg, wallet, walletImg, phone, phoneImg;
var walletStatus = true
var form, player, game;


function preload(){
cameraImg = loadImage ("images/camera.png")
carkeyImg = loadImage ("images/carkey.png")
walletImg = loadImage ("images/wallet.png")
phoneImg = loadImage ("images/phone.png")
appleImg = loadImage ("images/apple.png")

backgroundImage = loadImage ("images/gamelevel.jpeg")
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){
    textSize(150)
    text("Game End",displayWidth/2,displayHeight/2)
    game.end()
    

}
if(mousePressedOver(wallet))    {
  wallet.destroy()
  database.ref("/").update({
    wallet:false
  })
}
database.ref("/").on("value",function(data){
  walletStatus=data.val()
  console.log(walletStatus)
})
if (walletStatus===false){
  wallet.destroy()
}
//text(mouseX+","+mouseY,mouseX,mouseY)
}