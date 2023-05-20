require('dotenv').config()
const express = require('express')
const app = express()
//middleware
app.use(express.json())

const { OPEN_API_KEY, PORT } = process.env

app.get('/hello', (req, res) => {
    res.json({mensagem: "Hello direto do Back End"})
})

const porta = PORT || 4000
app.listen(porta, () => console.log (`Servidor Ok. Porta ${porta}`))