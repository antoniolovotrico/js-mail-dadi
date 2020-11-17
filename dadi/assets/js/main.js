//Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
var btnSfida = document.getElementById("sfida");


btnSfida.addEventListener("click" , function() {
    var myPoint = Math.floor(Math.random() * 6) + 1;
    var pcPoint = Math.floor(Math.random() * 6) + 1;

    document.getElementById("my_point").innerHTML = myPoint;
    document.getElementById("pc_point").innerHTML = pcPoint;
})






//Stabilire il vincitore, in base a chi fa il punteggio più alto.



















// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?