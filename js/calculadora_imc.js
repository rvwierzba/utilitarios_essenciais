// Arquivo: js/calculadora_imc.js
function calcularIMC() {
    // Coletar e converter os valores
    const peso = parseFloat(document.getElementById('peso').value); // em Kg
    const altura = parseFloat(document.getElementById('altura').value); // em Metros

    // Validação
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById('resultado-imc').innerHTML = '<p class="error">Por favor, insira valores válidos para peso e altura.</p>';
        return;
    }

    // Fórmula: IMC = peso / (altura * altura)
    const imc = peso / (altura * altura);
    const imcFormatado = imc.toFixed(2).replace('.', ',');
    
    // Classificação
    let classificacao = '';
    let cor = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
        cor = 'blue';
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = 'Peso normal (Parabéns!)';
        cor = 'green';
    } else if (imc >= 25.0 && imc <= 29.9) {
        classificacao = 'Sobrepeso';
        cor = 'orange';
    } else if (imc >= 30.0 && imc <= 39.9) {
        classificacao = 'Obesidade';
        cor = 'red';
    } else {
        classificacao = 'Obesidade Grave';
        cor = 'darkred';
    }

    // Exibir o resultado
    const resultadoHTML = `
        <p>Seu IMC é: <strong style="color: ${cor}; font-size: 1.5em;">${imcFormatado}</strong></p>
        <p>Classificação: <strong style="color: ${cor};">${classificacao}</strong></p>
    `;

    document.getElementById('resultado-imc').innerHTML = resultadoHTML;
}

// Inicia o cálculo ao carregar a página com valores padrão
document.addEventListener('DOMContentLoaded', calcularIMC);