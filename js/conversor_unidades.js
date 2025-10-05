// Arquivo: js/conversor_unidades.js
function converterUnidade() {
    const valor = parseFloat(document.getElementById('valor-input').value);
    const tipo = document.getElementById('tipo-conversao').value;
    const resultadoDiv = document.getElementById('resultado-conversor');

    if (isNaN(valor)) {
        resultadoDiv.innerHTML = '<p class="error">Insira um valor numérico válido.</p>';
        return;
    }

    let resultadoHTML = `<p><strong>Resultado da Conversão:</strong></p>`;

    switch (tipo) {
        case 'temperatura':
            // Celsius para Fahrenheit: (C * 9/5) + 32
            const fahrenheit = (valor * 9/5) + 32;
            // Fahrenheit para Celsius: (F - 32) * 5/9
            const celsius = (valor - 32) * 5/9;
            resultadoHTML += `<p>${valor}°C é igual a **${fahrenheit.toFixed(2)}°F**</p>`;
            resultadoHTML += `<p>${valor}°F é igual a **${celsius.toFixed(2)}°C**</p>`;
            break;
        
        case 'peso':
            // Kilograma para Libra: 1 kg ≈ 2.20462 lb
            const libras = valor * 2.20462;
            // Libra para Kilograma: 1 lb ≈ 0.453592 kg
            const quilogramas = valor * 0.453592;
            resultadoHTML += `<p>${valor} Kg é igual a **${libras.toFixed(3)} lbs**</p>`;
            resultadoHTML += `<p>${valor} lbs é igual a **${quilogramas.toFixed(3)} Kg**</p>`;
            break;

        case 'comprimento':
            // Metro para Pé: 1 m ≈ 3.28084 ft
            const pes = valor * 3.28084;
            // Pé para Metro: 1 ft ≈ 0.3048 m
            const metros = valor * 0.3048;
            resultadoHTML += `<p>${valor} Metros é igual a **${pes.toFixed(2)} Pés**</p>`;
            resultadoHTML += `<p>${valor} Pés é igual a **${metros.toFixed(2)} Metros**</p>`;
            break;
    }

    resultadoDiv.innerHTML = resultadoHTML;
}
// Inicia a conversão ao carregar para mostrar um resultado padrão
document.addEventListener('DOMContentLoaded', converterUnidade);