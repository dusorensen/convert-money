const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.06
const euro = 5.52
const bitcoin = 0.0000069

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currancyValueText = document.getElementById('currency-value-text')

    const sumConvertDolar = (inputReais / dolar).toFixed(2)
    const sumConvertEuro = (inputReais / euro).toFixed(2)
    const sumConvertBitcoin = (inputReais * bitcoin)

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

