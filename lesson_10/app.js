

// let count=0;
// document.querySelector(".object").addEventListener("click",function(el){

//     count +=1;
//     console.log(count)

//     if(count = 1){el.target.classList.add("black")}
//     if(count = 2){el.target.classList.add("green")}
// })


// !! комменатрии оставил специально, еще буду думать над тем как сделать болeе адекватно !!




document.querySelector(".object").addEventListener("click", function(el){

// el.target.classList.toggle("black")



    if (el.target.classList.contains( "black" )){
        el.target.classList.remove("black")
        el.target.classList.add("green")

    }else if(el.target.classList.contains("green")){
        el.target.classList.remove("green")

    }else{el.target.classList.add("black")
}
})


// document.querySelector(".object").addEventListener("click", function(){
// this.style.background = "red";
// })




