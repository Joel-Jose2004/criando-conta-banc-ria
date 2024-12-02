import { inser } from "./DAO/inserir_Ususario.js";
const btn=document.getElementById("criar")as HTMLInputElement



btn.addEventListener("click",function(){

        const name=(document.getElementById("idname")as HTMLInputElement).value;
        const email=(document.getElementById("idemail")as HTMLInputElement).value;
        const password=(document.getElementById("idpass")as HTMLInputElement).value;
    
    
inser(name,email,password);

window.location.href="../html/login.html"
})