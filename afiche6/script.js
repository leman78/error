document.addEventListener('DOMContentLoaded', function() {
    const frases = [
       "¡Oops! Parece que tu situación económica no te permite acceder a esta oferta. ¿Sabías que? La movilidad económica es limitada para muchas personas atrapadas en la pobreza.", 
       "Esta promoción es solo para aquellos que no necesitan preocuparse por las facturas médicas. ¿Sabías que? La atención médica es inaccesible para muchos debido a los altos costos.",
        "¡Felicidades! Has ganado una bendición espiritual. La verdadera riqueza espiritual no se mide por lo material." ,
        "¿Sabías qué hoy en día mucha gente se queda afuera de ir a cenar por no contar con un dispositivo que le permita visualizar el menú?",
    ];

    const fraseElement = document.getElementById('frase');
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    
    fraseElement.textContent = fraseAleatoria;
});