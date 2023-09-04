var monkey = document.getElementById('monkey');
var obstacle = document.getElementById('obstacle');
const scoreElement = document.getElementById('score');

let isRunning = false;
let startTime = 0;
let score = 0;

function jump(){
    if(monkey.classList != "animate"){
        monkey.classList.add("animate");
    }
    setTimeout(function(){
        monkey.classList.remove("animate");
    },500);
}

function start(){
  if(isRunning == false){
    setInterval(gameLoop, 16);
    obstacle.classList.add("animate-obstacle");
  }
}

function gameOver(){
  isRunning = false;
  obstacle.classList.remove("animate-obstacle");

  console.log("Collision detected!");
  alert("Game Over, Your score is " + score);
  score = 0;
  startTime = 0

}


function checkCollision() {
  var monkeyRect = monkey.getBoundingClientRect();
  var obstacleRect = obstacle.getBoundingClientRect();

  if (
    monkeyRect.right > obstacleRect.left &&
    monkeyRect.left < obstacleRect.right &&
    monkeyRect.bottom > obstacleRect.top &&
    monkeyRect.top < obstacleRect.bottom
  ) {
    gameOver();
  }
}

function updateTimer() {
    if (startTime == 0) {
        startTime = Date.now(); // Mulai waktu saat pertama kali memanggil updateTimer()
    }
    
    const currentTime = Date.now();
    const elapsedTimeInSeconds = Math.floor((currentTime - startTime) / 1000);
    
    score = elapsedTimeInSeconds;
    scoreElement.innerHTML = `Score: ${score}`;
}

function gameLoop() {
    checkCollision();
    updateTimer();
}