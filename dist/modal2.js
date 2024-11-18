document.addEventListener("DOMContentLoaded",function(){
  var modal2 = document.getElementById("myModal2");
  var openModalBtn2 = document.getElementsByClassName("depo");
  var closeBtn2 = document.getElementsByClassName("closeModalBtn2")[0];
  
  // Quando o botão de abrir for clicado, o modal será exibido
  openModalBtn2.onclick = function() {
    modal2.style.display = "block";
  }

  
  // Quando o botão de fechar for clicado, o modal será fechado
 function fecharModal2(){
  document.getElementById("myModal2").style.display="none";
 }
  // Quando o 'x' de fechar for clicado, o modal será fechado
  closeBtn2.onclick = function() {
    fecharModal2();
  }
  
  // Quando o usuário clicar fora do modal, ele será fechado
  window.onclick = function(event) {
    if (event.target === modal2) {
      fecharModal2();
    }
  }
})
