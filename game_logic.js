
let Total_score = 0;

// If target shot gain point, if not then penalty

const image = document.getElementById("img_click");
const score_show = document.getElementById("score");

// const sound_score = new Audio("mixkit-unlock-game-notification-253.wav")

image.addEventListener('click', () => {
    Total_score++; 
    score_show.textContent = Total_score;
    const sound = new Audio("mixkit-unlock-game-notification-253.wav");
    sound.play();
});


{
// Create the box
const box = document.createElement('div');
box.style.width = '40px';
box.style.height = '40px';
box.style.border = '2px solid black';
box.style.position = 'absolute';
box.style.pointerEvents = 'none';
document.body.appendChild(box);

// Track mouse and center box on cursor
document.addEventListener('mousemove', (e) => {
  const boxWidth = 40;
  const boxHeight = 40;

  box.style.left = (e.pageX - boxWidth / 2) + 'px';
  box.style.top = (e.pageY - boxHeight / 2) + 'px';
});
}


const ctx = canvas.getContext('2d')
const img = new Image()
img.src = "tree.jpg"

const imgX = 200;
const imgY = 150;
const imgWidth = 100;
const imgHeight = 100;

img.onload = () => {
  ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight);
};
