const myActualCurrency = document.getElementById("amt");
const myConversionRate = document.getElementById("cr");

function calculateCurrency() {
  //  console.log(myActualCurrency.value);
  //console.log(myConversionRate.value);

  const total = myActualCurrency.value / myConversionRate.value;
  console.log(total);
  document.getElementById("total").innerHTML = total.toFixed(2);
}
