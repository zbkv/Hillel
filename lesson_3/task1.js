 let num = prompt("enter the number from 0 to 59")
     if (num !== null){
         if(num>=0 && num<=59 ){
         switch (true){
             case num>=0 && num<=15 :
              console.log("1 quarter");
              break;
             case num>15 && num<=30 :
              console.log("2 quarter");
              break;
             case num>30 && num<=45 :
              console.log("3 quarter");
              break;
             case num>45 && num<=59 :
              console.log("4 quarter");
              break;
         }
        }else{console.log("wrong data")}
     }



