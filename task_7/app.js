// // TASK_1

// function summ(){
//   let num = 0;

//   return function (value){
//     return (num += value);
//   }
// }

// let call = summ()

// console.log(call(20))
// console.log(call(10))


// // TASK_2

// let arr = [1 ,2, [3 ,4], 5, [6, 7, [8, 9, 10] ] ];

// function showArray(obj){
//     if(Array.isArray(obj) ){
//         obj.forEach(function(inner){
//             showArray(inner)
//         })
//     }else console.log(obj)
// }

// showArray(arr)


// TASK_3

// function searchName( item ){
//     if( item.emploies ){
//         console.log( item.name )
//         item.emploies.forEach(( element ) => searchName( element ))

//         } else console.log( item.name )
//     }


//     for( let level in organization ){
//         searchName( organization[level] )
//     }







