var sans,sansImg
var heart,heartImg
var boneImg,blueBoneImg,upwardBoneImg
var wall1,wall2,wall3,wall4
var bttn1,bttn2,bttn3
var sansLife = 100,heartLife = 100
var gameState = "start"
var rand,rand2
var rnd = 1
var attack = 0
var obGroup
var playButton

function preload() {
  sansImg = loadImage("assets/sans.webp")
  heartImg = loadImage("assets/heart.png")
  bone = loadImage("assets/bone.webp")
  blueBoneImg = loadImage("assets/blue bone.png")
  upwardBoneImg = loadImage("assets/upward bone.webp")
  sans_won = loadImage('sans won.webp')
  meglovania= loadSound("meglovania.mp3")
}

function setup() {
  createCanvas(1000,800)
  frameRate(60)
  sans = createSprite(500,180,50,50)
  sans.addImage(sansImg)
  sans.scale = .5
  wall1 = createSprite(320,460,5,250)
  wall2 = createSprite(680,460,5,250)
  wall3 = createSprite(500,333,360,5)
  wall4 = createSprite(500,583,360,5)
  heart = createSprite(500,450,20,20)
  heart.addImage(heartImg)
  heart.scale = 0.02
  bttn = createImg("assets/fight button.png")
  bttn.position(90,540)
  bttn2 = createImg("assets/fight_button_blue.png")
  bttn2.position(400,540)
  bttn3 = createImg("assets/fight_button_red.png")
  bttn3.position(700,540)
  obGroup = new Group()
  playButton = createImg("images.png")
  playButton.position(900,50)
  playButton.size(50,50)
  playButton.mouseClicked(bgsPlay)
}


function draw() {
  background("black")
  if(keyDown(UP_ARROW)){
    heart.y = heart.y - 6
  }
  if(keyDown(DOWN_ARROW)){
    heart.y = heart.y + 6
  }
  if(keyDown(LEFT_ARROW)){
    heart.x = heart.x - 6
  }
  if(keyDown(RIGHT_ARROW)){
    heart.x = heart.x + 6
  }
  heart.bounceOff(wall1)
  heart.bounceOff(wall2)
  heart.bounceOff(wall3)
  heart.bounceOff(wall4)

  if(sansLife <= 0){
    sans.addImage(sans_won)
      swal({
        title: `Game Over`,
        text: "You won"+ "\n" +  "You escaped the Mountain",
        iman: "sans won.webp",
        imageSize: "100x100",
        confirmButtonText: "Thanks For Playing"
      });
  }


  push();
    fill("yellow");
    rect(450,  290, 100, 20);
    fill("red");
    rect(450,  290, sansLife, 20);
    noStroke();
    pop();

    bttn.mouseClicked(bttn1Press)
    bttn2.mouseClicked(bttn2Press)
    bttn3.mouseClicked(bttn3Press)

    if(sansLife <= 0){
      gameState = "end"
    }

  
      if(rnd === 2){
        spawnObstacle1()
        if(frameCount % 1000===0){
          rnd = rnd+1
        }
      }

      if(rnd === 4){
        spawnObstacle1()
        if(frameCount % 1000===0){
          rnd = rnd+1
        }
      }
      if(rnd === 6){
        spawnObstacle1()
        if(frameCount % 1000===0){
          rnd = rnd+1
        }
      }
      if(rnd === 8){
        spawnObstacle1()
        if(frameCount % 1000===0){
          rnd = rnd+1
        }
      }
      if(rnd === 10){
        spawnObstacle1()
        if(frameCount % 1000===0){
          rnd = rnd+1
        }
      }
      if(rnd === 12){
        spawnObstacle1()
        if(frameCount % 1000===0){
          rnd = rnd+1
        }
      }
      if(rnd === 14){
        spawnObstacle1()
        if(frameCount % 1000===0){
          rnd = rnd+1
        }
      }

    push();
    fill("red");
    rect(450,  600, 100, 20);
    fill("lime");
    rect(450,  600, heartLife, 20);
    noStroke();
    pop();
    

  drawSprites()
  
}

function bttn1Press(){
  sansLife = sansLife - 15
  rnd = rnd +1
}

function bttn2Press(){
  rand = Math.round(random(0,100))
  if(rand <= 60){
  sansLife = sansLife - 40
  }
  rnd = rnd +1
}

function bttn3Press(){
  rand2 = Math.round(random(0,100))
  if(rand2 <= 20){
  sansLife = sansLife - 75
  }
  rnd = rnd +1
}

function spawnObstacle1 (){
  if(frameCount% 20 === 0){
    var ob1 = createSprite(680,379,83,38)
    ob1.y= Math.round(random(379,560))
    ob1.addImage(upwardBoneImg)
    ob1.scale = 0.05
    ob1.velocityX = -4
    ob1.lifetime = 90
    if(ob1.bounce(wall1)){
      ob1.remove()
    }
    obGroup.add(ob1)
  }
  if(obGroup.isTouching(heart)){
    obGroup.destroyEach()
    heartLife = heartLife - 10
  }
  if(heartLife <= 0){
    obGroup.destroyEach()
    swal({
      title: `Game Over`,
      text: "You lost your soul"+ "\n" +  "sans took it",
      iman: "sans won.webp",
      imageSize: "100x100",
      confirmButtonText: "Thanks For Playing"
    });
  }
}
function bgsPlay(){
  if(!meglovania.isPlaying()){
  meglovania.play()
  }
}