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
setInterval(createHeart, 300);

// Adicionar navegação aos botões
document.addEventListener('DOMContentLoaded', () => {
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