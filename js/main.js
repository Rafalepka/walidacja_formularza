"use strict";


var zgoda1 = document.getElementById('zgoda_marketingowa_1');
var zgoda2 = document.getElementById('zgoda_marketingowa_2');
var wszystkie_zgody = document.getElementById('wszystkie_zgody');


wszystkie_zgody.addEventListener('change', validateCheckbox);


function validateCheckbox() {
    if (wszystkie_zgody.checked) {
        zgoda1.checked = true;
        zgoda1.disabled = true;
        zgoda2.checked = true;
        zgoda2.disabled = true;
    } else {
        zgoda1.checked = false;
        zgoda1.disabled = false;
        zgoda2.disabled = false;
        zgoda2.checked = false;
    }
}
document.getElementById("wszystkie_zgody").onchange = zaznaczanieZgody;

function validateForm(e) {
    var imieNazwisko = document.getElementById("name").value;
    var adresEmail = document.getElementById("email").value;
    var zgoda1 = document.getElementById("zgoda_marketingowa_1");

    if (imieNazwisko == "" || imieNazwisko == null) {
        e.preventDefault();

        //pojawia sie paragraf z czerwonym tekstem, po wpisaniu czegos w pole i kliknieciu wyslij paragraf znika
    }

    if (adresEmail == "" || adresEmail == null) {
        e.preventDefault(p);

    }

    if (zgoda1.checked == false) {
        e.preventDefault(p);

    }
}

document.getElementById("wyslij").onclick = validateForm;