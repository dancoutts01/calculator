window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const initialValues = {amount: 10000, years: 3, rate: 5};
  const amount = document.getElementById('loan-amount');
  amount.value = initialValues.amount;
  const years = document.getElementById('loan-years');
  years.value = initialValues.years;
  const rate = document.getElementById('loan-rate');
  rate.value = initialValues.rate; 


}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(initialValues) {
  const interestRate = (initialValues.rate /100 / 12);
  const n = Math.floor(initialValues.years * 12);
  return (
    (interestRate * initialValues.amount) /
    (1 - Math.pow((1 + interestRate), -n))
  ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  monthlyPayment = document.getElementById('monthly-payment');
  monthlyPayment.innerText = 'The monthly payment is' + '$' + monthly;
}
