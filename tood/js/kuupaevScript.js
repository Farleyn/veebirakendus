const now=new Date();

const paev=now.getDate(); // tagastab päeva
console.log("Tänane paev on " + paev + " päev");

const kuu=now.getMonth() + 1; // tagastab kuu 0-11
console.log("Täna on " + kuu + " kuu");

const aasta=now.getFullYear(); // tagastab aasta
console.log("Täna on " + aasta + " aasta");

const nadalapaev=now.getDay(); // 0-6, kus on 0-pühapaev
console.log("Nädalapäeva number on " + nadalapaev);

function tana(){
    let vastus=document.getElementById("vastus");
    vastus.innerHTML="Täna on "+paev+"."+kuu+"."+aasta;
}

// lisa veel getHours() getMinutes()

const tunnid=now.getHours();
const minutid=now.getMinutes();
console.log("Praegu on "+ tunnid + ":" + minutid)

function kellaAeg(){
    let kellaaeg = document.getElementById("kellaaeg");
    kellaaeg.innerHTML="Praegu on " + tunnid + ":" + minutid;
}

// mitu päeva konstultatsiooni nädalani
const konstultatsioon=new Date(2026, 10, 2); // 02.11.2026
const vahe=konstultatsioon.getTime()-now.getTime();
const konspaev=vahe/(1000*60*60*24); //sekundid*minutid*tunnid*päevad

// mitu päeva sünnipäevani
const synnipaev1=new Date(2026, 10, 1); // 01.11.2026
const vahe1=synnipaev1.getTime()-now.getTime();
const synnpaevani=vahe1/(1000*60*60*24); //sekundid*minutid*tunnid*päevad

console.log("Konstultatsiooni nädalani on "+konspaev.toFixed(0)+" päeva");
console.log("Sünnipäevani on "+synnpaevani.toFixed(0)+" päeva");

function konspaev1(){
    let konspaev1=document.getElementById("konspaev");
    konspaev1.innerHTML="Konstultatsiooni nädalani on "+konspaev.toFixed(0)+" päeva";
}

function synnipaev(){
    let synnipaev=document.getElementById("synnipaev");
    synnipaev.innerHTML="Sünnipäevani on "+synnpaevani.toFixed(0)+" päeva";
}