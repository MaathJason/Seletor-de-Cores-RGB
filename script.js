function mudarcores(){
    const rednum = document.getElementById("redinput").value;

    const redout = document.getElementById("redoutput");

    const valorvermelho = redout.value = rednum;

    const greennum = document.getElementById("greeninput").value;

    const greenout = document.getElementById("greenoutput");

    const valorverde = greenout.value = greennum;

    const bluenum = document.getElementById("blueinput").value;

    const blueout = document.getElementById("blueoutput");

    const valorazul = blueout.value = bluenum;

    const cordiv = document.getElementById("divcor");

    cordiv.style.backgroundColor =  `rgb(${valorvermelho},${valorverde},${valorazul})` 

}