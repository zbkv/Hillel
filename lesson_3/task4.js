let num1 = prompt("enter first digit")
if (num1!== null){
    let num2 = prompt("enter second digit")
    if (num2!==null){
        if(num1%num2===0){
        console.log("second digit is a divisor of first")
        }else(console.log("second digit is NOT a divisor of first"))
        if(num2%num1===0){
        console.log("first digit is a divisor of seckond")
        }else(console.log("first digit is NOT a divisor of seckond"))
    }
}