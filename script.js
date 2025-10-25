const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d'); // 2D rendering context

ctx.fillStyle = 'blue'; // Set fill color
ctx.fillRect(0, -10, 150, 100); // Draw a filled rectangle (x, y, width, height)

ctx.beginPath();
ctx.arc(200, 150, 50, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
ctx.fillStyle = 'red';
ctx.fill();
ctx.closePath();
