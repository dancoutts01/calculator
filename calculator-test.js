
it('should calculate the monthly rate correctly', function () {
  const initialValues = {amount: 10000, years: 10, rate: 6};
  expect(calculateMonthlyPayment(initialValues)).toBeCloseTo(111.02);
});

it("should return a result with 2 decimal places", function() {
  const initialValues = {amount: 10043, years: 8, rate: 5.8};
  expect(calculateMonthlyPayment(initialValues)).toBeCloseTo(131.00);
});

it("should handle really high interest rates", function() {
  const initialValues = {amount: 10000, years: 10, rate: 99};
  expect(calculateMonthlyPayment(initialValues)).toBeCloseTo(825.06);
});

it("should handle really low interest rates", function() {
  const initialValues = {amount: 10000, years: 10, rate: 0.1};
  expect(calculateMonthlyPayment(initialValues)).toBeCloseTo(83.75);
});

/// etc
