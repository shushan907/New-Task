let count = 0;
export function drawCanvas (z, color) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    var i;
    var amplitude = 90;
    var width = c.width;
    var height = c.height / 2;
    var step = 1;
    var frequency = 4;
    var j = 10;
    if(count==0) {
        (function() {
            for (let i = 0; i < 8; i++) {
                ctx.moveTo(2, j);
                ctx.lineTo(width, j);
                j = j + 30;
                ctx.strokeStyle = '#222222';
                ctx.stroke();
            }
            count++;
        })();
    };
    ctx.moveTo(0, height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, height);
    var c = width / Math.PI / (frequency * 1);

    for (i = 0; i < width + z; i += step) {
    var x = amplitude * Math.sin(i / c);
    ctx.lineTo(i-z, height + x);
    }

    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
};
