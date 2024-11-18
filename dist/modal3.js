document.addEventListener("DOMContentLoaded",function(){
    var modal3 = document.getElementById("myModal3");
    var openModalBtn3 = document.getElementsByClassName("trans_fer");
    var closeBtn3 = document.getElementsByClassName("closeModalBtn3")[0];
    
    // Quando o botão de abrir for clicado, o modal será exibido
    openModalBtn3.onclick = function() {
      modal3.style.display = "block";
    }
  
    
    // Quando o botão de fechar for clicado, o modal será fechado
   function fecharModal3(){
    document.getElementById("myModal3").style.display="none";
   }
    // Quando o 'x' de fechar for clicado, o modal será fechado
    closeBtn3.onclick = function() {
      fecharModal3();
    }
    
    // Quando o usuário clicar fora do modal, ele será fechado
    window.onclick = function(event) {
      if (event.target === modal3) {
        fecharModal3();
      }
    }
  })
  