function checkboxValik(){
    let checkboxid=document.getElementById("checkboxid");
    let js=document.getElementById("js");
    let py=document.getElementById("py");
    let java=document.getElementById("java");

    let valik="";
    if(js.checked){
        valik+=js.value + ', ';
    }
    if(py.checked){
        valik+=py.value + ', ';
    }
    if(java.checked){
        valik+=java.value + ', ';
    }
    if(valik==""){
        valik="Palun vali midagi";
    }
    checkboxid.innerHTML="Sa tead: " + valik;
    checkboxid.style.color="blue";

    return valik;
}

function checkboxValik1(){
    let checkboxid=document.getElementById("checkboxid1");
    let js=document.getElementById("cpp");
    let py=document.getElementById("csharp");
    let java=document.getElementById("c");

    let valik="";
    if(cpp.checked){
        valik+=cpp.value + ', ';
    }
    if(csharp.checked){
        valik+=csharp.value + ', ';
    }
    if(c.checked){
        valik+=c.value + ', ';
    }
    if(lua.checked){
        valik+=lua.value + ', ';
    }
    if(go.checked){
        valik+=go.value + ', ';
    }
    if(php.checked){
        valik+=php.value + ', ';
    }
    if(valik==""){
        valik="Palun vali midagi";
    }
    checkboxid.innerHTML="Sinu valik: " + valik;
    checkboxid.style.color="blue";

    return valik;
}

function textArea(){
    let textarea = document.getElementById("textarea");
    let textbox = document.getElementById("textbox");

    textarea.innerHTML = "Sinu arvamus: " + textbox.value;
    textarea.style.color="blue";

    return textbox.value;
}

function textArea1(){
    let textarea = document.getElementById("textarea1");
    let textbox = document.getElementById("textbox1");

    textarea.innerHTML = "Sinu nimetatud tööriistad: " + textbox.value;
    textarea.style.color="blue";

    return textbox.value;
}

function rangeValik(){
    let vastus2=document.getElementById("vastus2");
    let tund = document.getElementById("tund");

    vastus2.innerHTML="Tegeled programmeerimisega " + tund.value + "  tundi nädalas.";
    vastus2.style.color="blue";

    return tund.value;
}

function radioValik() {
    let yes = document.getElementById("yes");
    let no = document.getElementById("no");
    let vastus = document.getElementById("rnuppud");

    if (yes.checked) {
        vastus.innerHTML = "Programmeerimine meeldib!";
        vastus.style.color="green";
    } else if (no.checked) {
        vastus.innerHTML = "Programmeerimine ei meeldi.";
        vastus.style.color="red";
    }
}

function naitaKoike(){
    let vastused=document.getElementById("vastused");
    let js=checkboxValik();
    let py=checkboxValik();
    let java=checkboxValik();

    vastusKoik.innerHTML="Sa tead need keeled: " +js+ +py+ +java;
}