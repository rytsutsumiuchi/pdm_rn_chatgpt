require('dotenv').config()
const express = require('express')
const { Configuration, OpenAIApi } = require ('openai')
const { OPENAI_API_KEY, PORT } = process.env

const configuration = new Configuration({
    apiKey: OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

const app = express()
//middleware
app.use(express.json())


app.get('/hello', (req, res) => {
    res.json({mensagem: "Hello direto do Back End"})
})

app.post('/sentimentos', (req, res) => {
    const { texto } = req.body
    openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `Diga qual o sentimento associado ao seguinte texto usando apenas uma palavra (Positivo, Negativo ou Neutro): ${texto}`,
        max_tokens: 20
    })
    .then(chatGPTResponse => {
        console.log(chatGPTResponse.data.choices[0].text)
        res.end()
    })
})

const porta = PORT || 4000

app.listen(porta, () => console.log (`Servidor Ok. Porta ${porta}`))