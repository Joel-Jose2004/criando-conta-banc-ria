import { Levantando } from "./gerir.js";
import { depositando } from "./gerir.js";
import { transferindo } from "./gerir.js";
const btl = document.getElementById("Levanta");
btl.addEventListener("click", function () {
    var t = document.getElementById("id_acount");
    var id = parseFloat(t.value);
    var v = document.getElementById("idacount").value;
    var valor = parseFloat(v.toString());
    Levantando(id, valor);
});
const btn_D = document.getElementById("deposita");
btn_D.addEventListener("click", function () {
    var pe_id = document.getElementById("id_acount2");
    var id = parseFloat(pe_id.value);
    var pe_val = document.getElementById("idacount2").value;
    var valor = parseFloat(pe_val.toString());
    depositando(id, valor);
});
const btn_tra = document.getElementById("transfer");
btn_tra.addEventListener("click", function () {
    var pe_valor = document.getElementById("idtransfer");
    var valor = parseFloat(pe_valor.value);
    var nu_conta = document.getElementById("id_transfer");
    var cont_num = parseFloat(nu_conta.value);
    var pega_origem = document.getElementById("id-transfer");
    var id = parseFloat(pega_origem.value);
    transferindo(valor, cont_num, id);
});
