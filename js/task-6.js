const numbers = [];
let total = 0;
while (true) {
  let input = prompt("введите число");
  if (input == null) {
    break;
  }
  input = Number(input);
  const notNumber = Number.isNaN(input);
  if (notNumber) {
    console.log("Было введено не число, попробуйте еще раз!");
    continue;
  }
  numbers.push(input);
}
for (let number of numbers) {
  total += number;
}
console.log(`Общая сумма чисел равна ${total}`);
