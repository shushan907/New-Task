import { drawCanvas } from './canvasDiagram.js';
import { drawCircle } from './canvasCircle.js';

drawCanvas(150, '#01AAAA');
drawCanvas(175, '#FBCF71');
drawCanvas(200, '#1F7BB6');

drawCircle('#01AAAA', 50, 8);
drawCircle('#FBCF71', 40, 20);
drawCircle('#1F7BB6', 55, 0);



/*function fillTable() {
    let i = 1;
    let j = 0;
    let table = document.getElementById("table");
    for (j; j < 7; j++) {
        let row = table.insertRow(i);
        row.insertCell(j).innerHTML = "NEW CELL1";
    }
}*/
