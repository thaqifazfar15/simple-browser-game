<<<<<<< HEAD
<canvas id="myCanvas" width="200" height="100" style="border:1px solid black;">
</canvas>


const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.fillRect(0, 0, 150, 75);
=======
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d'); // 2D rendering context

ctx.fillStyle = 'blue'; // Set fill color
ctx.fillRect(0, -10, 150, 100); // Draw a filled rectangle (x, y, width, height)

ctx.beginPath();
ctx.arc(200, 150, 50, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
ctx.fillStyle = 'red';
ctx.fill();
ctx.closePath();
>>>>>>> 5ad453f0b29c9b61b0c118b98c1fe9d182b0dadc
