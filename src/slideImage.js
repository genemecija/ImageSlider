const display = document.getElementById('display')

function slide(direction, max) {
    let currentImageNum = display.lastChild.style.backgroundImage.split('cat')[1].split('.')[0]

    

    let newCatDiv = document.createElement('div')
    
    let targetImageNum = -1

    if (direction == 'left') {

        targetImageNum = Number(currentImageNum) - 1
        
        if (targetImageNum < 1) {
            targetImageNum += max
        }
        
        newCatDiv.style.backgroundImage = `url(./media/images/cat${targetImageNum}.jpg)`
        
        display.firstChild.classList.remove('fadeIn')
        display.firstChild.classList.add('fadeOut')
        display.addEventListener('transitionend', () => {
            newCatDiv.classList.add('fadeIn')
        })
        while (display.firstChild) {
            display.removeChild(display.firstChild)
        }

        display.appendChild(newCatDiv)
        selectDot(targetImageNum)
    }
    if (direction == 'right') {
        
        targetImageNum = Number(currentImageNum) + 1

        if (targetImageNum > max) {
            targetImageNum -= max
        }
        
        newCatDiv.style.backgroundImage = `url(./media/images/cat${targetImageNum}.jpg)`
        newCatDiv.classList.add('fadeIn')

        display.firstChild.classList.remove('fadeIn')
        display.firstChild.classList.add('fadeOut')

        while (display.firstChild) {
            display.removeChild(display.firstChild)
        }
        
        display.appendChild(newCatDiv)
        selectDot(targetImageNum)

        
        
        
    }
}


function selectDot(dotIndex) {
    let dotsArray = [...document.querySelectorAll('.dot')]
    
    dotsArray.forEach((dot) => { dot.classList.remove('selectedDot') })

    let dot = dots.childNodes[dotIndex-1]
    dot.classList.add('selectedDot')
}

export { slide, selectDot };