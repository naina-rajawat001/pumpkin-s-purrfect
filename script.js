import { catsData } from "/data.js";
const emotionDiv = document.getElementById("emotion-radios")


function eleminateEmotions(arr) {
    let emotionArray = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].emotionTags.length; j++) {
            if (!emotionArray.includes(arr[i].emotionTags[j])) {
                emotionArray.push(arr[i].emotionTags[j])
            }
        }
    }
    return emotionArray

}

function renderEmotionsOnPage(arr) {
    const emotions = eleminateEmotions(arr)
    let htmlStr = ""
    for (let i = 0; i < emotions.length; i++) { 
        htmlStr += `<div class="radio">
                                <label for="${emotions[i]}">${emotions[i]}</label>
                                <input type="radio"
                                        name="emotion"
                                        value ="${emotions[i]}"
                                        id="${emotions[i]}"
                                        />
                            </div>` 
    }

    emotionDiv.innerHTML = htmlStr;
}

renderEmotionsOnPage(catsData);

emotionDiv.addEventListener("change", highlightCheckedOption)

function highlightCheckedOption(e) {
    let previousId = e.target.id
   document.getElementById(previousId).parentElement.classList.add("highlight");
}








