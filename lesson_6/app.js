
let categories = {
  1: "sport",
  2: "luxury",
  3: "offRoad"
}

/// Get category
let category;
do {
  category =  parseInt(prompt(`Please make your choice  \n 1 - sport 2 -luxury 3 - off`));
} while(category < 0 || category > 3 )

console.log(category);

// get items from category
let carsData = carsStore[categories[category]].items;

for(let i = 0; i < carsData.length; i++) {
  let car = carsData[i];
  console.log(`#${i + 1} ${car.name} | Price: ${car.price}`);
}


// chose the car
let userChoice;

do {
  userChoice =  parseInt(prompt(`Please make your choice ( 1 - ${carsData.length}`));
} while( isNaN(userChoice) || userChoice > carsData.length || userChoice === null)

console.log(userChoice);


// get count

let count;

do {
  count =  parseInt(prompt("Please enter the count"));
} while( isNaN(count) || count < 1 || userChoice === null)

console.log(count);


// get price
let price = 0;
let chosenCar = carsData[userChoice - 1 ];
let carsPrice = chosenCar.price;
let totalPrice = carsPrice * count;

let discount = 0;
if(totalPrice > 100000) {
  discount = totalPrice * 0.05;
}

if(discount > 0) {
  console.log(`Your discount: ${discount}`)
  console.log(`Your total price: ${totalPrice}`)
  console.log(`Your bill: ${totalPrice - discount}`)
} else {
  console.log(`Your total price: ${totalPrice}`)

}


function  sum (a, b) {
  if(b === undefined){

  }
}

