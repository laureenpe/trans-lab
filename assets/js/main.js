
$(document).ready(function () {
    $('#sign-session').click(onLogin);//listener.
    getFromLocalStorage(); //obtener local storage

});
// ────────────────────────────────────────── I ────────────────────────────────────────────────────────────────────────────
//Esta Función valida la contraseña y el email que el usuario ponga y le adiciona un borde rojo en caso de que haya un error
// ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
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
// ────────────────────────────────────────── II ────────────────────────────────────────────────────────────────────────────
//Esta Función indica que si cumplió las validaciones vaya a la otra página que es options.html y lo guarde en Local Storage
// ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
function onLogin() {
    if (validateForm()) { //If validate form is True
        $("#sign-session").attr("href", "options.html");
        saveToLocalStorage(); //guarda a local storage
    }
}
// ────────────────────────────────────────── III ────────────────────────────────────────────────────────────────────────────
//Esta Función hace que lo que tipee el usuario quede guardado en local storage si hay soporte del navegador
// ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
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

// ────────────────────────────────────────── III ────────────────────────────────────────────────────────────────────────────
//Esta Función obtiene del local storage el email y la contraseña
// ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
function getFromLocalStorage() {
    console.log('getting info for: ' + localStorage.getItem('password'));
    console.log('getting info for: ' + localStorage.getItem('email'));
    $('#email').val(localStorage.getItem('email'));
    $('#password').val(localStorage.getItem('password'));
}

