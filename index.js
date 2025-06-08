function createHeart() {
    const heart = document.createElement('span');
    heart.innerHTML = '❤';
    heart.className = 'floating-heart';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.color = '#ff3366';
    heart.style.fontSize = '30px';
    heart.style.position = 'absolute';
    heart.style.bottom = '-100px';
    heart.style.animation = `float ${4 + Math.random() * 2}s linear infinite`;
    document.querySelector('.hearts-container').appendChild(heart);

    // Remove o coração depois que a animação terminar
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Criar corações a cada 300ms
let heartInterval;

// Função para iniciar a animação dos corações
function startHeartAnimation() {
    heartInterval = setInterval(createHeart, 300);
}

// Adicionar navegação aos botões e controlar a animação inicial
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('.main-content');
    
    // Esperar a animação do coração inicial terminar
    setTimeout(() => {
        mainContent.classList.remove('content-hidden');
        mainContent.classList.add('content-visible');
        startHeartAnimation();
    }, 2000); // 2 segundos, que é o tempo da animação do coração inicial

    const button = document.querySelector('.big-button, .next-button');
    
    if (button) {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        button.addEventListener('click', () => {
            if (currentPage === 'index.html' || currentPage === '') {
                window.location.href = './index2.html';
            } else if (currentPage === 'index2.html') {
                window.location.href = './index3.html';
            }
        });
    }
});