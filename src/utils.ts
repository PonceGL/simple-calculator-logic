export function formatNumber(number: number): string {
  const hasDecimals = number % 1 !== 0;
  const decimalDigits = hasDecimals
    ? (number.toString().split('.')[1] || '').length
    : 0;

  const formatter = new Intl.NumberFormat('en', {
    minimumFractionDigits: decimalDigits,
    maximumFractionDigits: decimalDigits,
  });

  const formattedNumber = formatter.format(number);
  const [integerPart, decimalPart] = formattedNumber.split('.');

  const integerPartWithCommas = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ','
  );

  return decimalPart
    ? `${integerPartWithCommas}.${decimalPart}`
    : integerPartWithCommas;
}
