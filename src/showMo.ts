document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("myModal")as HTMLInputElement;
    var openModalBtn = document.getElementsByClassName("Levant");
    var closeBtn = document.getElementsByClassName("closeModalBtn")[0]as HTMLInputElement; // Corrigido para 'closeModalBtn'
  
    // Quando o botão de abrir for clicado, o modal será aberto
    for (let i = 0; i < openModalBtn.length; i++) {
        openModalBtn[i].addEventListener("click",function() {
            modal.style.display = "block";
        })
}
  
    // Função para fechar o modal
    function fecharModal() {
        (document.getElementById("myModal")as HTMLInputElement).style.display = "none";
    }
  
    // Quando o 'x' de fechar for clicado, o modal será fechado
    closeBtn.onclick = function() {
        fecharModal();
    };
  
    // Quando o usuário clicar fora do modal, ele será fechado
    window.onclick = function(event) {
        if (event.target === modal) {
            fecharModal();
        }
    };
  });
  