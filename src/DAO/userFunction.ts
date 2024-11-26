import { getNome, getSaldo } from "../exe";
import { Conta } from "./interfaceUsuario";

export function criar(): void {
    const novoNome=getNome();
    const novoSaldo=getSaldo();

    if (novoSaldo < 20000) {
        alert("Não pode abrir conta com saldo inicial menor que 20.000.");
        return;
    }

    if (!novoNome) {
        alert("Preencha todos os campos.");
        return;
    }

    const contas: Conta[] = JSON.parse(localStorage.getItem("conta") || "[]");
    const id = contas.length + 1;
    const numeroConta =`${Date.now()}`;
const Conta=parseFloat(numeroConta.toString());
    const novaConta: Conta = {
        id,
        nome: novoNome,
        saldo: novoSaldo,
        num_conta: Conta
    };

    contas.push(novaConta);
    localStorage.setItem("conta", JSON.stringify(contas));

    alert("Conta criada com sucesso!");
    window.location.href = "gerir_conta.html";
}
