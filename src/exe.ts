import { criar } from "./DAO/userFunction.js";


var btn=document.getElementById("criar")as HTMLInputElement;


btn.addEventListener("click",function(){
  
  const nome=(document.getElementById("idnome") as HTMLInputElement).value;

  const saldo=document.getElementById("idsaldo") as HTMLInputElement;
 const novo_sal=parseFloat(saldo.value);

   criar(nome,novo_sal);
})
