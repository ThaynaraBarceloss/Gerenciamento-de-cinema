const express = require("express")
const handlebars = require("express-handlebars")

const app = express()
const porta = 3500

//CONFIGURAR O EXPRESS PARA RECEBER DADOS DO FORMULÁRIO
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//CONFIGURAR HANDLEBARS
app.engine('handlebars',handlebars.engine({extended:true}))
app.set('view engine', 'handlebars') // definindo o handlebars como mecanismo de visualização padrão.

// CARREGAR AS PORTAS
const cinemaRouter = require('./routes/cinema')

// UTILIZANDO AS ROTAS 
app.use('/sessoes',cinemaRouter)

app.get('/',(req, res)=>{
    console.log('funcionando o servidor')
    res.send("<h1>Tudo funcionando</h1>")
})

// EXECUTANDO O SERVIDOR
app.listen(porta, ()=> {
    console.log("Servidor executando na porta", porta)
})