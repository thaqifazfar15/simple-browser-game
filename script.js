const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d'); // 2D rendering context

ctx.fillStyle = 'black'; // Set fill color
ctx.fillRect(0, 0, 600, 400); // Draw a filled rectangle (x, y, width, height)

// ctx.beginPath();
// ctx.arc(200, 150, 50, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
// ctx.fillStyle = 'red';
// ctx.fill();
// ctx.closePath();


// begin drawing windows seat
ctx.beginPath();
ctx.strokeStyle = "white"
// Set start-point
ctx.moveTo(50, 350); // (x , y)

// Set sub-points
ctx.lineTo(550, 350);
ctx.lineTo(550, 50);
ctx.lineTo(550, 50);
ctx.quadraticCurveTo(150, 40, 50, 250);
ctx.lineTo(50, 350); 


// Stroke it (do the drawing)
ctx.stroke();
