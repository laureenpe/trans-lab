$(document).ready(function () {
    $('#calculate').click(taxes);//listener para el botón
    selectBip();
});

// ────────────────────────────────────────── I ─────────────
//Llamado Ajax para el saldo de la tarjeta
// ──────────────────────────────────────────────────────────
function taxes() {
    var card_number = $("#card-number-calculate").val();
    var url = "http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=" + card_number;

    $.ajax({
        url: url
    }).done(function (response) {
        console.log(response);
        var schedule_select = parseFloat($('#schedule-select').val()); //Convertir a número entero 
        var balanceCard = parseFloat(response.saldoTarjeta.substring(1).replace('.', '')); //por defecto el número que retorna esta en formato $2.640 y esto interfiere con el cálculo
        console.log("Saldo de la tarjeta" + balanceCard);
        console.log("selector" + schedule_select);

        if (schedule_select != null) {
            var totalAmount = balanceCard - schedule_select; //Calculo para conocer el saldo final
            $("#saldo-final").html(totalAmount);
            $("#total-costo").html(schedule_select);
            $(".hide-box").removeClass("hide"); //Mostrar la caja con los datos del saldo
        }

    }).fail(function () {
        alert("Tarjeta Bip no válida");
    })

}

// ────────────────────────────────────────── I ───────────────────────────────────────────────────────────────────────────────────────────────────────────────
//  Esta función busca poner el valor seleccionado de la tarjeta en el input nùmero de tarjeta, para poderlo utilizar en el llamado ajax y me de un valor
// ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

function onChangeSelector() {
    var select_storage = $('#select-storage').val();
    $("#card-number-calculate").val(select_storage);//Asignar el valor del select-storage
}


// ────────────────────────────────────────── I ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
// Esta función busca en el local storage del js profile y saldo donde se guardo este item previamente, los datos guardados en un array.  Para poderlo usar como array se corto en comas, se utiliza el split
// ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

function selectBip() {
    var cards = localStorage.getItem('cards').split(',');
    var html = '<select id="select-storage" ><option value="" disabled selected>Choose your option</option>';
    for (var i = 0; i < cards.length; i++) { //Recorrido del array cards para poderlo adicionar  al html
        html += '<option value="' + cards[i] + '">' + cards[i] + '</option>';
    }
    html += '</select>';
    $('.container-saldo').html(html);
    $('#select-storage').change(onChangeSelector);
}


