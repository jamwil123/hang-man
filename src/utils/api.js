import axios from 'axios'


const myApi = axios.create({
    baseURL: 'https://random-word-api.herokuapp.com'
})

export const randomWordGen = () => {
return myApi.get('/word?number=1').then((res)=>{
    return res.data[0]
})
}