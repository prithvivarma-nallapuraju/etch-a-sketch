let color = 'black'
let clicked = true

function populateBoardSize(size) {
    let board = document.querySelector('.board')
    board.style.gridTemplateColumns = `repeat(${size},1fr)`
    board.style.gridTemplateRows = `repeat(${size},1fr)`
    let squares = board.querySelectorAll('div')
    squares.forEach((div)=> div.remove())
    let amount = size*size;
    for (let i=0;i<amount;i++) {
        let square = document.createElement('div')
        square.addEventListener('mouseover', colorSquare)
        square.style.backgroundColor = "white"
        board.insertAdjacentElement('beforeend',square)
    }
}

function changeSize(input) {
    if(input>=2 && input<= 100) {
        populateBoardSize(input)
    }else {
        swal({
            title: "Please Select the Size between 2 and 100",
            icon: "error",
            button: "Refresh",
          });
    }
}

function colorSquare() {
    if(clicked) {
        if(color === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }else {
            this.style.backgroundColor = color
        }
    }
}

function changeColor(choice) {
    color = choice
}

function reset() {
    let board = document.querySelector('.board')
    let squares = board.querySelectorAll('div')
    squares.forEach((div)=> div.style.backgroundColor = 'white')
}


document.querySelector('body').addEventListener('click',(e)=>{
    let modeSelect = document.querySelector('.mode')
    if(e.target.tagName != 'BUTTON' && e.target.tagName != 'INPUT') {
        clicked = !clicked
        if(clicked) {
           modeSelect.textContent = 'Mode: Editable'
           modeSelect.style.color = 'black'
        }else {
            modeSelect.textContent = 'Mode: Not Editable'
            modeSelect.style.color = 'Red'
        }
   } 
})


document.querySelector('.swal-button').addEventListener('click', () => {
    window.location.reload(true)  
  })