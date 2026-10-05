// 1. küsimus
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

// 6. küsimus
function checkboxValik1(){
    let checkboxid=document.getElementById("checkboxid1");
    let js=document.getElementById("cpp");
    let py=document.getElementById("csharp");
    let java=document.getElementById("c");

    let valik1="";
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
    if(valik1==""){
        valik="Palun vali midagi";
    }
    checkboxid.innerHTML="Sinu valik: " + valik1;
    checkboxid.style.color="blue";

    return valik1;
}

// 2. küsimus
function textArea(){
    let textarea = document.getElementById("textarea");
    let textbox = document.getElementById("textbox");

    textarea.innerHTML = "Sinu arvamus: " + textbox.value;
    textarea.style.color="blue";

    return textbox.value;
}

// 5. küsimus
function textArea1(){
    let textarea = document.getElementById("textarea1");
    let textbox = document.getElementById("textbox1");

    textarea.innerHTML = "Sinu nimetatud tööriistad: " + textbox.value;
    textarea.style.color="blue";

    return textbox.value;
}

// 3. küsimus
function rangeValik(){
    let vastus2=document.getElementById("vastus2");
    let tund = document.getElementById("tund");

    vastus2.innerHTML="Tegeled programmeerimisega " + tund.value + "  tundi nädalas.";
    vastus2.style.color="blue";

    return tund.value;
}

// 4. küsimus
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
    let valik=checkboxValik();
    let valik1=checkboxValik();
    let textarea=textArea()

    vastusKoik.innerHTML="Sa tead need keeled: " +valik +' sinu arvamus' +textarea;
}