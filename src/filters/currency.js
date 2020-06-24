function mille(value) {
  return value
    .substring(0, value.length - 3)
    .concat(" ", value.substring(value.length + 1, value.length - 3));
}
function million(value) {
  return value
    .substring(0, value.length - 6)
    .concat(" ", mille(value.substring(value.length + 1, value.length - 6)));
}
function milliard(value) {
  return value
    .substring(0, value.length - 9)
    .concat(" ", million(value.substring(value.length + 1, value.length - 9)));
}
const currency = (value, devise) => {
  value = value.toString();
  const tab = {
    cent: value.length < 4,
    mille: value.length >= 4 && value.length <= 6,
    millio: value.length >= 7 && value.length <= 9,
    millia: value.length >= 10 && value.length <= 12
  };
  if (tab.cent) {
    return value.concat(" ", devise);
  } else if (tab.mille) {
    return mille(value).concat(" ", devise);
  } else if (tab.millio) {
    return million(value).concat(" ", devise);
  } else {
    return milliard(value).concat(" ", devise);
  }
};
export default currency;
