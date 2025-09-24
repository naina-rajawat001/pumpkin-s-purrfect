const emotionDiv = document.getElementById("emotion-radios")
import { catsData } from "./data.js"



function getEmotionsArray(cats){
    const emotionsArray = []
    for (let cat of cats){
        for (let emotion of cat.emotionTags){
            emotionsArray.push(emotion)
        }
    }
    return emotionsArray
}

function renderEmotionsRadios(cats){
    const emotions = getEmotionsArray(cats)
    console.log(emotions)
    let feedHtml = "";
    for(let emotion of emotions) {
        feedHtml += `<div class = "radio">
                        <label for="${emotion}">${emotion}</label>
                        <input type="radio"
                        id="${emotion}" 
                        name = "radio-choice"
                        value = "${emotion}">
                    </div>`

    }
    emotionDiv.innerHTML = feedHtml;
}

renderEmotionsRadios(catsData);






