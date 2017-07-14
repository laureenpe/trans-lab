
$(document).ready(function () {
    $('#sign-session').click(onLogin);//listener.
    getFromLocalStorage(); //obtener local storage

});

//VALIDATIONS
function validateForm() {
    var password = $('#password').val();
    var valid = true;

    if (!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test($('#email').val()))) {
        $("#email").css("border", "1px solid red");
        alert('Error en el email');
        valid = false;
    }

    if (password == "" || password.length < 8 || password == "password" || password == "123456") {
        $("#password").css("border", "1px solid red");
        alert('Error en la contraseña; debe ser mayor a 8');
        valid = false;
    }

    return valid;
}

function onLogin() {
    if (validateForm()) { //If validate form is True
        $("#sign-session").attr("href", "options.html");
        saveToLocalStorage(); //guarda a local storage
    }
}
//LOCAL STORAGE
function saveToLocalStorage() {
    if (typeof (Storage) !== "undefined") {//soporte del navegador

        
        if ($('#email').val() != '') {//si el email es diferente de vacío
            localStorage.setItem('email', $('#email').val());
        }
        if ($('#password').val() != '') {//si el valor es diferente de vacìo
            localStorage.setItem('password', $('#password').val());
        }
        

        alert('Datos actualizados');

    } else {
        //No hay soporte de navegador
        console.log('Sorry there is not support for local storage.')
    }
}

function getFromLocalStorage() {
    console.log('getting info for: ' + localStorage.getItem('password'));
    console.log('getting info for: ' + localStorage.getItem('email'));
    $('#email').val(localStorage.getItem('email'));
    $('#password').val(localStorage.getItem('password'));
}

