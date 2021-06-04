console.log("Iterators");

function fruitIterator(values) {
  let ind = 0;
  return {
    next: function () {
      if (ind < values.length)
        return {
          value: values[ind++],
          done: false,
        };
      else
        return {
          done: true,
        };
    },
  };
}
const myArray = ["Apples", "Banana", "Grapes"];
console.log("Array :", myArray);

const fruits = fruitIterator(myArray)
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
