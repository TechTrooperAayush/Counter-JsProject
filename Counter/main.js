let count = 0;
let liveCounter = document.getElementById("show_count");
let prevbtn = document.querySelector(".prev");
let nextbtn = document.querySelector(".next");
let previmg = document.getElementById("prev-img");
let nextimg = document.getElementById("next-img");

function updateOpacity() {
    if (count === 0) {
        previmg.style.opacity = 0;
        nextimg.style.opacity = 0;
    }
}

prevbtn.addEventListener("click",function(){
    console.log("Decremented");
    previmg.style.opacity = 1;
    nextimg.style.opacity = 0;;
    count--;
    liveCounter.innerHTML = count;
    updateOpacity();
})

nextbtn.addEventListener("click",function(){
    console.log("Incremented");
    previmg.style.opacity = 0;
    nextimg.style.opacity = 1;
    count++;
    liveCounter.innerHTML = count;
    updateOpacity();
    
})

