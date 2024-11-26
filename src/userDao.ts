
interface Conta{
  id:number;
  nome:string;
  saldo:number;
  num_conta:number;
}


export function criar(novo_nome:string,novo_sal:number):void{
    const saldo=novo_sal.toString();
  
  if(novo_sal < 20000){
    alert("não pode abrir conta");
    return;
  }
  if(novo_nome=="" || saldo==""){
    alert("preencha todos os campos");
    return;
  }

var conta:Array<{id:number,nome:string,saldo:number,num_conta:number}>=[];
if(localStorage.hasOwnProperty("conta")){  
conta=JSON.parse(localStorage.getItem("conta")as string);
}
  var id=conta.length+1;
  const generateUniqueId=():string=>{
    return `${Date.now()}`
}


const Numero_de_conta=generateUniqueId();
const number_conta=parseFloat(Numero_de_conta.toString());

  conta.push({id:id,nome:novo_nome,saldo:novo_sal,num_conta:number_conta});

  localStorage.setItem("conta",JSON.stringify(conta));
  window.location.href="gerir_conta.html";
}



export function Levanta(id:number,valor:number){
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

