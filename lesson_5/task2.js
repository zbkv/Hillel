let arr = [1, [2,3], 4, [5,6], 7, [8,9]];
for ( i = 0; i < arr.length; i++ ) {
    if ( typeof arr[i] === "number" ) {
    console.log ( arr[i] )
    }
    for( j = 0; j < arr[i].length; j++ ){
    console.log( arr[i][j] )}
}



// let arr = [1, [2,3], 4, [5,6], 7, [8,9]];
// for ( i = 0; i < arr.length; i++ ) {
//     if ( typeof arr[i] === "number" ) {
//         (console.log(arr[i]))
//         } else for( j = 0; j < arr[i].length; j++ ){
//             console.log( arr[i][j] )}

// }


// let arr = [1, [2,3], 4, [5,6], 7, [8,9]];
// for ( i = 0; i < arr.length; i++ ) {
//     if ( typeof arr[i] === "object" ) {
//         for( j = 0; j < arr[i].length; j++ ){
//             console.log( arr[i][j] )}
//         } else (console.log(arr[i]))
// }