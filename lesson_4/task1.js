let n = prompt("enter num")
if (n!== null){
    for (n;n>1;n--){
        for(let i = 2; i<=n; i++){
            if (n % i === 0 && i !== n){
                break;
            }else if (i === n ){
                console.log(n)}
        }
    }
}


 /*let n = 10;

 for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++) {

     if (i % j === 0 && i!==j){
         continue} else if (i===j){
            console.log( `простое число ${i}` );
         }
    }
 }*/


 /*let n = prompt("enter number");
 if(n!==null){
 nextPrime:
 for (let i = 2; i <= n; i++) {
   for (let j = 2; j < i; j++) {
     if (i % j === 0) continue nextPrime;
   }
   console.log( i );
 }
}*/


/*for(let n = prompt("enter num"); n > 1; n--){
        for(let i = 2; i<=n; i++){
            if(n % i === 0 && i !== n){
            break;
            }else if(i === n){
            console.log(n);
            break;
            }
        }
    }*/
