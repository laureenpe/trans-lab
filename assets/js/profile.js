// ────────────────────────────────────────── I ────────────────────────────────────────────────────────────────────────────
//Funciones para el Perfil a ingresar
// ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
var i = 0; //contador, para poder crear ID dinamicos en la variable html, con un onclick.
var cards = [];//Array para poder meter la información

$(document).ready(function () {
    getFromLocalStorage(); //obtener local storage
    $('#add-card').click(onKeyPress);//listener para el botón

});
// ────────────────────────────────────────── I ────────────────────────────────────────────────────────────────────────────
//Obtener elementos de este html para buscar mediante local storage los datos almacenados//
// ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

function getFromLocalStorage() {
    $('#email').append(localStorage.getItem('email'));
}

// ────────────────────────────────────────── I ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
//Esta función busca el valor ingresado por el usuario que no este vacìo para poderle agregarle una caja al html con la informaciòn, ademàs mediante un array vacío mete los datos y los usa en local storage//
// ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
function onKeyPress(event) {
    if ($('#card-number').val() != '') {//Si el valor del new task no esta vacìo, continue.
        var html = '<div class="row"><div class="col s12"><div class="row"><a id="item_' + i + '" class="input-field col s12 background-white">' + $('#card-number').val() + '</a>' + '</div>'+'</div>'; //Esta variable crea el html con sus clases y pone un onclick que va creando divs dinamicos, llamando a la clase new-task
        $(".bip-cards").append(html);//selecciono el div con la clase y en esta le adiciono el texto html
        i++; //vaya sumando mi variable contador
        console.log(html);
        cards.push($('#card-number').val());
        localStorage.setItem('cards', cards);
    } else {
        alert('Ingrese numero de tarjeta');
    }
}



