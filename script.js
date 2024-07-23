document.addEventListener('DOMContentLoaded', () => {
    populateCurrencyDropdowns();
});

const apiKey = 'YOUR_API_KEY';
const apiUrl = `https://api.exchangerate-api.com/v4/latest/USD`;
let exchangeRates = {}; // Store exchange rates to avoid repeated API calls

function populateCurrencyDropdowns() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            exchangeRates = data.rates; // Store the rates globally
            const currencies = Object.keys(data.rates);
            const currencyFromDropdown = document.getElementById('currency-from');
            const currencyToDropdown = document.getElementById('currency-to');

            currencies.forEach(currency => {
                const option = document.createElement('option');
                option.value = currency;
                option.text = currency;
                currencyFromDropdown.add(option.cloneNode(true));
                currencyToDropdown.add(option);
            });
        })
        .catch(error => console.error('Error fetching currencies:', error));
}

function convertCurrency() {
    const amountFrom = parseFloat(document.getElementById('amount-from').value);
    const currencyFrom = document.getElementById('currency-from').value;
    const currencyTo = document.getElementById('currency-to').value;

    if (!amountFrom || !currencyFrom || !currencyTo) return;

    const exchangeRate = exchangeRates[currencyTo] / exchangeRates[currencyFrom];
    const amountTo = amountFrom * exchangeRate;

    document.getElementById('amount-to').value = amountTo.toFixed(2);
    document.getElementById('exchange-rate').innerText = `1 ${currencyFrom} = ${exchangeRate.toFixed(4)} ${currencyTo}`;
}

function reverseConvertCurrency() {
    const amountTo = parseFloat(document.getElementById('amount-to').value);
    const currencyFrom = document.getElementById('currency-from').value;
    const currencyTo = document.getElementById('currency-to').value;

    if (!amountTo || !currencyFrom || !currencyTo) return;

    const exchangeRate = exchangeRates[currencyFrom] / exchangeRates[currencyTo];
    const amountFrom = amountTo * exchangeRate;

    document.getElementById('amount-from').value = amountFrom.toFixed(2);
    document.getElementById('exchange-rate').innerText = `1 ${currencyFrom} = ${exchangeRate.toFixed(4)} ${currencyTo}`;
}

function swapCurrencies() {
    const currencyFrom = document.getElementById('currency-from').value;
    const currencyTo = document.getElementById('currency-to').value;

    document.getElementById('currency-from').value = currencyTo;
    document.getElementById('currency-to').value = currencyFrom;

    // Swap the input values
    const amountFrom = document.getElementById('amount-from').value;
    const amountTo = document.getElementById('amount-to').value;

    document.getElementById('amount-from').value = amountTo;
    document.getElementById('amount-to').value = amountFrom;

    // Trigger conversion
    convertCurrency();
}
