let data = prompt("enter something")
    if(data !== null){
        let num = Number(data)
        if(typeof num =='number' && isNaN(num) == false){
            console.log(`You won ${num + 100} point ! `)
        } else ( console.log("Its not your day :("))
    }




