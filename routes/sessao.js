const express = require ('express')
const router = express.Router()

//IMPORTANDO AS TABELAS
const sessao = require('../models/sessao')
const filme = require('../models/filme')


router.post('/store',async(req, res)=>{
    const resultado = await sessao.create({
        titulo:req.body.titulo,
        genero:req.body.genero,
        duracao:req.body.duracao,
        data: req.body.data,
        classificacao: req.body.classificacao,
        filmeId:req.body.filme // Esse campo é a chave estrangeira
    })

    if(resultado){
        res.redirect('/')
    }
    else(
        res.json({erro:"Os dados não foram cadastrados no banco"})
    )
})

//5ª ROTA - EXIBIR FORMULÁRIO DE CADASTRO
router.get('/create', async(req, res)=>{
    let resultado = await sessao.findAll()

    if (resultado){
        res.render('sessao/cadastro', {dados:resultado})
    }

    else{   
        console.log('Não foi possível carregar os dados')
        res.redirect('/') // redirecionando para a página inicial
    }   
})

//3ª ROTA -  CONSULTAR DADOS DA TABELA
router.get('/',async(req, res)=>{
    const resultado = await sessao.findAll({include:filme}) // o include\: filmes é como o sequelize faz para poder realizar consultas com join

    if(resultado){  // if indica condição 
        console.log(resultado)
        res.render('sessao/index', {dados:resultado})
    }
    else{ // else
        console.log("Não foi possível exibir os dados")
    }
})

module.exports = router