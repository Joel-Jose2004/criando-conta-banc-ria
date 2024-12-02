import { confirm } from "./DAO/confirn_login.js";
const btn = document.getElementById("login");
btn.addEventListener("click", function () {
    const name = document.getElementById("idname").value;
    const password = document.getElementById("idpass").value;
    confirm(name, password);
});
