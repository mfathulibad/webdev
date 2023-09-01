var monkey = document.getElementById('monkey');
var obstacle = document.getElementById('obstacle');
var counter = 0;

function jump(){
    if(monkey.classList != "animate"){
        monkey.classList.add("animate");
    }
    setTimeout(function(){
        monkey.classList.remove("animate");
        counter++;
    },500);
}

var monkey = document.getElementById("monkey");
var obstacle = document.getElementById("obstacle");

function checkCollision() {
  var monkeyRect = monkey.getBoundingClientRect();
  var obstacleRect = obstacle.getBoundingClientRect();

  if (
    monkeyRect.right > obstacleRect.left &&
    monkeyRect.left < obstacleRect.right &&
    monkeyRect.bottom > obstacleRect.top &&
    monkeyRect.top < obstacleRect.bottom
  ) {
    console.log("Collision detected!");
    alert("Collison Detected" + counter);
    counter = 0;
  }
}

// var gameLoopInterval = setInterval(checkCollision, 16);