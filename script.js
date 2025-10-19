import { catsData } from "./data.js"

const emotionRadio = document.getElementById("emotion-radios")
const gifOnly = document.getElementById("gifs-only-option")
const getImageBtn = document.getElementById("get-image-btn")
emotionRadio.addEventListener("change", highlightOption)
getImageBtn.addEventListener("click", getMatchingArray)


function highlightOption(e) {
    const rendaredArray = document.getElementsByClassName("radio")
    for (let character of rendaredArray) {
        character.classList.remove("highlight")
    }
   document.getElementById(e.target.id).parentElement.classList.add("highlight")
}


function getEmotionArray (cats) {
    let emotionsArray = []
    for (let cat of cats) {
        for (let emotion of cat.emotionTags) {
            emotionsArray.push(emotion)
        }
    }
    return emotionsArray
}


function eliminateEmotion(cats) {
    let emotionArray = getEmotionArray(cats)
    let eliminatedEmotion = [];
    for (let emotion of emotionArray) {
        if (!eliminatedEmotion.includes(emotion)) {
            eliminatedEmotion.push(emotion)
        }
    } 
    return eliminatedEmotion
}


function renderEmotion(cats) {
    let emotions = eliminateEmotion(cats)
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


function getMatchingArray () {
    if (document.querySelector("input[type='radio']:checked")) {
        const selectedArray = document.querySelector("input[type='radio']:checked").value
        const isGif =  gifOnly.checked
        const matchingArray = catsData.filter((cat) => {
            if (isGif) {
                console.log( cat.emotionTags.includes(`${selectedArray}`) && cat.isGif)
                return cat.emotionTags.includes(`${selectedArray}`) && cat.isGif
            }
            else {
                console.log( cat.emotionTags.includes(`${selectedArray}`))
                return cat.emotionTags.includes(`${selectedArray}`)
            }
        })
    }
}





renderEmotion(catsData);
























