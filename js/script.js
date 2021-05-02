// currency converter - version 1 - converts PLN into other currencies based on the default exchange rate

{
  const calculateResult = (input, currency) => {
    const valueCHF = 4.13;
    const valueEUR = 4.55;
    const valueGBP = 5.26;

    switch (currency) {
      case "CHF":
        return input / valueCHF;

      case "EUR":
        return input / valueEUR;

      case "GBP":
        return input / valueGBP;
    }
  };

  const updateResultText = (input, value, currency) => {
    const valueElement = document.querySelector(".js-value");

    valueElement.innerHTML = `${input.toFixed(2)} PLN = <strong>${value.toFixed(2)} ${currency}</strong>`;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const inputValue = document.querySelector(".js-inputValue");
    const selectedCurrency = document.querySelector(".js-selectedCurrency");

    const input = +inputValue.value;
    const currency = selectedCurrency.value;

    const value = calculateResult(input, currency);

    updateResultText(input, value, currency);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
  };
  init();
}
