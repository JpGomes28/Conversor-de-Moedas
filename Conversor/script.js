document.addEventListener("DOMContentLoaded", function() {
    const convertButton = document.getElementById('convert');
    const resultDiv = document.getElementById('result');

    const exchangeRates = {
        USD: 1.00,
        EUR: 0.90,
        GBP: 0.75,
        JPY: 110.00,
        CAD: 1.25
        // Adicione mais moedas e taxas de câmbio aqui
    };

    convertButton.addEventListener('click', () => {
        const amount = parseFloat(document.getElementById('amount').value);
        const fromCurrency = document.getElementById('fromCurrency').value;
        const toCurrency = document.getElementById('toCurrency').value;

        const exchangeRate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
        const convertedAmount = amount * exchangeRate;
        resultDiv.textContent = `${amount.toFixed(2)} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    });
});