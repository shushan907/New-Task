import { drawCanvas } from './canvasDiagram.js';
import { drawCircle } from './canvasCircle.js';

drawCanvas(150,'#01AAAA',);
drawCanvas(175,'#FBCF71');
drawCanvas(200,'#1F7BB6');

drawCircle('#01AAAA', 0, 0.5);
drawCircle('#FBCF71', 1.5, 1.5);
drawCircle('#1F7BB6', 4.7, 2);

fillTable('affTable');
fillTable('signTable');
fillTable('commisionTable');

let height = document.body.scrollHeight;
document.getElementById('tools_item').style.height = height +'px';

async function fillTable(id) {
    let i = 1;
    let response = await fetch(`./JSON/sign.json`);
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
//-------------------------Event Listeners----------------------------
document.querySelector('.cliks').addEventListener('mouseover', () => {
    drawCanvas(175,'#2A2A2A');   
});

document.querySelector('.cliks').addEventListener('mouseout', () => {
    drawCanvas(175,'#FBCF71');
});

document.querySelector('.signUp').addEventListener('mouseover', () => {
    drawCanvas(150,'#2A2A2A');   
});

document.querySelector('.signUp').addEventListener('mouseout', () => {
    drawCanvas(150,'#01AAAA',);
});

document.querySelector('.pageView').addEventListener('mouseover', () => {
    drawCanvas(200,'#2A2A2A');   
});

document.querySelector('.pageView').addEventListener('mouseout', () => {
    drawCanvas(200,'#1F7BB6');
});

document.querySelector('.totalView').addEventListener('mouseover', () => {
    drawCircle('#2A2A2A', 1.5, 1.5);  
});

document.querySelector('.totalView').addEventListener('mouseout', () => {
    drawCircle('#FBCF71', 1.5, 1.5);
});

document.querySelector('.totelCliks').addEventListener('mouseover', () => {
    drawCircle('#2A2A2A', 4.7, 2); 
});

document.querySelector('.totelCliks').addEventListener('mouseout', () => {
    drawCircle('#1F7BB6', 4.7, 2);
});

document.querySelector('.totalSignups').addEventListener('mouseover', () => {
    drawCircle('#2A2A2A', 0, 0.5); 
});

document.querySelector('.totalSignups').addEventListener('mouseout', () => {
    drawCircle('#01AAAA', 0, 0.5);
});
