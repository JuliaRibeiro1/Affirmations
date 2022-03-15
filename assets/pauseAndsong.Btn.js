const soundBtn = document.querySelector(".songBtn")
        const playSong = document.querySelector(".song")   
        const pauseBtn = document.querySelector('.pauseImg')

    pauseBtn.addEventListener('click',() => {
        if (document.querySelector('.pauseImg').getAttribute("src") ==="playBtn.png") {
            document.querySelector(".pauseImg").setAttribute('src',"pauseImg.png")
            document.querySelector(".affirmations").style.display = "flex"
             
        }      
        else {
            document.querySelector(".pauseImg").setAttribute('src',"playBtn.png")
            document.querySelector(".songImg").setAttribute('src',"noSound.png")
            playSong.pause()
            document.querySelector(".affirmations").style.display = "none"

        }
    })
    
    soundBtn.addEventListener('click',() => {
        if (document.querySelector(".songImg").getAttribute("src") === "soundbtn.png") {
            document.querySelector(".songImg").setAttribute('src',"noSound.png")
            playSong.pause()
        }
        else {
            document.querySelector(".songImg").setAttribute('src',"soundbtn.png")
            playSong.play()
            
        }
    })