
const buttons = document.querySelectorAll('.timer__button')
let countdown;


function timer(seconds){
    //restituisce il numero di millisecondi trascori dal Gennaio 1, 1970 ad oggi
    const dateNow = Date.now()
    //restituisce il numero in milliseconti ad oggi + i secondi passati in ingresso moltiplicati per 1000
    const then = dateNow + (seconds * 1000)
    //invoca la funzione di visualizzazione così che venga visualizzato anche il primo numero del conto alla rovescia
    clearInterval(countdown)
    showsecondsLeft(seconds)
    displayEndTime(then)

    countdown = setInterval(()=>{

        let secondsLeft = Math.round((then - Date.now()) / 1000)
        if(secondsLeft <= 0){
            clearInterval(countdown)
            return
        }
        showsecondsLeft(secondsLeft)
    },1000)  
}

//funzione per visualizzare il conto alla rovescia
function showsecondsLeft(seconds){
    const minutes = Math.floor(seconds / 60)
    const remaindSeconds = seconds % 60
    const display = `${minutes}:${remaindSeconds < 10 ? '0' : ''}${remaindSeconds}`
    document.querySelector('.display__time-left').textContent = display
    console.log(minutes, remaindSeconds)
}

//funzione per visualizzare il l'orario in cui il conto alla rovescia finisce
function displayEndTime(then){
    let time = new Date(then)
    let hoursEnd = time.getHours()
    let minutesEnd = time.getMinutes()
    document.querySelector('.display__end-time').textContent = ` Be Back at: ${hoursEnd < 10 ? '0' : ''}${hoursEnd}:${minutesEnd < 10 ? '0' : ''}${minutesEnd}`
    console.log(time)
}

function starterTime(e){
    let valButton = parseInt(this.dataset.time)
    timer(valButton)
    console.log(valButton)
}

function customTime(e){
    e.preventDefault()
    let minutes = this.minutes.value * 60
    timer(minutes)
    this.reset()
}

buttons.forEach(button => button.addEventListener('click', starterTime))
document.customForm.addEventListener('submit', customTime)