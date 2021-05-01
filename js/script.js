// currency converter - version 1 - converts PLN into other currencies based on the default exchange rate

let form = document.querySelector(".js-form");
let inputValue = document.querySelector(".js-inputValue");
let selectedCurrency = document.querySelector(".js-selectedCurrency");
let value = document.querySelector(".js-value");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let chfValue = 4.13;
  let eurValue = 4.55;
  let gbpValue = 5.26;

  let plnValue = inputValue.value;
  let currency = selectedCurrency.value;
  let valueElement;

  switch (currency) {
    case "chf":
      valueElement = (plnValue / chfValue).toFixed(2);
      value.innerText = `${valueElement} CHF`;
      break;
    case "eur":
      valueElement = (plnValue / eurValue).toFixed(2);
      value.innerText = `${valueElement} EUR`;
      break;
    case "gbp":
      valueElement = (plnValue / gbpValue).toFixed(2);
      value.innerText = `${valueElement} GBP`;
      break;
    default:
      value.innerText = "Wybierz walutę i spróbuj ponownie";
  }
});
