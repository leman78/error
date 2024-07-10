document.addEventListener('DOMContentLoaded', function() {
    const frases = [
        "Esta promoción es solo para aquellos que practican la generosidad sin esperar nada a cambio. Dar amor y apoyo a los demás eleva el alma.", 
        "Esta oferta es tan exclusiva que solo existe en tu imaginación." ,
        "Esta promoción es solo para personas que pueden permitirse vacaciones en el extranjero. ¿Sabías que? El turismo genera ingresos para muchas economías, pero no todos pueden permitírselo.",
        "Esta oferta es solo para personas que no necesitan ofertas." ,
    ];

    const fraseElement = document.getElementById('frase');
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    
    fraseElement.textContent = fraseAleatoria;
});