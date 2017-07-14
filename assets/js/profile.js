var i = 0; //contador, para poder crear ID dinamicos en la variable html, con un onclick.
var cards = [];
$(document).ready(function () {
    getFromLocalStorage(); //obtener local storage
    $('#add-card').click(onKeyPress);//listener para el botón

});

//Obtener elementos de este html para buscar mediante local storage los datos almacenados
function getFromLocalStorage() {
    $('#email').append(localStorage.getItem('email'));
}

function onKeyPress(event) {
    if ($('#card-number').val() != '') {//Si el valor del new task no esta vacìo, continue.
        var html = '<div class="row item"><div class="col s12"><a id="item_' + i + '" class="bip-number waves-effect waves-light btn" onclick="onSelectItem(item_' + i + ')">' + $('#card-number').val() + '</a>' + '</div>'; //Esta variable crea el html con sus clases y pone un onclick que va creando divs dinamicos, llamando a la clase new-task
        $(".bip-cards").append(html);//selecciono el div con la clase y en esta le adiciono el texto html
        i++; //vaya sumando mi variable contador
        console.log(html);
        cards.push($('#card-number').val());
        localStorage.setItem('cards', cards);
    } else {
        alert('Ingrese numero de tarjeta');
    }
}



