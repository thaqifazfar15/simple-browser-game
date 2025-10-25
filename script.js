<canvas id="myCanvas" width="200" height="100" style="border:1px solid black;">
</canvas>


const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.fillRect(0, 0, 150, 75);
