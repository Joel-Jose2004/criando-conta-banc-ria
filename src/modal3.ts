document.addEventListener("DOMContentLoaded", function() {
    var modal3 = document.getElementById("myModal3")as HTMLInputElement;
    var openModalBtn3 = document.getElementsByClassName("trans_fer");
    var closeBtn3 = document.getElementsByClassName("closeModalBtn3")[0]as HTMLInputElement; // Corrigido para 'closeModalBtn'

    // Quando o botão de abrir for clicado, o modal será aberto
    for (let i = 0; i < openModalBtn3.length; i++) {
        openModalBtn3[i].addEventListener("click",function() {
            modal3.style.display = "block";
        })
}

    // Função para fechar o modal
    function fecharModal() {
        (document.getElementById("myModal")as HTMLInputElement).style.display = "none";
    }

    // Quando o 'x' de fechar for clicado, o modal será fechado
    closeBtn3.onclick = function() {
        fecharModal();
    };

    
});
