
var pogrub = document.querySelectorAll("p .pogrub");

function animateLines() {
    const lines = document.querySelectorAll('.hr-line');
    lines.forEach(line => {
      line.classList.add('animate');
      line.addEventListener('animationend', () => {
        line.classList.remove('animate');
      }, { once: true });
    });
    const lines2 = document.querySelectorAll('.hr-line2');
    lines2.forEach(line => {
        line.classList.add('animate2');
        line.addEventListener('animationend', () => {
          line.classList.remove('animate2');
        }, { once: true });
      });
  };






const canvas = document.getElementById('pongCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
canvas.width = 1000;
canvas.height = 500;
const cw = canvas.width;
const ch = canvas.height;
const ballSize = 20;
let ballX = cw / 2 - ballSize / 2;
let ballY = ch / 2 - ballSize / 2;

const paddleHeight = 100;
const paddleWidth = 20;

let player1X = 70;
let player1Y = 200;

let player2X = 910;
let player2Y = 200;

const lineWidth = 6;
const lineHeight = 16;

let ballSpeedX = 2;
let ballSpeedY = 2;

let player1Score = 0;
let player2Score = 0;

let gameRunning = false

function player1() {
  ctx.fillStyle = 'aqua';
  ctx.fillRect(player1X, player1Y, paddleWidth, paddleHeight);
}

function player2() {
  ctx.fillStyle = 'aquamarine';
  ctx.fillRect(player2X, player2Y, paddleWidth, paddleHeight);
}

function ball() {
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(ballX, ballY, ballSize, ballSize);

  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if (ballY <= 0 || ballY + ballSize >= ch) {
    ballSpeedY = -ballSpeedY;
  }

  if (ballX <= 0) {
    player2Score++;
    resetBall();
  } else if (ballX + ballSize >= cw) {
    player1Score++;
    resetBall();
  }

  if (ballX <= player1X + paddleWidth && ballY + ballSize >= player1Y && ballY <= player1Y + paddleHeight) {
    ballSpeedX = -ballSpeedX;
    speedUp();
  }

  if (ballX + ballSize >= player2X && ballY + ballSize >= player2Y && ballY <= player2Y + paddleHeight) {
    ballSpeedX = -ballSpeedX;
    speedUp();
  }
}




function table() {
  ctx.fillStyle = 'dimgrey';
  ctx.fillRect(0, 0, cw, ch);

  for (let linePosition = 20; linePosition < ch; linePosition += 30) {
        ctx.fillStyle = "rgb(205, 230, 255)"
        ctx.fillRect(cw / 2 - lineWidth / 2, linePosition, lineWidth, lineHeight)
      }

}

const topCanvas = canvas.offsetTop;

function player1Position(e) {
  player1Y = e.clientY - topCanvas - paddleHeight / 2;
  if (player1Y >= ch - paddleHeight) {
    player1Y = ch - paddleHeight;
  }
  if (player1Y <= 0) {
    player1Y = 0;
  }
}


function player2Position() {

const middlePaddel= player2Y + paddleHeight / 2 ;
const middleBall = ballY + ballSize / 2;
if (ballX > 500) { 
  
  if (middlePaddel - middleBall > 200) {
    player2Y -= 24; 
      
  } else if (middlePaddel - middleBall > 50) {
    player2Y -= 10;
  }
 
  else if (middlePaddel - middleBall < -200) {
    player2Y += 24;
  } else if (middlePaddel - middleBall < -50) {
    player2Y += 10;
  }
 }

if (ballsX <= 500 && ballsX > 100) {
  if (middlePaddel - middleBall > 100) {
    player2Y -= 3;
  } 
if (middlePaddel - middleBall < -100) {
    player2Y += 3;
  }
}

if (player2Y >= ch - paddleHeight) {
  player2Y = ch - paddlelHeight
}

if (player2Y <= 0) {
  player2Y = 0;
}
}

function speedUp() {
  if (ballSpeedX > 0 && ballSpeedX <= 16) {
    ballSpeedX += 1;
  } else if (ballSpeedX < 0 && ballSpeedX >= -16) {
    ballSpeedX -= 1;
  }

  if (ballSpeedY > 0 && ballSpeedY <= 16) {
    ballSpeedY += 1;
  } else if (ballSpeedY < 0 && ballSpeedY >= -16) {
    ballSpeedY -= 1;
  }
}

function resetBall() {
  ballX = cw / 2 - ballSize / 2;
  ballY = ch / 2 - ballSize / 2;
  ballSpeedX = 2;
  ballSpeedY = 2;
}

function drawScores() {
  ctx.font = "30px Arial";
  ctx.fillStyle = "#ffffff";
   if (player2Score==5) {
    alert ("Przegrałeś ze sztuczną inteligencją!");
     player1Score=0;
     player2Score=0;

  } else if (player1Score==5) {
    alert ("Gratulacje użytkowniku, wygrałeś!");
     player1Score=0; 
     player2Score=0;
  }
}

function aiPosition() {
     
  const middlePaddel= aiY + paddleHeight / 2 ;
  const middleBalls = ballsY + ballsSize / 2;
  if (ballsX > 500) { 
    
    if (middlePaddel - middleBalls > 200) {
      aiY -= 24; 
        
    } else if (middlePaddel - middleBalls > 50) {
      aiY -= 10;
    }
   
    else if (middlePaddel - middleBalls < -200) {
      aiY += 24;
    } else if (middlePaddel - middleBalls < -50) {
      aiY += 10;
    }
   }

  if (ballsX <= 500 && ballsX > 100) {
    if (middlePaddel - middleBalls > 100) {
      aiY -= 3;
    } 
if (middlePaddel - middleBalls < -100) {
      aiY += 3;
    }
  }

  if (aiY >= ch - paddelHeight) {
    aiY = ch - paddelHeight
  }

  if (aiY <= 0) {
    aiY = 0;
  }
}

function drawScores() {
  ctx.font = "30px Arial";
  ctx.fillStyle = "#ffffff";
  ctx.fillText("Player: " + player1Score, 50, 50);
  ctx.fillText("AI: " + player2Score, cw - 200, 50); 
}

function drawScores2() {
  ctx.font = "30px Arial";
  ctx.fillStyle = "#ffffff";
   if (player2Score==5) {
    alert ("Przegrałeś ze sztuczną inteligencją!");
     player1Score=0;
     player2Score=0;

  } else if (player1Score==5) {
    alert ("Gratulacje użytkowniku, wygrałeś!");
     player1Score=0; 
     player2Score=0;
  }
}

function startGame() {
  gameRunning = true;
  startButton.disabled = true; // Disable the button after starting the game
  stopButton.disabled = false; 
  drawBall(); // Draw the ball when the game starts
  draw(); // Start the game loop
}

function stopGame() {
  startButton.disabled = false; // Enable the start button
  stopButton.disabled = true;
  gameRunning = false;
  clearCanvas(); // Clear the canvas when the game stops
}

function drawBall() {
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(ballX, ballY, ballSize, ballSize);
}

function moveBall() {
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if (ballY <= 0 || ballY + ballSize >= canvas.height) {
      ballSpeedY = -ballSpeedY;
  }

  if (ballX <= 0 || ballX + ballSize >= canvas.width) {
      ballSpeedX = -ballSpeedX;
  }
}

function draw() {
  if (gameRunning) {
    table();
    player1();
    player2();
    ball();
    drawScores2()
    drawScores();
    player2Position();
    clearCanvas();
    moveBall();
    drawBall();
    requestAnimationFrame(draw);
  }
}


function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

startButton.addEventListener('click', () => {
  startGame();
  startButton.disabled = true; // Disable the button after starting the game
  stopButton.disabled = false; // Enable the stop button
});

stopButton.addEventListener('click', () => {
  stopGame();
  startButton.disabled = false; // Enable the start button
  stopButton.disabled = true; // Disable the stop button
});


setInterval(draw, 1000 / 60);

function togglePause() {
  gamePaused = !gamePaused;
}

canvas.addEventListener("mousemove", player1Position);
canvas.addEventListener("mousemove", player2Position);
window.addEventListener('keydown', function (e) {
  if (e.keyCode === 32) {
    togglePause();
  }
});