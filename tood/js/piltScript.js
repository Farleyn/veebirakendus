// juhuslik pilt - mida võetakse massiivist
function juhuslikPilt(){
    // massiiv pildifailidest
    pildid=[
        '../images/smile.png',
        '../images/neutral.png',
        '../images/kurb.png',
        '../images/lill.png'
    ];

    const pilt=pildid[Math.floor(Math.random()*pildid.length)];
    let randomPilt=document.getElementById('randomPilt');
    // Math.floor - ümardab täisarvuni
    // Math.random - juhuslik arv

    randomPilt.src=pilt;

}

function selectValik(){

    let vastus=document.getElementById('vastus');
    let valik=document.getElementById('valik');
    let randomPilt=document.getElementById('randomPilt');

    if(randomPilt.getAttribute('src')==valik.value){
        vastus.innerHTML="õige!";
        vastus.style.color="green";
    } else {
        vastus.innerHTML="vale!";
        vastus.style.color="red";
    }
}

function radioValik(){
    let piltValik=document.getElementsByName("piltValik");
    let valitudPilt=document.getElementById("valitudPilt");

    for(let i=0;i<piltValik.length;i++){
        if(piltValik[i].checked){
            valitudPilt.src=piltValik[i].value;
        } else{
            // alert('tee oma valiku');
        }
    }
}