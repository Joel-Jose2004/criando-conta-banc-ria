import { criar } from "./DAO/userFunction";

var btn=document.getElementById("criar")as HTMLInputElement;

export function getNome():string{
  const nome=(document.getElementById("idnome") as HTMLInputElement).value;
  return nome;
}

export function getSaldo():number{
  const saldo=document.getElementById("idsaldo") as HTMLInputElement;
 const novo_sal=parseFloat(saldo.value);
 return novo_sal;
}


btn.addEventListener("click",function(){
   criar();
})
