"use.strict";

var zgoda1 = document.getElementById("zgoda_marketingowa_1");
var zgoda2 = document.getElementById("zgoda_marketingowa_2");
var zgodyWszystkie = document.getElementById("wszystkie_zgody");
var formularz = document.querySelector("form");


function sprawdzFormularz(e) {
    var wprowadzDane = document.querySelectorAll('input[type=text]');
    var form = document.querySelector("form");
    var kom = document.createElement("p");
    var trescKom = document.createTextNode("Wymagane pole");
    kom.appendChild(trescKom);
    kom.style.color = "red";
    /* var poleNazwiska = document.getElementById("name").value;
     var poleEmail = document.getElementById("email").value;
     var formularz = document.querySelector("form");
     var komunikat = document.createElement("p");
     var trescKomunikatu = document.createTextNode("Wymagane pole");
     komunikat.appendChild(trescKomunikatu);
     komunikat.style.color = "red";*/
    var zgodaPierwsza = (zgoda1.checked == true) ? true : false;
    console.log(zgodaPierwsza);


    for (var i = 0; i < wprowadzDane.length; i++) {
        if (wprowadzDane[i].value == "");
        var kom = document.createElement("p");
        var trescKom = document.createTextNode("Wymagane pole");
        kom.appendChild(trescKom);
        kom.style.color = "red";
        wprowadzDane[i].parentNode.replaceChild(kom, wprowadzDane[i].nextSibling);
        e.preventDefault();
    }
    
    
    if (zgoda1.checked == false) {
        var kom = document.createElement("p");
        var trescKom = document.createTextNode("Wymagane pole");
        kom.appendChild(trescKom);
        kom.style.color = "red";
        zgoda1.parentNode.replaceChild(kom, zgoda1.nextElementSibling.nextSibling);
        e.preventDefault();
        
    } else if (zgoda1.nextElementSibling.nextSibling.tagName=='P') {
        zgoda1.nextElementSibling.nextSibling.remove();
        var dodajBr = document.createElement('br');
        zgoda1.parentNode.insertBefore(dodajBr, zgoda1.nextElementSibling.nextSibling);
    }
}

document.getElementById('wyslij').addEventListener('click', sprawdzFormularz);

/* if (poleNazwiska == "") {
        var komNazwiska = document.createElement("p");
        var trescKomNazwiska = document.createTextNode("To pole jest wymagane");
        komNazwiska.appendChild(trescKomNazwiska);
        komNazwiska.style.color = "red";
        formularz.replaceChild(komNazwiska, formularz.children[3])

        e.preventDefault();

        console.log("Pole imienia i nazwiska musi zostać uzupełnione");
    } else {
        formularz.children[3].innerHTML = "";
    }

    if (poleEmail == "") {
        var komEmail = document.createElement("p");
        var trescKomEmail = document.createTextNode("To pole jest wymagane");
        komEmail.appendChild(trescKomEmail);
        komEmail.style.color = "red";
        formularz.replaceChild(komEmail, formularz.children[7])
        e.preventDefault();

        console.log("Pole email nie może być puste");
    } else {
        formularz.children[7].innerHTML = "";
    }

    if (zgoda1.checked == false) {
        var komZgoda = document.createElement("p");
        var trescKomZgody = document.createTextNode("To pole jest wymagane");
        komZgoda.appendChild(trescKomZgody);
        komZgoda.style.color = "red";
        formularz.replaceChild(komZgoda, formularz.children[10])

        e.preventDefault();

        console.log("Checkbox musi być zaznaczony");
    }
}*/


/*document.getElementById("wyslij").addEventListener("click", validateForm);*/

function checkingStatus() {

    /*if (zgodyWszystkie.checked) {
        zgoda1.checked = true;
        zgoda1.disabled = true;
        zgoda2.checked = true;
        zgoda2.disabled = true;
    } else {
        zgoda1.checked = false;
        zgoda1.disabled = false;
        zgoda2.checked = false;
        zgoda2.disabled = false;
    }*/

    var sprawdzZgoda = (zgodyWszystkie.checked == true) ? true : false;
    console.log(sprawdzZgoda);
    var wszystkieChecked = document.querySelectorAll('input[type=checkbox]');


    //Iteracja po tablicy checkoboxow i zmiana ich stanu za wyjatkiem ostatniego

    for (var i = 0; i < wszystkieChecked.length - 1; ++i) {
        wszystkieChecked[i].disabled = sprawdzZgoda;
        wszystkieChecked[i].checked = sprawdzZgoda;
    }
}


document.getElementById("wszystkie_zgody").addEventListener("change", checkingStatus);