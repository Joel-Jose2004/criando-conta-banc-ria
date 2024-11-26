import { criar } from "./DAO/userFunction.js";
var btn = document.getElementById("criar");
export function getNome() {
    const nome = document.getElementById("idnome").value;
    return nome;
}
export function getSaldo() {
    const saldo = document.getElementById("idsaldo");
    const novo_sal = parseFloat(saldo.value);
    return novo_sal;
}
btn.addEventListener("click", function () {
    criar();
});
