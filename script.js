import { catsData } from "/data.js";
const getImgBtn = document.getElementById("get-image-btn")
const emotionDiv = document.getElementById("emotion-radios")


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
    const selectedBtn = document.querySelector('input[type="radio"]:checked')
    const isGif = document.getElementById("gifs-only-option").checked
   if (selectedBtn) {
    console.log(selectedBtn.value)
   }
   else {
    console.log("nothing is selected")
   }
   if (isGif) {
        console.log("here is your gif")
   }
   else {
        console.log("you don't have selected gif option ")
   }
}

let sample = [1, 3, 34, 235,654, 76, 35, 66, 89]
const passedsample = sample.filter((age) => {
    let arrayitem = age >34
    return arrayitem
})














