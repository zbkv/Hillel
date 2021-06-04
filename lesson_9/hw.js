
function timer(){
    sec++;
    document.getElementById("timer").
    childNodes[0].nodeValue = sec;
    }

function interval() {
    sec = 0;
    setInterval(timer, 1000);
    }




