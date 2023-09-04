var monkey = document.getElementById('monkey');
var obstacle = document.getElementById('obstacle');
const scoreElement = document.getElementById('score');

let startTime = 0;
let score = 0;
let isRunning = false;

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

function updateTimer() {
    if (startTime == 0) {
        startTime = Date.now();
    }
    
    const currentTime = Date.now();
    const elapsedTimeInSeconds = Math.floor((currentTime - startTime) / 1000);
    
    score = elapsedTimeInSeconds;
    scoreElement.innerHTML = `Score: ${score}`;
}

function gameLoop() {
    updateTimer();
}