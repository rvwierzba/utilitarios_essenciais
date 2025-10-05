// O cálculo de juros compostos para fins de investimento (com aportes mensais)
function calcularJurosCompostos() {
    // 1. Coletar dados de entrada
    const capitalInicial = parseFloat(document.getElementById('capital').value);
    const aporteMensal = parseFloat(document.getElementById('aporte').value);
    const taxaAnual = parseFloat(document.getElementById('taxa').value);
    const periodoAnos = parseInt(document.getElementById('periodo').value);

    // 2. Conversões
    // Converte a taxa anual em decimal mensal: (taxa / 100) / 12
    const taxaMensal = (taxaAnual / 100) / 12;
    const periodoMeses = periodoAnos * 12;
    
    // Validar entradas
    if (isNaN(capitalInicial) || isNaN(aporteMensal) || isNaN(taxaAnual) || isNaN(periodoAnos) || periodoAnos < 1) {
        document.getElementById('resultado-cjc').innerHTML = '<p class="error">Por favor, insira valores válidos.</p>';
        return;
    }

    // 3. O principal - Cálculo Mês a Mês
    let montanteFinal = capitalInicial;
    let totalInvestido = capitalInicial;

    // Se houver aportes, faz o cálculo mês a mês
    if (taxaMensal > 0 || aporteMensal > 0) {
        // Itera pelos meses
        for (let i = 1; i <= periodoMeses; i++) {
            // Aplica o juro sobre o montante acumulado
            montanteFinal = montanteFinal * (1 + taxaMensal);
            
            // Adiciona o novo aporte (após o cálculo do juros)
            montanteFinal += aporteMensal;
            totalInvestido += aporteMensal;
        }
    } else {
        // Caso a taxa e aporte sejam zero, o montante final é o capital inicial
        montanteFinal = capitalInicial;
        totalInvestido = capitalInicial;
    }
    
    // 4. Calcular Ganhos
    // É importante subtrair o último aporte que foi somado no último mês do loop
    totalInvestido -= aporteMensal; 
    
    const jurosGanhos = montanteFinal - totalInvestido;

    // 5. Formatar e Exibir o Resultado
    const formatarBRL = (valor) => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    const resultadoHTML = `
        <p><strong>Resultado da Simulação após ${periodoAnos} anos:</strong></p>
        <p>Montante Final Acumulado: **${formatarBRL(montanteFinal)}**</p>
        <p>Total Investido (Aportes + Inicial): ${formatarBRL(totalInvestido)}</p>
        <p class="ganhos">**Ganhos Apenas com Juros:** ${formatarBRL(jurosGanhos)}</p>
    `;

    document.getElementById('resultado-cjc').innerHTML = resultadoHTML;
}

// Garante que o cálculo é executado ao carregar a página com os valores padrão
document.addEventListener('DOMContentLoaded', calcularJurosCompostos);