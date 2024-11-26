
function Levantar(id:number){
    document.getElementById("myModal")!.style.display="block";

    var var_id=document.getElementById("id_acount")as HTMLInputElement;
    var_id.value=id.toString();

}

function depositar(id:number){
    document.getElementById("myModal2")!.style.display="block";

    var var_id=document.getElementById("id_acount2")as HTMLInputElement;
    var_id.value=id.toString();

}

function transferir(id:number){
    document.getElementById("myModal3")!.style.display="block";

    function fecharModal3(){
        document.getElementById("myModal3")!.style.display="none";
    }

    var ident=document.getElementById("id-transfer")as HTMLInputElement;
    ident.value=id.toString();
}

