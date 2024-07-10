document.addEventListener('DOMContentLoaded', function() {
    const frases = [
        "Lo sentimos, pero esta promoción es solo para aquellos que ven la belleza divina en todas las cosas. La percepción espiritual transforma la realidad.", 
        "¡Ay! Parece que tu teléfono no es lo suficientemente moderno para esta oferta." ,
        "Lo sentimos, pero esta promoción es solo para personas con mejor gusto en moda.",
        "¡Oops! Parece que tu nivel de ingresos no cumple con los requisitos para esta promoción. La brecha de ingresos sigue aumentando en muchas partes del mundo.",
    ];

    const fraseElement = document.getElementById('frase');
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    
    fraseElement.textContent = fraseAleatoria;
});