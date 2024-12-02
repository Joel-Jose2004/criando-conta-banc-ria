import { Usuario } from "./DAO/interfaceUsuario.js";
import { Conta } from "./DAO/interfaceUsuario.js";

window.onload = function () {
  // Verifique se o "conta" está presente no localStorage
  const contaJson = localStorage.getItem("conta");
  if (contaJson) {
    const conta: Usuario[] = JSON.parse(contaJson); // Tipo Usuario[]
    exibirValores(conta);
  } else {
    console.error("Dados da conta não encontrados no localStorage.");
  }
};

export function depositando(id: number, valor: number) {
  const contaJson = localStorage.getItem("conta");
  if (!contaJson) {
    console.error("Dados da conta não encontrados no localStorage.");
    return;
  }

  const conta: Usuario[] = JSON.parse(contaJson);
  const usuarioSelecionado = conta.find((u: Usuario) =>
    u.conta.some((c: Conta) => c.num_conta === id)
  );

  if (usuarioSelecionado) {
    const contaSelecionada = usuarioSelecionado.conta.find(
      (c: Conta) => c.num_conta === id
    );

    if (contaSelecionada) {
      if (isNaN(valor) || valor <= 0) {
        alert("Valor inválido. Por favor, insira um número maior que zero.");
        return;
      }

      contaSelecionada.saldo += valor;
      localStorage.setItem("conta", JSON.stringify(conta));
      exibirValores(conta);
      alert(
        `Você depositou R$ ${valor.toFixed(2)}. Saldo atual: R$ ${contaSelecionada.saldo.toFixed(
          2
        )}`
      );
    }
  } else {
    console.error("Conta não encontrada.");
  }
  window.location.href = "gerir_conta.html";
}

export function transferindo(valor: number, cont_num: number, id: number) {
  const conta = JSON.parse(localStorage.getItem("conta") as string) as Usuario[];
  const usuarioSelecionado = conta.find((u: Usuario) =>
    u.conta.some((c: Conta) => c.num_conta === id)
  );

  if (usuarioSelecionado) {
    const contaSelecionada = usuarioSelecionado.conta.find(
      (c: Conta) => c.num_conta === id
    );

    if (contaSelecionada) {
      if (isNaN(valor) || valor <= 0) {
        alert("Valor inválido. Por favor, insira um número maior que zero.");
        return;
      }

      if (valor <= contaSelecionada.saldo) {
        contaSelecionada.saldo -= valor;

        const transferirUsuario = conta.find((u: Usuario) =>
          u.conta.some((c: Conta) => c.num_conta === cont_num)
        );

        if (transferirUsuario) {
          const contaTransferencia = transferirUsuario.conta.find(
            (c: Conta) => c.num_conta === cont_num
          );

          if (contaTransferencia) {
            contaTransferencia.saldo += valor;
            localStorage.setItem("conta", JSON.stringify(conta));
            exibirValores(conta);
          }
        }
      } else {
        alert("Saldo insuficiente!");
      }
    }
  } else {
    console.error("Conta não encontrada.");
  }

  window.location.href = "gerir_conta.html";
}
export function Levantando(id: number, valor: number) {
    const contaJson = localStorage.getItem("conta");
    if (!contaJson) {
      console.error("Dados da conta não encontrados no localStorage.");
      return;
    }
  
    const conta: Usuario[] = JSON.parse(contaJson);
    const usuarioSelecionado = conta.find((u) =>
      u.conta && u.conta.some((c) => c.num_conta === id) // Verifique se 'u.conta' existe
    );
  
    if (usuarioSelecionado) {
      const contaSelecionada = usuarioSelecionado.conta.find(
        (c) => c.num_conta === id
      );
  
      if (contaSelecionada) {
        if (isNaN(valor) || valor <= 0) {
          alert("Valor inválido. Por favor, insira um número maior que zero.");
          return;
        }
  
        if (valor <= contaSelecionada.saldo) {
          contaSelecionada.saldo -= valor;
          localStorage.setItem("conta", JSON.stringify(conta));
          alert(
            `Você retirou R$ ${valor.toFixed(2)}. Saldo restante: R$ ${contaSelecionada.saldo.toFixed(
              2
            )}`
          );
        } else {
          alert("Saldo insuficiente!");
        }
      }
    } else {
      console.error("Conta não encontrada.");
    }
    window.location.href = "gerir_conta.html";
  }
  
function exibirValores(conta: Usuario[]): void {
    const cont = document.querySelector("div#usu");
    if (cont) {
      cont.innerHTML = ""; // Limpa o conteúdo antes de exibir novamente
  
      // Verificar se "conta" é um array e não está vazio
      if (Array.isArray(conta) && conta.length > 0) {
        conta.forEach((usuario) => {
          if (Array.isArray(usuario.conta) && usuario.conta.length > 0) {
            usuario.conta.forEach((element) => {
              cont.insertAdjacentHTML(
                "beforeend",
                `
                <div class="contiudo">
                  <h3>BFA</h3>
                  <p><strong>Nome:</strong> ${usuario.nome}</p>
                  <p><strong>Saldo:</strong> ${element.saldo.toFixed(2)} KZ</p>
                  <p class="resul"><strong>Nº Conta:</strong> ${element.num_conta}</p>
                  <div class="dad">
                    <div class="child" onclick="Levantar(${element.num_conta})">
                      <section class="Levant"><button>Levantar</button></section>
                    </div>
                    <div class="child" onclick="depositar(${element.num_conta})">
                      <section class="depo"><button>Depositar</button></section>
                    </div>
                    <div class="child" onclick="transferir(${element.num_conta})">
                      <section class="trans_fer"><button>Transferir</button></section>
                    </div>
                  </div>
                </div>
                <hr>
              `
              );
            });
          }
        });
      } else {
        console.error("O array 'conta' está vazio ou não é um array.");
      }
    }
  }
  