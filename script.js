const convertButton = document.querySelector(".button-convert")
const converterSelect = document.querySelector(".coin-select")

function convertValues() {
    const inputValue = document.querySelector(".value-input").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")  //valor inicial para ser convertido
    const convertedValue = document.querySelector(".currency-value") //valor convertido (Outras moedas)

    console.log(converterSelect.value)
    const dolarToday = 6
    const euroToday = 6
    const libraToday = 7
    const bitCoinToday = 10


    if (converterSelect.value == "dolar") {
        convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarToday)
    }

    if (converterSelect.value == "euro") {
        convertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday)
    }

    if (converterSelect.value == "libra") {
        convertedValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue / libraToday)
    }

    if (converterSelect.value == "bitcoin") {
        convertedValue.innerHTML = `₿ ${(inputValue / bitCoinToday).toFixed(8)}`;
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)

}


function currencyChange() {
    const textData = document.querySelector(".currency-name-change")
    const currencyImage = document.querySelector(".img-currency")

    if (converterSelect.value == "dolar") {
        textData.innerHTML = "Dolar"
        currencyImage.src = "./assets/dolar.png"
    }

    if (converterSelect.value == "euro") {
        textData.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (converterSelect.value == "libra") {
        textData.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"

    }

    if (converterSelect.value == "bitcoin") {
        textData.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"

    }

    convertValues()
}

converterSelect.addEventListener("change", currencyChange)
convertButton.addEventListener("click", convertValues)