function nimiLugemineKastist(){
    let vastus1 = document.getElementById("vastus1");
    let nimi = document.getElementById("nimi");

    vastus1.innerHTML = "Sisestatud nimi on: " + nimi.value;
    vastus1.style.backgroundColor="lightgreen";

    return nimi.value;
}

function radioValik(){
    let vastus2=document.getElementById("vastus2");
    let spotify=document.getElementById("spotify");
    let soundcloud=document.getElementById("soundcloud");
    let raadio=document.getElementById("raadio");
    let vinyl=document.getElementById("vinüülplaat");

    let valik="";
    if (spotify.checked){
        valik=spotify.value;
    } else if(raadio.checked){
        valik=raadio.value;
    } else if(vinyl.checked){
        valik=vinyl.value;
        } else if(soundcloud.checked){
        valik=soundcloud.value;
    } else{
        valik="Palun vali midagi";
    }
    vastus2.innerHTML="Valik: " + valik;

    return valik;
}

function checkboxValik(){
    let vastus3=document.getElementById("vastus3");
    let systemofdown=document.getElementById("systemofdown");
    let metallica=document.getElementById("metallica");
    let hauntedmound=document.getElementById("hm");

    let valik2="";
    if(systemofdown.checked){
        valik2+=systemofdown.value + ', <br>';
    }
    if(metallica.checked){
        valik2+=metallica.value + ', <br>';
    }
    if(hauntedmound.checked){
        valik2+=hauntedmound.value + ', <br>';
    }
    if(valik2==""){
        valik2="Palun vali midagi";
    }
    vastus3.innerHTML="Lemmikbändid: " + valik2;
    vastus3.style.backgroundColor="lightblue";

    return valik2;
}
//kasutab teisi funktsioone
function naitaKoike(){
    let vastudKoik=document.getElementById("vastusKoik");
    let nimi=nimiLugemineKastist();
    let valik=radioValik();
    let valik2=checkboxValik();
    let tund=rangeValik();

    vastusKoik.innerHTML="Sinu nimi on: " +nimi+'<br>'+
        'Sinu lemmikud on: ' + valik2 + '<br>'+
        'Sa kasutad '+valik +'<br>' +
        'Sa kuuled ' +tund+ ' tundi<br>';
        'Sa valisid '+stiil;
}
function puhasta(){
    vastus1.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastusKoik.innerHTML="";
    vastus4.innerHTML="";
    vastus5.innerHTML="";
}

function rangeValik(){
    let vastus4=document.getElementById("vastus4");
    let tund = document.getElementById("tund");

    vastus4.innerHTML="Sa kuuled muusikat:" + tund.value + "tundi";

    return tund.value;
}

function selectValik(){
    let vastus5=document.getElementById("vastus5");
    let stiil=document.getElementById("stiil");

    if(stiil.selectedIndex!==0){
        vastus5.innerHTML="Lemmikmuusikastiil on: " + stiil.value;
    } else{
        vastus5.innerHTML="Palun vali midagi";
    }

    return stiil.value;
}