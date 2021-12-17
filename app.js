let hours = document.querySelector(".timer-hours")
let minutes = document.querySelector(".timer-minutes")
let seconds = document.querySelector(".timer-seconds")
let btn = document.querySelector(".btn")

setInterval(updateTime, 1000)


function updateTime(){
    time = new Date()

    hours.innerHTML = time.getHours()
    minutes.innerHTML = time.getMinutes()
    seconds.innerHTML = time.getSeconds()

    if (seconds.innerHTML < 10){
        seconds.innerHTML = `0${time.getSeconds()}`
    }
    
    if(minutes.innerHTML < 10){
        minutes.innerHTML = `0${time.getMinutes()}`
    }
    
    if(hours.innerHTML < 10){
        hours.innerHTML = `0${time.getHours()}`
    }
}