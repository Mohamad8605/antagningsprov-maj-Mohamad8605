function uppg10(){
  const numbers = [ 5, 12, 7, 10, 20, 9, 11 ];
  const bigEven = [];
  const smallOdd = [];
  const other = [];

  for (const number of numbers) {
    if (number > 10 && number % 2 === 0) {
      bigEven.push(number);
    } else if (number < 10 && number % 2 !== 0) {
      smallOdd.push(number);
    } else {
      other.push(number);
    }
  }

  return { bigEven, smallOdd, other };
}

module.exports = { uppg10 };
