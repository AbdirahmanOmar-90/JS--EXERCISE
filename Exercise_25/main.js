let numbers = [1, 2, 3, 4, 5, 6]
let newNumbers = [...numbers, 7, 8, 9, 10]
console.log(newNumbers)
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0)
}
console.log(sum(2, 2, 2, 2))              
