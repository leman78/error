document.addEventListener('DOMContentLoaded', function() {
    const frases = [
        "Esta oferta es tan exclusiva que solo aquellos que no se preocupan por pagar el alquiler pueden acceder a ella. ¿Sabías que? La falta de vivienda es un problema grave en muchas ciudades.", 
       "¡Felicidades! Has descubierto una oferta que no está disponible para ti." ,
        "Lo sentimos, pero esta oferta solo está disponible en un universo paralelo.",
        "¡Oops! Esta oferta es solo para aquellos que encuentran la paz interior en tiempos de escasez. La serenidad espiritual es un regalo invaluable." ,
    ];

    const fraseElement = document.getElementById('frase');
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    
    fraseElement.textContent = fraseAleatoria;
});