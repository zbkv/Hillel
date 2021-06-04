let main = prompt("enter 6-digit number")
if (main!==null){
    if (main>=100000 && main<=999999){
        num6=main%10
        num5=((main-(main%10))/10)%10
        num4= ((main-(main%100))/100)%10
        num3= ((main-(main%1000))/1000)%10
        num2= ((main-(main%10000))/10000)%10
        num1= ((main-(main%100000))/100000)%10
        if(num1===num6&&num2===num5&&num3===num4){
           console.log( `This number "${main}" is mirrored `)
        }else(console.log( `The number "${main}" is NOT mirrored `))
    }else(console.log("you entered nit a 6-digit number"))
}