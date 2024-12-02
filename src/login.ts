import { confirm } from "./DAO/confirn_login.js";

const btn=document.getElementById("login")as HTMLInputElement;

btn.addEventListener("click", function(){
    
    const name=(document.getElementById("idname")as HTMLInputElement).value;

    const password=(document.getElementById("idpass")as HTMLInputElement).value;
 

confirm(name,password);


})

