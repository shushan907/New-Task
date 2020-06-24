export function drawCircle(color, x, y) {
    var c = document.getElementById("myCanvas2");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(70, 70, 40, x, 2 * Math.PI - y);
    ctx.lineWidth = 15;
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.font = "30px serif";
    ctx.fillStyle = "#878686";
    ctx.fillText("50", 55, 80);
}
