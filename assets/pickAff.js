const aboutAff = document.querySelector('.aboutAff')
window.onload = function loadAboutAff () {
    aboutAff.style.display = "flex"
}
const CLOSE_BTN = document.querySelector('.closeBtn')
CLOSE_BTN.addEventListener('click',() => {
    aboutAff.style.display = "none"
})
const START_BTN =document.querySelector(".startBtn")
const PICK_BTN_LOVE = document.querySelector('#loveBtn')
const PICK_BTN_HEALTH = document.querySelector('#healthBtn')
const PICK_BTN_SUCESS = document.querySelector('#sucessBtn')
const PICK_BTN_WEALTH = document.querySelector('#wealthBtn')
const PICK_BTN_CREATE = document.querySelector("#createBtn")


PICK_BTN_LOVE.addEventListener('click',(event) => {
    var counter = event.detail
    START_BTN.addEventListener('click',() => {
        if(counter == 1) {
            location.href = "loveAff.html"
        }
    
    })
})

PICK_BTN_HEALTH.addEventListener('click',(event) => {
    var counter = event.detail
    START_BTN.addEventListener('click',() => {
        if(counter == 1) {
            location.href = "healthAff.html"
        }
    
    })
})

PICK_BTN_SUCESS.addEventListener('click',(event) => {
    var counter = event.detail
    START_BTN.addEventListener('click',() => {
        if(counter == 1) {
            location.href = "sucessAff.html"
        }
    
    })
})

PICK_BTN_WEALTH.addEventListener('click',(event) => {
    var counter = event.detail
    START_BTN.addEventListener('click',() => {
        if(counter == 1) {
            location.href = "wealthAff.html"
        }
    
    })
})

PICK_BTN_CREATE.addEventListener('click',(event) => {
    var counter = event.detail
    START_BTN.addEventListener('click',() => {
        if(counter == 1) {
            location.href = "createAff.html"
        }
    
    })
})

