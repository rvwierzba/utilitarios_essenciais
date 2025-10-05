// Arquivo: js/contador_palavras.js
function contarPalavras() {
    const texto = document.getElementById('texto-input').value;

    // Remove espaços extras no início e fim para contagem correta
    const textoLimpo = texto.trim(); 

    // Contagem de Caracteres (com e sem espaço)
    const caracteresComEspaco = textoLimpo.length;
    const caracteresSemEspaco = textoLimpo.replace(/\s/g, '').length;

    // Contagem de Palavras
    // Usa expressão regular para dividir por um ou mais espaços/quebras de linha,
    // garantindo que não conte strings vazias.
    const palavrasArray = textoLimpo === "" ? [] : textoLimpo.split(/\s+/);
    const numPalavras = palavrasArray.length;

    // Contagem de Frases (simplificada: conta pontos finais, interrogações e exclamações)
    const numFrases = (textoLimpo.match(/[.!?]+/g) || []).length;

    // Atualiza o HTML
    document.getElementById('cont-palavras').textContent = numPalavras;
    document.getElementById('cont-caracteres-espaco').textContent = caracteresComEspaco;
    document.getElementById('cont-caracteres-sem-espaco').textContent = caracteresSemEspaco;
    document.getElementById('cont-frases').textContent = numFrases;
}

// Inicia a contagem ao carregar a página
document.addEventListener('DOMContentLoaded', contarPalavras);