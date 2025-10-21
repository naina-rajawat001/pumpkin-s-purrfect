import { catsData } from "./data.js"

const emotionRadio = document.getElementById("emotion-radios")
const gifOnly = document.getElementById("gifs-only-option")
const getImageBtn = document.getElementById("get-image-btn")
const memeModalInner = document.getElementById("meme-modal-inner")
const memeModalDiv = document.getElementById("meme-modal")
const memeModalCloseBtn = document.getElementById("meme-modal-close-btn")


emotionRadio.addEventListener("change", highlightOption)


getImageBtn.addEventListener("click", renderCat)


memeModalCloseBtn.addEventListener("click", () => {
    memeModalDiv.style.display = "none"
})


function highlightOption(e) {
    const rendaredArray = document.getElementsByClassName("radio")
    for (let character of rendaredArray) {
        character.classList.remove("highlight")
    }
   document.getElementById(e.target.id).parentElement.classList.add("highlight")
}

function renderCat() {
    const catObject = getSingalArray()
    memeModalInner.innerHTML = `<img
                                class = "cat-img"
                                src = "./images/${catObject.image}"
                                alt = "${catObject.alt}"
                                />
                                `
    memeModalDiv.style.display = "flex"
}


function getSingalArray() {
    const selectedEmotionArarys = getMatchingArray()
    if (selectedEmotionArarys.length === 1) {
        return selectedEmotionArarys[0]
    }
    else {
        let randomNumber = Math.floor(Math.random()*selectedEmotionArarys.length)
        return selectedEmotionArarys[randomNumber]
    }
}

function getMatchingArray () {
    if (document.querySelector("input[type='radio']:checked")) {
        const selectedArray = document.querySelector("input[type='radio']:checked").value
        const isGif =  gifOnly.checked
        const matchingArray = catsData.filter((cat) => {
            if (isGif) {
                return cat.emotionTags.includes(`${selectedArray}`) && cat.isGif
            }
            else {
                return cat.emotionTags.includes(`${selectedArray}`)
            }
        }) 

       return matchingArray
      
    }
}



function getEmotionArray (cats) {
    let emotionsArray = []
    for (let cat of cats) {
        for (let emotion of cat.emotionTags) {
            if(!emotionsArray.includes(emotion)) {
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}


function renderEmotion(cats) {
    let emotions = getEmotionArray(cats)
    let htmlContent = "";
    for (let emotion of emotions) {
       htmlContent += `<div class="radio" id="radio">
                            <label 
                            for=${emotion} >
                            ${emotion}</label>
                            <input 
                            id=${emotion} 
                            type="radio"
                            value=${emotion}
                            name="emotions"
                            >
                        </div>`
    }

    emotionRadio.innerHTML = htmlContent
}

renderEmotion(catsData)

























