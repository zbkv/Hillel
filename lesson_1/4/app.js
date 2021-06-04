let num = prompt("введиет 5-ти значное число")
let num5 = num%10
let num4 =((num-num5)/10)%10
let rem100 = num%100
let num3 = ((num-rem100)/100)%10
let rem1000 = num%1000
let num2 = ((num-rem1000)/1000)%10
let rem10000 = num%10000
let num1 = ((num-rem10000)/10000)%10

console.log (`результат: ${num1} ${num2} ${num3} ${num4} ${num5}`)



