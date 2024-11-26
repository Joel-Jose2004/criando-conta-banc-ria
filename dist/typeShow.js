"use strict";
function Levantar(id) {
    document.getElementById("myModal").style.display = "block";
    var var_id = document.getElementById("id_acount");
    var_id.value = id.toString();
}
function depositar(id) {
    document.getElementById("myModal2").style.display = "block";
    var var_id = document.getElementById("id_acount2");
    var_id.value = id.toString();
}
function transferir(id) {
    document.getElementById("myModal3").style.display = "block";
    function fecharModal3() {
        document.getElementById("myModal3").style.display = "none";
    }
    var ident = document.getElementById("id-transfer");
    ident.value = id.toString();
}
