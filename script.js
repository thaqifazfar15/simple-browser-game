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


// Stroke it (do the drawing)
ctx.stroke();
