const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const convertValues = async () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currancyValueText = document.getElementById('currency-value-text')

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high

    const sumConvertDolar = (inputReais / dolar).toFixed(2)
    const sumConvertEuro = (inputReais / euro).toFixed(2)
    const sumConvertBitcoin = (inputReais / bitcoin)

    realValueText.innerHTML = inputReais

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais)

    if (select.value === "US$ Dolar Americano") {
        currancyValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(sumConvertDolar)
    }

    if (select.value === "€ Euro") {
        currancyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(sumConvertEuro)
    }

    if (select.value === "Bitcoin") {
            currancyValueText.innerHTML = sumConvertBitcoin
    }

}

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }
    if (select.value === 'US$ Dolar Americano') {
        currencyName.innerHTML = "Dolar"
        currencyImg.src = "./assets/eua.png"
    }

    if (select.value === 'Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    select.addEventListener('change', convertValues)
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)

