const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');


// draw black canvas
ctx.fillStyle = 'darkSlateGray'; // Set fill color
ctx.fillRect(0, 0, 600, 400); // Draw a filled rectangle (x, y, width, height)


// begin drawing windows seat
ctx.beginPath();
ctx.strokeStyle = "white"
ctx.moveTo(50, 350); // (x , y)
ctx.fillStyle = "white"
ctx.lineTo(550, 350);
ctx.lineTo(550, 50);
ctx.lineTo(550, 50);
ctx.quadraticCurveTo(150, 40, 50, 250);
ctx.lineTo(50, 350); 
ctx.fill()
ctx.stroke();
ctx.closePath()

ctx.fillStyle = "darkSlateGray";
ctx.fillRect(80, 355, 10, -15); 

ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.lineWidth = 8;

// Draw an elliptical arc
ctx.ellipse(
  320, 45,    
  40, 10,       
  -0.15,            
  Math.PI,  
  0   
);
ctx.stroke();
ctx.closePath();

const clockTower = new Image();
clockTower.src = 'img/pixil-frame-0-6.png'; // Replace with your image URL

// Draw image after it loads
clockTower.onload = function() {
    ctx.drawImage(clockTower, 50, 50, 200, 150); // x, y, width, height
};

const coordsDisplay = document.getElementById('coords');
canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      coordsDisplay.textContent = `x: ${x}, y: ${y}`;
    });

    canvas.addEventListener('click', (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      console.log(`Clicked at: x=${x}, y=${y}`);

      ctx.fillStyle = 'red';
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fill();
    });