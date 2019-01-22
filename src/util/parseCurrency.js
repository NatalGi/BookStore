import Money from 'money-math';

const parseCurrency = (floatValue) => {
  return Money.format("PLN", Money.floatToAmount(floatValue));
}

export default parseCurrency;
