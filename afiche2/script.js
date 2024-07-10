document.addEventListener('DOMContentLoaded', function() {
    const frases = [
        "¡Oops! Tu cuenta bancaria no cumple con los requisitos para esta oferta." , 
        "¡Felicidades! Has desbloqueado una oferta exclusiva... para aquellos que ganan más del salario mínimo. ¿Sabías que? El salario mínimo no siempre cubre las necesidades básicas.",
        "Esta promoción es solo para clientes que no necesitan descuentos." ,
        "¡Wow! Esta oferta es tan exclusiva que ni siquiera tú puedes acceder a ella.",
    ];

    const fraseElement = document.getElementById('frase');
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    
    fraseElement.textContent = fraseAleatoria;
});