//Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
var btnSfida = document.getElementById("sfida");


btnSfida.addEventListener("click" , function() {
    var myPoint = Math.floor(Math.random() * 6) + 1;
    var pcPoint = Math.floor(Math.random() * 6) + 1;

    document.getElementById("my_point").innerHTML = "My Score " + myPoint;
    document.getElementById("pc_point").innerHTML = "Pc Score " + pcPoint;
    //Stabilire il vincitore, in base a chi fa il punteggio più alto.
    if (myPoint > pcPoint) {
        document.getElementById("loose_or_win").innerHTML = "Congratulazioni! Hai Battuto il PC";
    }   else if (myPoint < pcPoint) {
        document.getElementById("loose_or_win").innerHTML = "Spiacente! Hai perso";
    }   else {
        document.getElementById("loose_or_win").innerHTML = "Stesso punteggio!! Ritenta";
    }
})




















