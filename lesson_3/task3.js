
let num = prompt("enter three-digit number")
if (num !== null){
    if(num >= 100 && num <= 999){
    let dig3 = num % 10
    let dig2 = ((num - dig3) / 10) % 10
    let dig1 = (((num - dig3) / 10) - dig2 ) / 10

        if(dig1 === dig2 && dig2 === dig3){
            console.log(" a) all theree digits are equal ");
        }else(console.log(" a) NOT all the digits are equal "))
        if(dig1 === dig2 || dig2 === dig3 || dig3 === dig1){
            console.log(" b) there are equal digits ");
        }else(console.log(" b) there are NO equal digits "))

        console.log("с) sum of numbers =",dig1 + dig2 + dig3)
    }else{console.log("wrong data")}
}

