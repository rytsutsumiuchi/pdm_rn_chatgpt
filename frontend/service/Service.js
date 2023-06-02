import axios from 'axios'

const endpointSentimentos = "sentimentos/"

const base = axios.create({
    baseURL: 'http://localhost:4000/'
})

const detectarSentimento = (frase) => {
    return base.post(
        endpointSentimentos,
        frase,
        {headers: {'Content-Type': 'application/json'}} 
    )
}


export {detectarSentimento}