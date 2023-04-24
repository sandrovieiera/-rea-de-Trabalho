let sec = 0
let min = 0
let hr = 0
let intervalo

function twodigito(digito){
    if(digito<10){
        return ['0'+digito]
    }else{
        return[digito]
    }
}

function start() {
    intervalo = setInterval(watch, 1000)
}

function pouse() {
    clearInterval(intervalo);
}


function reset() {
    clearInterval(intervalo)
    sec=0
    min=0
    document.getElementById('relogio').innerText='00:00:00'
}



function watch() {
    sec++
    if (sec == 60) {
        min++
        sec = 0
        if(min==60){
        min=0
        hr++
        }
    }
    document.getElementById('relogio').innerText =twodigito(hr)+':'+twodigito(min)+ ':' +twodigito(sec)
}