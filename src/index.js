import { slide, selectDot } from "./slideImage"


let display = document.getElementById('display')

let images = []


for (let i = 1; i<11; i++) {
    images.push(`cat${i}`)

    let dot = document.createElement('div')
    dot.classList.add('dot')
    dot.id = `dot-${i}`
    dot.addEventListener('click', () => {
        while (display.firstChild) {
            display.removeChild(display.firstChild)
        }
        let catDiv = document.createElement('div')
        catDiv.style.backgroundImage = `url(./media/images/${images[i-1]}.jpg)`
        display.appendChild(catDiv)
        selectDot(i)
        timer.reset(5000)
    })
    document.getElementById('dots').append(dot)
}


let catDiv = document.createElement('div')
catDiv.style.backgroundImage = `url(./media/images/${images[0]}.jpg)`
display.appendChild(catDiv)
selectDot(1)

document.getElementById('left-arrow').addEventListener('click', () => {
    slide('left', images.length)
    timer.reset(5000)
})
document.getElementById('right-arrow').addEventListener('click', () => {
    slide('right', images.length)
    timer.reset(5000)
})

function Timer(fn, t) {
    var timerObj = setInterval(fn, t);

    this.stop = function() {
        if (timerObj) {
            clearInterval(timerObj);
            timerObj = null;
        }
        return this;
    }

    // start timer using current settings (if it's not already running)
    this.start = function() {
        if (!timerObj) {
            this.stop();
            timerObj = setInterval(fn, t);
        }
        return this;
    }

    // start with new interval, stop current interval
    this.reset = function(newT) {
        t = newT;
        return this.stop().start();
    }
}

const timer = new Timer(() => { slide('right', images.length) }, 5000)

timer.start()