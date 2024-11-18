"use strict";
window.onload = function () {
    // Verifique se o "conta" está presente no localStorage
    const contaJson = localStorage.getItem("conta");
    if (contaJson) {
        const conta = JSON.parse(contaJson);
        exibirValores(conta);
    }
    else {
        console.error("Dados da conta não encontrados no localStorage.");
    }
};
function Levantar(id) {
    // Recupera os dados da conta do localStorage
    document.getElementById("myModal").style.display = "block";
    function fecharModal() {
        document.getElementById("myModal").style.display = "none";
    }
    const v_id = document.getElementById("id_acount");
    v_id.value = id.toString();
}
function Levanta() {
    const contaJson = localStorage.getItem("conta");
    if (!contaJson) {
        console.error("Dados da conta não encontrados no localStorage.");
        return;
    }
    var t = document.getElementById("id_acount");
    var id = parseFloat(t.value);
    var v = document.getElementById("idacount");
    var valor = parseFloat(v.value);
    const conta = JSON.parse(contaJson);
    const contaSelecionada = conta.find((c) => c.num_conta === id);
    if (contaSelecionada) {
        if (isNaN(valor) || valor <= 0) {
            alert("Valor inválido. Por favor, insira um número maior que zero.");
            return;
        }
        if (valor <= contaSelecionada.saldo) {
            contaSelecionada.saldo -= valor; // Reduz o saldo da conta
            localStorage.setItem("conta", JSON.stringify(conta)); // Atualiza no localStorage
            exibirValores(conta); // Reexibe os valores atualizados
            alert(`Você retirou R$ ${valor.toFixed(2)}. Saldo restante: R$ ${contaSelecionada.saldo.toFixed(2)}`);
        }
        else {
            alert("Saldo insuficiente!");
        }
    }
    else {
        console.error("Conta não encontrada.");
    }
    window.location.href = "gerir_conta.html";
}
function depositar(id) {
    document.getElementById("myModal2").style.display = "block";
    function fecharModal2() {
        document.getElementById("myModal2").style.display = "none";
    }
    var var_id = document.getElementById("id_acount2");
    var_id.value = id.toString();
}
function deposita() {
    const contaJson = localStorage.getItem("conta");
    if (!contaJson) {
        console.error("Dados da conta não encontrados no localStorage.");
        return;
    }
    var pe_id = document.getElementById("id_acount2");
    var id = parseFloat(pe_id.value);
    var pe_val = document.getElementById("idacount2");
    const valor = parseFloat(pe_val.value);
    const conta = JSON.parse(contaJson);
    const contaSelecionada = conta.find((c) => c.num_conta === id);
    if (contaSelecionada) {
        if (isNaN(valor) || valor <= 0) {
            alert("Valor inválido. Por favor, insira um número maior que zero.");
            return;
        }
        if (valor <= contaSelecionada.saldo) {
            contaSelecionada.saldo += valor; // Reduz o saldo da conta
            localStorage.setItem("conta", JSON.stringify(conta)); // Atualiza no localStorage
            exibirValores(conta); // Reexibe os valores atualizados
            alert(`Você depositou R$ ${valor.toFixed(2)}. Saldo restante: R$ ${contaSelecionada.saldo.toFixed(2)}`);
        }
        else {
            alert("Saldo insuficiente!");
        }
    }
    else {
        console.error("Conta não encontrada.");
    }
    window.location.href = "gerir_conta.html";
}
function transferir(id) {
    document.getElementById("myModal3").style.display = "block";
    function fecharModal3() {
        document.getElementById("myModal3").style.display = "none";
    }
    var ident = document.getElementById("id-transfer");
    ident.value = id.toString();
}
function transfer() {
    const conta = JSON.parse(localStorage.getItem("conta"));
    var pe_valor = document.getElementById("idtransfer");
    var valor = parseFloat(pe_valor.value);
    var nu_conta = document.getElementById("id_transfer");
    var cont_num = parseFloat(nu_conta.value);
    var pega_origem = document.getElementById("id-transfer");
    var id = parseFloat(pega_origem.value);
    const contaSelecionada = conta.find((c) => c.num_conta === id);
    if (contaSelecionada) {
        if (isNaN(valor) || valor <= 0) {
            alert("Valor inválido. Por favor, insira um número maior que zero.");
            return;
        }
        if (valor <= contaSelecionada.saldo) {
            contaSelecionada.saldo -= valor; // Reduz o saldo da conta
            localStorage.setItem("conta", JSON.stringify(conta)); // Atualiza no localStorage
            exibirValores(conta); // Reexibe os valores atualizados
            alert(`Você retirou R$ ${valor.toFixed(2)}. Saldo restante: R$ ${contaSelecionada.saldo.toFixed(2)}`);
            const transferirSelecionada = conta.find((c) => c.num_conta === cont_num);
            if (transferirSelecionada) {
                transferirSelecionada.saldo += valor; // Reduz o saldo da conta
                localStorage.setItem("conta", JSON.stringify(conta)); // Atualiza no localStorage
                exibirValores(conta); // Reexibe os valores atualizados
            }
        }
        else {
            alert("Saldo insuficiente!");
        }
    }
    else {
        console.error("Conta não encontrada.");
    }
    window.location.href = "gerir_conta.html";
}
function exibirValores(conta) {
    const cont = document.querySelector("div#usu");
    if (cont) {
        cont.innerHTML = ""; // Limpa o conteúdo antes de exibir novamente
        conta.forEach(element => {
            cont.insertAdjacentHTML('beforeend', `
            <div class="contiudo">
            <h3>BFA</h3>
             <p><strong>Nome:</strong> ${element.nome}</p>
              <p><strong>Saldo:</strong> ${element.saldo.toFixed(2)} KZ</p>
              <p class="resul"><strong>Nº Conta:</strong> ${element.num_conta}</p>
                  <div class="dad">
                  <div class="child" onclick="Levantar(${element.num_conta})">
                    <section><button>Levantar</button></section>
                  </div>
                   <div class="child" onclick="depositar(${element.num_conta})">
                    <section class="depo"><button>Depositar</button></section>
                  </div>
                  <div class="child" onclick="transferir(${element.num_conta})">
                      <section class="trans_fer"> <button>Transferir</button></section>
                  </div>
                  </div>
                  </div>
               <hr>
              
          `);
        });
    }
}
