/*let arr = [15, 68, 123, 9, 0, 64, 178, 3, 26]
let max = arr[0]
for(let i = 0; i<arr.length;i++){
    for(let j = 0; j<arr.length;j++){
        if(j>i){
            console.log(arr[j])
        }

    }

}*/



// let arr = [15, 68, 123, 9, 0, 64, 178, 3, 26]
// let max = arr[0];
// let maxIter = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//     arr[maxIter] = 0;
//     maxIter = i;
//   } else {
//     arr[i] = 0;
//   }
// }
// console.log(arr);


/*let arr = [15, 68, 123, 9, 0, 64, 178, 3, 26]
let sum=0;
let minSum=0
for(let i = 0; i < arr.length; i++){
     sum += arr[i]
     for(let j = 0; j < arr.length; j++){
     minSum = sum - arr[j]
     }
     console.log(minSum)

}
console.log(sum)*/

/*let arr = [15, 68, 123, 9, 0, 64, 178, 3, 26];
let max = arr[0];
for(let i = 0; i < arr.length; i++){
  if(arr[i] > max){
    max = arr[i];

  }
}
console.log(max)
console.log(arr)*/



// let arr = [15, 68, 123, 9, 0, 64, 178, 3, 26]
// let max = -Infinity;
// let maxIter= 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//     arr[maxIter] = 0;
//     maxIter = i;
//   } else {
//     arr[i] = 0;
//   }
// }
// console.log(arr);



let arr = [15, 68, 123, 9, 0, 64, 178, 3, 26]
let max = -Infinity;
let maxIter= 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
    if(maxIter !== undefined){
      arr[maxIter] = 0;
    }
    maxIter = i;
  } else {
    arr[i] = 0;
  }
}
console.log(arr);
