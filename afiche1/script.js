document.addEventListener('DOMContentLoaded', function() {
    const frases = [
        "Lo sentimos mucho, pero usted no puede acceder a esta oferta porque su capacidad económica está por debajo de la línea de pobreza. ¿Sabías que? La pobreza afecta a más de 700 millones de personas en el mundo.", 
        "¡Felicidades! Has ganado una sonrisa. ¿No es genial?" ,
        "¡Felicidades! Has desbloqueado una gratitud espiritual profunda. Reconocer las bendiciones en tu vida es un acto de humildad espiritual.",
        "¡Oops! Parece que tu alma aún está en camino hacia la plenitud espiritual. El crecimiento espiritual requiere paciencia y perseverancia. Sigue participando",
    ];

    const fraseElement = document.getElementById('frase');
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    
    fraseElement.textContent = fraseAleatoria;
});