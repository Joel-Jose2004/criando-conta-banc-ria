        document.addEventListener("DOMContentLoaded", function() {
            var modal2 = document.getElementById("myModal2")as HTMLInputElement;
            var openModalBtn2 = document.getElementsByClassName("depo");
            var closeBtn2 = document.getElementsByClassName("closeModalBtn2")[0]as HTMLInputElement; // Corrigido para 'closeModalBtn'
        
            // Quando o botão de abrir for clicado, o modal será aberto
            for (let i = 0; i < openModalBtn2.length; i++) {
                openModalBtn2[i].addEventListener("click",function() {
                    modal2.style.display = "block";
                })
        }
        
            // Função para fechar o modal
            function fecharModal() {
                (document.getElementById("myModal")as HTMLInputElement).style.display = "none";
            }
        
            // Quando o 'x' de fechar for clicado, o modal será fechado
            closeBtn2.onclick = function() {
                fecharModal();
            };
        
            
        });
        