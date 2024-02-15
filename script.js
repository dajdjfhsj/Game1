
document.addEventListener('keydown', function(event) {
    if (event.key === ' ' || event.code === 'Space') {
        jump();
    }
});

function jump() {
    const character = document.querySelector('.character');
    if (!character.classList.contains('jump')) {
        character.classList.add('jump');
        setTimeout(() => {
            character.classList.remove('jump');
        }, 400);
    }
}

// Add jump animation with CSS class
