function teisendamine(){
    let vastus=document.getElementById("vastus");
    let valik=document.getElementsByName("valik"); // mitu elementi ühe nimega
    let arv=document.getElementById("arv");

    const toll = 39.37
    const meeter = 0.0254;

    let vastusepilt=document.getElementById("vastusepilt");

    // tsükli
    for(let i=0; i<valik.length; i++){
        if(valik[i].checked){
            if(valik[i].value=="meeter"){
                vastus.innerHTML=arv.value + ' meetrit = ' +
                    (arv.value*toll).toFixed(2) +' tolli';
                vastus.style.color='red';

                vastusepilt.src="https://www.taskutark.ee/wp-content/uploads/2015/08/10408600_1.jpg";
            }  else if(valik[i].value==="tolli"){
                vastus.innerHTML=arv.value + ' tolli = '+
                    (arv.value*meeter).toFixed(4)+' meetrit';
                vastus.style.color='green';
                vastusepilt.src="https://sauerauakaubad.ee/wp-content/uploads/2025/07/toll_page-0001-1-558x1024.jpg"
            }
            else {
                vastus.innerHTML="Vali parem valik!";
            }
        }
    }
}