let lang = prompt("choose language : enter en/ua")
if (lang !== null){
    switch(lang){
        case "en" :
            let tempF = +prompt("enter temperature in Fahrenheit")
            console.log("temp in Celsium =", (tempF - 32) / 1.8)
        break;
        case "ua":
            let tempC = prompt("enter temperature in celsium")
            console.log("temp in Fahrenheit",tempC * 1.8 +32)
            break;
        default:
            console.log("unknown command")
    }
}