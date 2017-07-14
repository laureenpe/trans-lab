$(document).ready(function () {
    $('#saldo-btn').click(onGetSaldo);//listener para el botón
    selectBip();
});

function onGetSaldo() {
    var card_number = $("#card-number").val();
    getSaldo(card_number);
}

function getSaldo(card_number) {
    var url = "http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=" + card_number;
    $.ajax({
        url: url
    }).done(function (response) {
        console.log(response);
        $("#total-money").html(response.saldoTarjeta);
        $(".hide-box").removeClass("hide");
    }).fail(function() {
		alert("Tarjeta Bip no válida");
	})
}

function selectBip(){
    var cards = localStorage.getItem('cards').split(',');    
    var html = '<select><option value="" disabled selected>Choose your option</option>';
    
    for(var i=0; i<cards.length; i++){
        html += '<option value="'+cards[i]+'">'+cards[i]+'</option>';
    }
    html += '</select>';

    $('.options').html(html);
}