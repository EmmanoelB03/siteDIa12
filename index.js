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
    const button = document.querySelector('.next-button');
    const currentPath = window.location.pathname;
    
    if (button) {
        if (currentPath.includes('index2.html')) {
            button.addEventListener('click', () => {
                window.location.href = window.location.origin + window.location.pathname.replace('index2.html', 'index3.html');
            });
        } else if (!currentPath.includes('index3.html')) {
            button.addEventListener('click', () => {
                window.location.href = window.location.origin + window.location.pathname.replace('index.html', 'index2.html');
            });
        }
    }
});