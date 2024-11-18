"use strict";
function criar() {
    const nome = document.getElementById("idnome");
    const saldo = document.getElementById("idsaldo");
    const novo_nome = nome.value;
    const novo_sal = parseFloat(saldo.value);
    if (novo_sal < 20000) {
        alert("não pode abrir conta");
        return;
    }
    if (nome.value == "" || saldo.value == "") {
        alert("preencha todos os campos");
        return;
    }
    var conta = [];
    if (localStorage.hasOwnProperty("conta")) {
        conta = JSON.parse(localStorage.getItem("conta"));
    }
    var id = conta.length + 1;
    const generateUniqueId = () => {
        return `${Date.now()}`;
    };
    const Numero_de_conta = generateUniqueId();
    const number_conta = parseFloat(Numero_de_conta.toString());
    conta.push({ id: id, nome: novo_nome, saldo: novo_sal, num_conta: number_conta });
    localStorage.setItem("conta", JSON.stringify(conta));
    window.location.href = "gerir_conta.html";
}
//const id = vetor5.length > 0 ? vetor5[vetor5.length - 1].id + 1 : 1;
