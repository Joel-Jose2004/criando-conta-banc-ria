document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById("myModal");
  var openModalBtn = document.getElementsByTagName("section");
  var closeBtn = document.getElementsByClassName("closeModalBtn")[0]; // Corrigido para 'closeModalBtn'

  // Quando o botão de abrir for clicado, o modal será aberto
  for (let i = 0; i < openModalBtn.length; i++) {
      openModalBtn[i].onclick = function() {
          modal.style.display = "block";
      };
  }

  // Função para fechar o modal
  function fecharModal() {
      document.getElementById("myModal").style.display = "none";
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
