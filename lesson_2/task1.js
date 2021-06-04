let age = prompt( "How old are you?" )
    if(age !== null){
        if ( age <= 16 ) {
        let active = confirm( "Are you an active child ?" )
            if(active === true) {
                console.log( "You are potential child" )
            } else {
                    console.log( "You have no potential" )
                }
        }
        if ( age > 16 ) {
                let gender = prompt ( "Enter your gender male/female" )
                if ( gender == "male" || gender == "female") {
                    let bad = confirm ( "Do you have bad habbits ?" )
                    if ( gender == "male" && bad === false ) {
                        console.log (" You are HighPotential-Man")
                    }
                    if ( gender == "female" && bad === false ) {
                        console.log (" You are HighPotential-Woman")
                    }
                    if(bad === true) {
                        console.log (" You are OutOfScope") }

                } else ( alert ("Wrong gender") )
            }
    }