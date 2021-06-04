
let num = prompt("enter two-digit number")
if (num !== null){
    if(num >= 10 && num <= 99){
    let dig2 = +num % 10
    let dig1 = (num - dig2) / 10
        if(dig1!==dig2 || dig2!==dig1){
            let result = (dig1 > dig2) ?
            console.log("1'st digit is greater") :
            console.log("2'nd digit is greater");
    }else {console.log(" both digits are equal ")}
    }else{console.log("wrong data")}
}