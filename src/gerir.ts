import { Conta } from "./DAO/interfaceUsuario";

window.onload = function() {
  // Verifique se o "conta" está presente no localStorage
  const contaJson = localStorage.getItem("conta");
  if (contaJson) {
      const conta = JSON.parse(contaJson);
      exibirValores(conta);
  } else {
      console.error("Dados da conta não encontrados no localStorage.");
  }
  
}




export function depositando(id:number,valor:number){
    const contaJson = localStorage.getItem("conta");
    if (!contaJson) {
        console.error("Dados da conta não encontrados no localStorage.");
        return;
    }
  
    const conta:Conta[] = JSON.parse(contaJson);
    const contaSelecionada = conta.find((c:Conta) => c.num_conta === id);
  
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
        } else {
            alert("Saldo insuficiente!");
        }
    } else {
        console.error("Conta não encontrada.");
    }
    window.location.href="gerir_conta.html";
}






export function transferindo(valor:number,cont_num:number,id:number){
  const conta=JSON.parse(localStorage.getItem("conta")as string);

  const contaSelecionada = conta.find((c:Conta) => c.num_conta === id);
  
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
        const transferirSelecionada = conta.find((c:Conta) => c.num_conta === cont_num);
if (transferirSelecionada) {

  
      transferirSelecionada.saldo += valor; // Reduz o saldo da conta
      localStorage.setItem("conta", JSON.stringify(conta)); // Atualiza no localStorage
      exibirValores(conta); // Reexibe os valores atualizados
     
  } 

    } else {
        alert("Saldo insuficiente!");
        
    }
} else {
    console.error("Conta não encontrada.");
}



   window.location.href="gerir_conta.html";
}


export function Levantando(id:number,valor:number){
    const contaJson = localStorage.getItem("conta");
    if (!contaJson) {
        console.error("Dados da conta não encontrados no localStorage.");
        return;
    }
    const conta:Conta[] = JSON.parse(contaJson);
    const contaSelecionada = conta.find((c:Conta) => c.num_conta === id);
  
    if (contaSelecionada) {
       
        
        if (isNaN(valor) || valor <= 0) {
            alert("Valor inválido. Por favor, insira um número maior que zero.");
            return;
        }
  
        if (valor <= contaSelecionada.saldo) {
            contaSelecionada.saldo -= valor; // Reduz o saldo da conta
            localStorage.setItem("conta", JSON.stringify(conta)); // Atualiza no localStorage
            alert(`Você retirou R$ ${valor.toFixed(2)}. Saldo restante: R$ ${contaSelecionada.saldo.toFixed(2)}`);
        } else {
            alert("Saldo insuficiente!");
        }
    } else {
        console.error("Conta não encontrada.");
    }
    window.location.href="gerir_conta.html";
  }


function exibirValores(conta:Array<{id:number,nome:string,saldo:number,num_conta:number}>) {
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
                  <section class="Levant">  <button>Levantar</button></section>
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
