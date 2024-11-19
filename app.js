const express = require("express")
const handlebars = require("express-handlebars")
const path = require('path')

const app = express()
const porta = 3500

//CONFIGURAR O EXPRESS PARA RECEBER DADOS DO FORMULÁRIO
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// Configuração do CSS
app.use(express.static(path.join(__dirname,'public')))

//CONFIGURAR HANDLEBARS
app.engine('handlebars',handlebars.engine({extended:true}))
app.set('view engine', 'handlebars') // definindo o handlebars como mecanismo de visualização padrão.

// CARREGAR AS PORTAS
const filmeRouter = require('./routes/filmes')
const sessaoRouter = require('./routes/sessao')

// UTILIZANDO AS ROTAS 
app.use('/filme',filmeRouter)
app.use('/sessao',sessaoRouter)

app.get('/',(req, res)=>{
    console.log('funcionando o servidor')
    res.render('home')
})

// EXECUTANDO O SERVIDOR
app.listen(porta, ()=> {
    console.log("Servidor executando na porta", porta)
})