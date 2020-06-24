import { drawCanvas } from './canvasDiagram.js';
import { drawCircle } from './canvasCircle.js';

drawCanvas(150, '#01AAAA');
drawCanvas(175, '#FBCF71');
drawCanvas(200, '#1F7BB6');

drawCircle('#01AAAA', 50, 8);
drawCircle('#FBCF71', 40, 20);
drawCircle('#1F7BB6', 55, 0);

fillTable('affTable');
fillTable('signTable');
fillTable('commisionTable');

let h = document.body.scrollHeight;
document.getElementById('tools_item').style.height = h +'px';

async function fillTable(id) {
    let i = 1;
    let response = await fetch(`../JSON/sign.json`);
    let signups = await response.json();
    let table = document.getElementById(id);

    for (let j = 0; j < signups.length; j++) {
        let row = table.insertRow(i);
        row.insertCell(0).innerHTML = signups[j].id;
        row.insertCell(1).innerHTML = signups[j].username;
        row.insertCell(2).innerHTML = signups[j].profit;
        row.insertCell(3).innerHTML = signups[j].commision;
        row.insertCell(4).innerHTML = `<i class="fa fa-navicon"></i>`;
        i++;
    }; 
};