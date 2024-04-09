
let time = document.getElementById('time')
let count = document.getElementById('count')
let start = document.getElementById('start')
let countPersrcond = document.getElementById('count-per-second')
let restart = document.getElementById('restart')
const results = []

let i = 0 ;
let interval;
let timeout;
let timeValue = time.value;

time.onchange = (event) =>{
    timeValue = event.target.value;
    if(timeValue < 5){
        timeValue=5;
        time.value = 5;
    }else if(timeValue > 15){
        timeValue = 15;
        time.value = 15;
    }
}


start.onclick = () =>{
    i++;
    count.textContent = i;
    time.disabled = true
    if (i==1) {
        interval = setInterval(()=>{
            time.value--
        },1000);
        timeout = setInterval(()=>{
            clearInterval(interval);
            start.disabled = true;
            countPersrcond.textContent = i / timeValue;
            results.push(i / timeValue)
           const dd= document.querySelector('.record').textContent
            document.querySelector('.record').textContent =+dd< i / timeValue?i / timeValue:+dd == textContent 

        },timeValue * 1000)
    }
}

restart.onclick = ()=>{
    clearTimeout(timeout)
    clearInterval(interval)
    i = 0;
    count.textContent = 0;
    countPersrcond.textContent = 0;
    time.value = 10 ;
    start.disabled = false
    timeValue = 10;
    time.disabled = false
}