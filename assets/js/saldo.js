//
// ────────────────────────────────────────────────────
//   MONEY TOTAL JS
// ────────────────────────────────────────────────────
//
$(document).ready(function () {
    $('#saldo-btn').click(onGetSaldo);//listener para el botón
    selectBip();
});

// ────────────────────────────────────────── I ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
// Esta función busca obtener el valor de la tarjeta para poder obtener el saldo
// ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
function onGetSaldo() {
    var card_number = $("#card-number").val();
    getSaldo(card_number);
}

// ────────────────────────────────────────── II ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
// Esta función hace el llamado ajax al api de bip para obtener su URL y adicionarle mi variable que contiene el valor de la tarjeta ingresado
// ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

function getSaldo(card_number) {
    var url = "http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=" + card_number;
    $.ajax({
        url: url
    }).done(function (response) {
        $("#total-money").html(response.saldoTarjeta);//Saldo tarjeta obtenido del API de bip
        $(".hide-box").removeClass("hide");//removiendo la caja escondida
    }).fail(function () {
        alert("Tarjeta Bip no válida");
    })
}

// ────────────────────────────────────────── III ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
// Esta función busca en el local storage  los datos guardados en un array.  Para poderlo usar como array se corto en comas, se utiliza el split
// ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

function selectBip() {
    var cards = localStorage.getItem('cards').split(',');
    var html = '<select id="select-storage"><option value="" disabled selected>Choose your option</option>';

    for (var i = 0; i < cards.length; i++) { //Recorrido del contenido del array
        html += '<option value="' + cards[i] + '">' + cards[i] + '</option>';//que me de el nùmero ingresado para usarlo
        console.log(html);
    }
    html += '</select>';

    $('.options').html(html);
    $('#select-storage').change(onChangeSelector);
}

// ────────────────────────────────────────── IV ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
// Esta función busca poner el valor seleccionado de la tarjeta en el input nùmero de tarjeta, para poderlo utilizar en el llamado ajax y me de un valor
// ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

function onChangeSelector() {
    var select_storage = $('#select-storage').val();
    $("#card-number").val(select_storage);//Asignar el valor del select-storage
}