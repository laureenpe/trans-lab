$(document).ready(function () {
    getFromLocalStorage(); //obtener local storage
});

//Obtener elementos de este html para buscar mediante local storage los datos almacenados
function getFromLocalStorage() {
    $('#email').append(localStorage.getItem('email'));
}