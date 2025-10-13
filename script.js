import { catsData } from "/data.js";
const getImgBtn = document.getElementById("get-image-btn")
const emotionDiv = document.getElementById("emotion-radios")
const memeInner = document.getElementById("meme-modal-inner");

function eleminateEmotions(arr) {
    let emotionArray = [];
    for (let character of arr) {
        for (let emotion of  character.emotionTags) {
            if (!emotionArray.includes(emotion)) {
                emotionArray.push(emotion)
            }
        }
    }
    return emotionArray

}

function renderEmotionsOnPage(arr) {
    const emotions = eleminateEmotions(arr)
    let htmlStr = ""
    for (let char of emotions) { 
        htmlStr += `<div class="radio">
                                <label for="${char}">${char}</label>
                                <input type="radio"
                                        name="emotion"
                                        value ="${char}"
                                        id="${char}"
                                        />
                            </div>` 
    }

    emotionDiv.innerHTML = htmlStr;
}

renderEmotionsOnPage(catsData);

emotionDiv.addEventListener("change", highlightCheckedOption)

function highlightCheckedOption(e) {
    let radioArray = document.getElementsByClassName("radio");
    for (let radio of radioArray) {
        radio.classList.remove("highlight")
    }
    document.getElementById(e.target.id).parentElement.classList.add("highlight");
}


getImgBtn.addEventListener("click", getMatchingCatsArray)


function getMatchingCatsArray () {
    if (document.querySelector('input[type="radio"]:checked')) {
        const selectedBtn = document.querySelector('input[type="radio"]:checked')
        const isGif = document.getElementById("gifs-only-option").checked
        const getSelectedEmotionArray = catsData.filter((cat) => {
            if (isGif){
                return cat.emotionTags.includes(selectedBtn.value) && cat.isGif
            }
            else {
                return cat.emotionTags.includes(selectedBtn.value)
            }
        })
        return getSelectedEmotionArray
    }
  
}


function getSingleCatObject() {
    const catsArray = getMatchingCatsArray()
    if (catsArray.lenght === 1) {
        return catsArray[0]
    }
    else {
        let random = Math.floor(Math.random()*catsArray.length)
        return catsArray[random]
    }
}

function renderCat() {
    const catObject = getSingleCatObject()
    const memeInner = `<img
                        class="cat-img"
                        src="/images/${catObject.image}
                        alt=${catObject.alt.upperCase()}
                        >`  
                              
}
