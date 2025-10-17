import { catsData } from "./data.js"


function getEmotionArray (data) {
    let emotionArray = []
    for (let cat of data) {
        for (let emotion of cat.emotionTags) {
            emotionArray.push(emotion)
        }
    }
    console.log(emotionArray)
    return emotionArray
   
}

getEmotionArray(catsData)

