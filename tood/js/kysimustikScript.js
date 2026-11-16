function nimiLugemineKastist(){
    let vastus1 = document.getElementById("vastus1");
    let nimi = document.getElementById("nimi");

    vastus1.innerHTML = "Sisestatud nimi on: " + nimi.value;
    vastus1.style.backgroundColor = "lightgreen";

    return nimi.value;
}

function radioValik(){
    let vastus2 = document.getElementById("vastus2");
    let spotify = document.getElementById("spotify");
    let soundcloud = document.getElementById("soundcloud");
    let raadio = document.getElementById("raadio");
    let vinyl = document.getElementById("vinüülplaat");

    let valik = "";

    if (spotify.checked){
        valik = spotify.value;
    } else if (raadio.checked){
        valik = raadio.value;
    } else if (vinyl.checked){
        valik = vinyl.value;
    } else if (soundcloud.checked){
        valik = soundcloud.value;
    } else {
        valik = "Palun vali midagi";
    }

    vastus2.innerHTML = "Valik: " + valik;

    return valik;
}

function radioValik1(){
    let yes = document.getElementById("yes");
    let no = document.getElementById("no");
    let vastus = document.getElementById("yesorno");

    if (yes.checked){
        vastus.innerHTML = "Sa kuulad raadiot!";
    } else if (no.checked){
        vastus.innerHTML = "Sa ei kuula raadiot!";
    }

    return vastus.innerHTML;
}

function checkboxValik(){
    let vastus3 = document.getElementById("vastus3");
    let systemofdown = document.getElementById("systemofdown");
    let metallica = document.getElementById("metallica");
    let hauntedmound = document.getElementById("hm");

    let valik2 = "";

    if (systemofdown.checked){
        valik2 += systemofdown.value + '<br>';
    }

    if (metallica.checked){
        valik2 += metallica.value + '<br>';
    }

    if (hauntedmound.checked){
        valik2 += hauntedmound.value + '<br>';
    }

    if (valik2 == ""){
        valik2 = "Palun vali midagi";
    }

    vastus3.innerHTML = "Lemmikbändid: " + valik2;
    vastus3.style.backgroundColor = "lightblue";

    return valik2;
}

function naitaKoike(){
    let vastusKoik = document.getElementById("vastusKoik");
    let nimi = nimiLugemineKastist();
    let valik = radioValik();
    let valik2 = checkboxValik();
    let tund = rangeValik();
    let stiil = selectValik();
    let yesorno = radioValik1();

    vastusKoik.innerHTML =
        "Sinu nimi on: " + nimi + '<br>' +
        "Sinu lemmikud on: " + valik2 + '<br>' +
        "Sa kasutad: " + valik + '<br>' +
        "Sa kuulad muusikat " + tund + " tundi päevas.<br>" +
        "Sinu lemmikmuusikastiil on: " + stiil + '<br>' +
        yesorno;
}

function puhasta(){
    document.getElementById("vastus1").innerHTML = "";
    document.getElementById("vastus2").innerHTML = "";
    document.getElementById("vastus3").innerHTML = "";
    document.getElementById("vastus4").innerHTML = "";
    document.getElementById("vastus5").innerHTML = "";
    document.getElementById("vastus9").innerHTML = "";
    document.getElementById("vastusKoik").innerHTML = "";
    document.getElementById("yesorno").innerHTML = "";
}

function rangeValik(){
    let vastus4 = document.getElementById("vastus4");
    let tund = document.getElementById("tund");

    vastus4.innerHTML = "Sa kuulad muusikat: " + tund.value + " tundi";

    return tund.value;
}

function selectValik(){
    let vastus5 = document.getElementById("vastus5");
    let stiil = document.getElementById("stiil");

    if (stiil.selectedIndex !== 0){
        vastus5.innerHTML = "Lemmikmuusikastiil on: " + stiil.value;
    } else {
        vastus5.innerHTML = "Palun vali midagi";
    }

    return stiil.value;
}

function raadiojaamvalik(){
    let vastus9 = document.getElementById("vastus9");
    let raadiojaam = document.getElementById("raadiojaam");

    vastus9.innerHTML = "Valitud jaama nimi on: " + raadiojaam.value;
}

$(document).ready(function(){

    $('.viga').hide();

    $('#muusikaForm').submit(function(event){

        var vigadeArv = 0;

        var andmed = $('.infokast').val();
        var kontroll = andmed.trim().length;

        if (kontroll < 1){
            $('.infokast').next().show();
            vigadeArv++;
        } else {
            $('.infokast').next().hide();
        }

        andmed = $('.email').val();

        if (valid_email(andmed)){
            $('.email').next().hide();
        } else {
            $('.email').next().show();
            vigadeArv++;
        }

        andmed = $('.valikuloend').val();

        if (andmed == "vali"){
            $('.valikuloend').next().show();
            vigadeArv++;
        } else {
            $('.valikuloend').next().hide();
        }

        var loendur = 0;

        $('#muusikaForm').find(':checkbox').each(function(){
            if ($(this).is(':checked')){
                loendur++;
            }
        });

        if (loendur == 0){
            $('.valikukast_viga').show();
            vigadeArv++;
        } else {
            $('.valikukast_viga').hide();
        }

        loendur = 0;

        $('#muusikaForm').find('input[name="platvorm"]:radio').each(function(){
            if ($(this).is(':checked')){
                loendur++;
            }
        });

        if (loendur == 0){
            $('.platvorm_viga').show();
            vigadeArv++;
        } else {
            $('.platvorm_viga').hide();
        }

        loendur = 0;

        $('#muusikaForm').find('input[name="raadioValik"]:radio').each(function(){
            if ($(this).is(':checked')){
                loendur++;
            }
        });

        if (loendur == 0){
            $('.raadio_viga').show();
            vigadeArv++;
        } else {
            $('.raadio_viga').hide();
        }

        andmed = $('#muusikafail').val();

        if (!andmed){
            $('#muusikafail').next().show();
            vigadeArv++;
        } else {
            $('#muusikafail').next().hide();
        }

        andmed = $('#otsing').val();

        if (andmed.trim().length < 1){
            $('#otsing').next().show();
            vigadeArv++;
        } else {
            $('#otsing').next().hide();
        }

        andmed = $('#kuupaev').val();

        if (andmed.length < 1){
            $('#kuupaev').next().show();
            vigadeArv++;
        } else {
            $('#kuupaev').next().hide();
        }

        if ($('#yes').is(':checked')){
            andmed = $('#raadiojaam').val();

            if (andmed.trim().length < 1){
                $('.jaam_viga').show();
                vigadeArv++;
            } else {
                $('.jaam_viga').hide();
            }
        } else {
            $('.jaam_viga').hide();
        }

        event.preventDefault();

        if (vigadeArv == 0){
            alert("Ankeet on korrektselt täidetud!");
        }
    });

    $('#muusikaForm').on('reset', function(){
        $('.viga').hide();
    });
});

function valid_email(email){
    var pattern = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,}$/);
    return pattern.test(email);
}