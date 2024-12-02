import { criar } from "./DAO/userFunction.js";
var btn = document.getElementById("criar");
btn.addEventListener("click", function () {
    const nome = document.getElementById("idnome").value;
    const saldo = document.getElementById("idsaldo");
    const novo_sal = parseFloat(saldo.value);
    criar(nome, novo_sal);
});
