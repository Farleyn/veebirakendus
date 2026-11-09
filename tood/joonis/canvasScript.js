function joon(){
    const canvas = document.getElementById('canvas'); // määrame canvas element
    if(canvas.getContext){
        let tx = canvas.getContext('2d'); // 2d tasand
        tx.beginPath();
        tx.strokeStyle="blue";
        tx.lineWidth=2;
        tx.moveTo(50, 50); // alguspunkt
        tx.lineTo(200, 280);
        tx.stroke();
    }
}
function puhasta(){
    const canvas = document.getElementById('canvas');
    if(canvas.getContext){
        let tx = canvas.getContext('2d');
        tx.clearRect(0, 0, 400, 400);
    }
}
function kolmnurk(){
    const canvas = document.getElementById('canvas'); // määrame canvas element
    if(canvas.getContext){
        let tx = canvas.getContext('2d'); // 2d tasand
        tx.beginPath();
        tx.strokeStyle="black";
        tx.fillStyle="red";
        tx.lineWidth=2;
        tx.moveTo(50, 50); // alguspunkt
        tx.lineTo(200, 280);
        tx.lineTo(30, 350);
        tx.lineTo(50, 50);
        tx.fill();
        tx.stroke();
    }
}
function ristkylik() {
    const canvas = document.getElementById('canvas');
    const l = document.getElementById('laius');
    const k = document.getElementById('korgus');

    if (canvas.getContext) {
        let tx = canvas.getContext('2d');

        tx.clearRect(0, 0, canvas.width, canvas.height);

        tx.fillStyle = "yellow";
        tx.strokeStyle = "black";
        tx.lineWidth = 2;

        tx.fillRect(50, 150, Number(l.value), Number(k.value));
        tx.strokeRect(50, 150, Number(l.value), Number(k.value));
    }
}
function ring() {
    const canvas = document.getElementById('canvas');
    const r = document.getElementById('raadius');

    if (canvas.getContext) {
        let tx = canvas.getContext('2d');

        tx.clearRect(0, 0, canvas.width, canvas.height);

        tx.beginPath();

        tx.arc(100, 100, Number(r.value), 0, 2 * Math.PI);

        tx.fillStyle = "yellow";
        tx.strokeStyle = "black";
        tx.lineWidth = 2;

        tx.fill();
        tx.stroke();
    }
}
function pilt() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        let tx = canvas.getContext('2d');
        let img = new Image();
        img.src = 'https://picsum.photos/200/300?random=1';
        img.onload = function () {
            tx.drawImage(img, 100, 50);
        }
    }
}
function ratas() {
    const canvas = document.getElementById('canvas');

    if (canvas.getContext) {
        let tx = canvas.getContext('2d');

        tx.beginPath();
        tx.arc(140, 300, 25, 0, 2 * Math.PI);

        tx.fillStyle = "gray";
        tx.strokeStyle = "black";
        tx.lineWidth = 3;

        tx.fill();
        tx.stroke();
    }
}
function ratas2() {
    const canvas = document.getElementById('canvas');

    if (canvas.getContext) {
        let tx = canvas.getContext('2d');

        tx.beginPath();
        tx.arc(260, 300, 25, 0, 2 * Math.PI);

        tx.fillStyle = "gray";
        tx.strokeStyle = "black";
        tx.lineWidth = 3;

        tx.fill();
        tx.stroke();
    }
}
function kere() {
    const canvas = document.getElementById('canvas');

    if (canvas.getContext) {
        let tx = canvas.getContext('2d');

        tx.fillStyle = "gray";
        tx.strokeStyle = "black";
        tx.lineWidth = 3;

        tx.fillRect(90, 175, 220, 100);
        tx.strokeRect(90, 175, 220, 100);
    }
}
function kirst() {
    const canvas = document.getElementById('canvas');

    if (canvas.getContext) {
        let tx = canvas.getContext('2d');

        tx.fillStyle = "brown";
        tx.strokeStyle = "black";
        tx.lineWidth = 3;

        tx.fillRect(110, 135, 180, 40);
        tx.strokeRect(110, 135, 180, 40);
    }
}
function tuled() {
    const canvas = document.getElementById('canvas');

    if (canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.moveTo(310, 225);
        tx.lineTo(390, 195);
        tx.lineTo(390, 255);
        tx.closePath();
        tx.fillStyle = "yellow";
        tx.strokeStyle = "orange";
        tx.lineWidth = 3;
        tx.fill();
        tx.stroke();
        tx.beginPath();
        tx.strokeStyle = "orange";
        tx.lineWidth = 2;
        tx.moveTo(310, 225);
        tx.lineTo(390, 205);
        tx.moveTo(310, 225);
        tx.lineTo(390, 225);
        tx.moveTo(310, 225);
        tx.lineTo(390, 245);
        tx.stroke();
    }
}
function kuld() {
    const canvas = document.getElementById('canvas');

    if (canvas.getContext) {
        let tx = canvas.getContext('2d');

        tx.fillStyle = "gold";
        tx.strokeStyle = "orange";
        tx.lineWidth = 2;

        tx.beginPath();
        tx.arc(130, 132, 7, 0, 2 * Math.PI);
        tx.fill();
        tx.stroke();

        tx.beginPath();
        tx.arc(158, 136, 7, 0, 2 * Math.PI);
        tx.fill();
        tx.stroke();

        tx.beginPath();
        tx.arc(186, 133, 7, 0, 2 * Math.PI);
        tx.fill();
        tx.stroke();

        tx.beginPath();
        tx.arc(214, 134, 7, 0, 2 * Math.PI);
        tx.fill();
        tx.stroke();

        tx.beginPath();
        tx.arc(242, 132, 7, 0, 2 * Math.PI);
        tx.fill();
        tx.stroke();

        tx.beginPath();
        tx.arc(270, 135, 7, 0, 2 * Math.PI);
        tx.fill();
        tx.stroke();
    }
}