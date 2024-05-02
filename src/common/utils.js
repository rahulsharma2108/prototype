export const API_BASE_URL = "/prototype"
export const API_HOST = "https://emailpitchperfect.pythonanywhere.com/v1/campaign"
export const DEFAULT_CAMPAIGN = "a0001"

export const SERVER_HOST = "https://emailpitchperfect.pythonanywhere.com"

export const getImageUrl = (imgUrl)=>{
    if(imgUrl)
        return SERVER_HOST+imgUrl
    return ''
}