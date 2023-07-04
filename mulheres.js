const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome:'Katarine Guimarães',
        imagem:'https://avatars.githubusercontent.com/u/138398523?v=4',
        minibio:'Desenvolvedora backend'
    },
    {
        nome:'Nina da Hora',
        imagem:'https://mittechreview.com.br/wp-content/uploads/2020/10/nina_da_hora.jpg',
        minibio:'Hacker antirracista'
    },
    {
        nome:'Caroline Faria',
        imagem:'https://avatars.githubusercontent.com/u/101073597?v=4',
        minibio:'Desenvolvedora Junior'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}
app.use(router.get('/mulheres', mostraMulheres))
app.listen (porta, mostraPorta)