//Chiedi all’utente la sua email
var inviaBtn = document.getElementById("invia");
console.log(inviaBtn);

inviaBtn.addEventListener("click" , function() {

    var email = document.getElementById("email");
    console.log(email);
    var userMail = email.value;
    console.log(userMail);

    //creazione lista con array
    var mailList = ["hitler@gmail.com" , "sauron@gmail.com" ,"trump@gmail.com" , "pinochet@gmail.com" , "malefix@gmail.com"];
    console.log(mailList);

    //controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato sull’esito del controllo
    for (var i = 0 ; i < mailList.length; i++) {
        console.log(mailList[i]);
    }
    
    if (userMail == mailList[i]) {
        document.getElementById("message").innerHTML = "Sei stato scelto per partecipare al mio purga party!!"
    }
    
})



