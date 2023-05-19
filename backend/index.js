const express = require('express')
const app = express()
//middleware
app.use(express.json())

app.get('/hello', (req, res) => {
    res.json({mensagem: "Hello direto do Back End"})
})

const porta = 4000
app.listen(porta, () => console.log (`Servidor Ok. Porta ${porta}`))