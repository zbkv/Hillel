let cars = [
    {model: "Honda", speed: 200 },
    {model: "Toyota", speed: 190 },
    {model: "BMW", speed: 210 },
    {model: "Ford", speed: 190 }
   ];

   let sorted = []

   while (cars.length!==0){

    let max = -Infinity;
    let currentIndex = 0

    for( i = 0; i < cars.length; i++ ){

        let car = cars[i]
        let speed = car.speed

       if( speed > max ){
            max = speed
            currentIndex = i
        }
    }

    let currentMax = cars[currentIndex]
    sorted.push(currentMax);
    cars.splice(currentIndex, 1);
}

    console.log(sorted)




