const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const imageSources = [
  'img/landmark-1.png',
  'img/landmark-2.png',
  'img/landmark-3.png'
];

let activeImages = [];
let velocity = 1;
let totalScore = 0;
let missCounter = 0;
let gameOver = false;

class MovingImage {
  constructor(src, x, y, width, height, speed) {
    this.img = new Image();
    this.img.src = src;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.clicked = false;
  }

  update() {
    this.x -= this.speed;
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  isOffScreen() {
    return this.x + this.width < 0;
  }

  wasClicked(clickX, clickY) {
    return (
      !this.clicked &&
      clickX >= this.x &&
      clickX <= this.x + this.width &&
      clickY >= this.y &&
      clickY <= this.y + this.height
    );
  }
}

function drawWindowSeat() {
  ctx.fillStyle = "darkSlateGray";
  ctx.fillRect(80, 355, 10, -15);

  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.fillStyle = "white";
  ctx.moveTo(50, 350);
  ctx.lineTo(550, 350);
  ctx.lineTo(550, 50);
  ctx.quadraticCurveTo(150, 40, 50, 250);
  ctx.lineTo(50, 350);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 8;
  ctx.ellipse(320, 45, 40, 10, -0.15, Math.PI, 0);
  ctx.stroke();
  ctx.closePath();
}

const grassImg = new Image();
grassImg.src = 'img/grass.png';

let grassX1 = 0;
let grassX2 = canvasWidth;
const grassY = canvasHeight - 100;
let grassSpeed = velocity;

function drawMovingGrass(velocity) {
  ctx.drawImage(grassImg, grassX1, grassY, canvasWidth, 50);
  ctx.drawImage(grassImg, grassX2, grassY, canvasWidth, 50);

  grassX1 -= velocity;
  grassX2 -= velocity;

  if (grassX1 + canvasWidth <= 0) {
    grassX1 = grassX2 + canvasWidth;
  }
  if (grassX2 + canvasWidth <= 0) {
    grassX2 = grassX1 + canvasWidth;
  }
}

function animate() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  ctx.fillStyle = 'darkSlateGray';
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(50, 350);
  ctx.lineTo(550, 350);
  ctx.lineTo(550, 50);
  ctx.quadraticCurveTo(150, 40, 50, 250);
  ctx.lineTo(50, 350);
  ctx.closePath();
  ctx.clip();

  activeImages = activeImages.filter(img => {
    if (img.isOffScreen() && !img.clicked) {
      missCounter++;
      console.log("Missed! Total misses:", missCounter);
      document.getElementById('missDisplay').innerText = 3 - missCounter;
      if (missCounter >= 3) {
        gameOver = true;
        alert("Game Over! You missed 3 images.");
      }
      return false;
    }
    return !img.isOffScreen();
  });

  drawWindowSeat();
  drawMovingGrass(velocity);

  activeImages.forEach((imgObj) => {
    imgObj.update();
    imgObj.draw();
  });

  ctx.restore();

  if (!gameOver) {
    requestAnimationFrame(animate);
  }
}

function spawnImage(speed) {
  if (gameOver || activeImages.length >= 3) return;

  const src = imageSources[Math.floor(Math.random() * imageSources.length)];
  const y = Math.random() * (canvasHeight - 200); // lowered max height
  const newImg = new MovingImage(src, canvasWidth, y, 100, 75, speed);
  activeImages.push(newImg);
}


function startSpawning() {
  function scheduleNextSpawn() {  
    if (gameOver) return;

    spawnImage(velocity);

    const baseDelay = 1000 + Math.random() * 500;
    const delay = baseDelay / velocity + Math.random() * 700;

    setTimeout(scheduleNextSpawn, delay);
  }

  scheduleNextSpawn();
}


canvas.addEventListener('click', function(event) {
  if (gameOver) return;

    const sound = new Audio("click-sound.mp3");
    sound.play();
  const rect = canvas.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const clickY = event.clientY - rect.top;

  activeImages.forEach((imgObj) => {
    if (imgObj.wasClicked(clickX, clickY)) {
      imgObj.clicked = true;
      totalScore += 100;

      if (totalScore % 1000 === 0) {
        const sound_t = new Audio("thousand_sound_score.wav");
        sound_t.play();
        velocity += 1;
      }
    }
  });
    document.getElementById('scoreDisplay').innerText = totalScore;
});

animate();
startSpawning();
