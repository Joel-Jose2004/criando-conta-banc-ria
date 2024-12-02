import { inser } from "./DAO/inserir_Ususario.js";
const btn = document.getElementById("criar");
btn.addEventListener("click", function () {
    const name = document.getElementById("idname").value;
    const email = document.getElementById("idemail").value;
    const password = document.getElementById("idpass").value;
    inser(name, email, password);
    window.location.href = "../html/login.html";
});
