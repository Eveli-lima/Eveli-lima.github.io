// ===================================
// 1. Formulário de Contato
// ===================================
function enviarMensagem(event) {
    event.preventDefault(); // Evita recarregar a página

    let nomeInput = document.querySelector('input[type="text"]');
    let nome = nomeInput ? nomeInput.value : "Visitante"; // Proteção caso não ache o input
    
    if(nome) {
        alert("Obrigado, " + nome + "! Sua mensagem foi enviada com sucesso.");
    } else {
        alert("Mensagem enviada com sucesso!");
    }

    let form = document.querySelector('form');
    if (form) form.reset(); // Limpa o formulário
}

// Mensagem no console
console.log("Portfólio da Éveli carregado com sucesso!");

// ===================================
// 2. Typewriter Effect (Efeito de Digitação)
// ===================================
document.addEventListener('DOMContentLoaded', function() { // Garante que o HTML carregou
    
    const typewriterElement = document.getElementById('typewriter-text');
    
    if (typewriterElement) {
        const texts = [
            "Python & Automação.",
            "Análise de Dados.",
            "Desenvolvimento Web."
        ];
        
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        function type() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typewriterElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typewriterElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 150;
            }

            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                typingSpeed = 2000;
            } 
            else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typingSpeed = 500;
            }

            setTimeout(type, typingSpeed);
        }

        setTimeout(type, 1000);
    }

    // ===================================
    // 3. Modal de Vídeo (O novo código)
    // ===================================
    
    // Primeiro, procuramos o botão para ver se ele existe nesta página
    const btn = document.getElementById("btnVideo");

    // SÓ executa o resto se o botão existir (Isso evita erro na Home/Contato)
    if (btn) {
        const modal = document.getElementById("modalVideo");
        const span = document.getElementsByClassName("fechar-modal")[0];
        const video = document.getElementById("meuVideo");

        // Abrir Modal
        btn.onclick = function() {
            modal.style.display = "flex"; 
            if(video) video.play(); 
        }

        // Fechar no X
        if (span) {
            span.onclick = function() {
                modal.style.display = "none";
                if(video) {
                    video.pause();
                    video.currentTime = 0;
                }
            }
        }

        // Fechar clicando fora
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                if(video) {
                    video.pause();
                    video.currentTime = 0;
                }
            }
        }
    }
});