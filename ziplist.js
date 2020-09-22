const listOfNumbers = [1, 2, 3, 4, 5];
const listOfLetters = ['a', 'b', 'c', 'd', 'e'];

function zipList(numbers, letters) {
  const combine = [];
  for (let i = 0; i < numbers.length; i++) {
    combine.push(numbers[i]);
    combine.push(letters[i]);
  }
  return combine;
}

console.log(zipList(listOfNumbers, listOfLetters));

function zipListTheSimpleWay(numbers, letters) {
  return _.reduce(_.zip(numbers, letters), function (memo, num) { return memo.concat(num); }, []);
}

console.log(zipListTheSimpleWay(listOfNumbers, listOfLetters));
