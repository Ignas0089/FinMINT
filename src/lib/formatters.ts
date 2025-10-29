const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const formatCurrency = (value: number) => currencyFormatter.format(value);

export const formatSignedCurrency = (value: number) => {
  const formatted = formatCurrency(Math.abs(value));
  return value > 0 ? `+${formatted}` : value < 0 ? `-${formatted}` : formatted;
};
