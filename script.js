const xButton = document.querySelector('.xOption')
const oButton = document.querySelector('.oOption')
const reset = document.querySelector('.reset')

let container = document.querySelector('.container')
let boxes = document.querySelectorAll('.box')
// let box1 = document.querySelector('#box0')
// let box2 = document.querySelector('#box1')
// let box3 = document.querySelector('#box2')
// let box4 = document.querySelector('#box3')
// let box5 = document.querySelector('#box4')
// let box6 = document.querySelector('#box5')
// let box7 = document.querySelector('#box6')
// let box8 = document.querySelector('#box7')
// let box9 = document.querySelector('#box8')

let clicked = ['', '', '','', '', '','', '', '']

xButton.addEventListener('click' , function() {
    xButton.innerText = 'X is playing'
    xButton.style.backgroundColor = 'green'
    container.addEventListener('click', checkBoxesX)
})

oButton.addEventListener('click' , function() {
    oButton.innerText = 'O is playing'
    oButton.style.backgroundColor = 'red'
    container.addEventListener('click', checkBoxesO)
})
    
function takeInput(input) {
    if (input = xButton) {
        this.style.backgroundColor = 'green'

    } else if (input = oButton) {
        this.style.backgroundColor = 'red'
    }
}

function checkBoxesX(e) {
        // e = e || window.event;
        var target = e.target 
        console.log(target)
        if (target.innerText === '') {
        target.style.backgroundColor = 'green'
        target.innerText = 'X'
        xButton.innerText = 'Choose X'
        xButton.style.backgroundColor = 'grey'
        } else {
            alert('Y are you marking here? Pick another spot')
        }
    }
function checkBoxesO(e) {
    // e = e || window.event;
    var target = e.target 
    console.log(target)
    if (target.innerText === '') {
    target.style.backgroundColor = 'red'
    target.innerText = 'O'
    oButton.innerText = 'Choose O'
    oButton.style.backgroundColor = 'grey'
    } else {
        alert('X marks the spot, pick another')
    }
}



// box1.addEventListener('click', takeInput)

// box1.addEventListener('click', function() {
//     this.style.backgroundColor = 'red'
// })

function refreshPage() {
    window.location.reload(true)
}

reset.addEventListener('click', refreshPage)