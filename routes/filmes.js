const express = require ('express')
const router = express.Router()

//IMPORTANDO AS TABELAS
const sessao = require('../models/sessao')
const filme = require('../models/filme')

//CRIANDO AS ROTAS 

router.post('/store',async(req, res)=>{
    const resultado = await filme.create({
        titulo:req.body.titulo,
        genero:req.body.genero,
        duracao:req.body.duracao,
        classificacao: req.body.classificacao
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
    let resultado = await filme.findAll()

    if (resultado){
        res.render('filme/addFilme', {dados:resultado})
    }

    else{   
        console.log('Não foi possível carregar os dados')
        res.redirect('/') // redirecionando para a página inicial
    }   
})

//5ª ROTA - EXIBIR CADASTRO
router.get('/', async(req, res)=>{
    let resultado = await filme.findAll()
        
    if (resultado){
        res.render('filme/index', {dados:resultado})
    }

    else{   
        console.log('Não foi possível carregar os dados')
        res.redirect('/') // redirecionando para a página inicial
    }   
})

// 4ª ROTA - DELETAR DADOS DA TABELA
// :id significa que iremos passar um valor na rota, ou seja, iremos informar um valor que poderá ser diferente e que será armazenado pela variável :id
router.get('/destroy/:id',async(req, res)=>{
    const resultado = await filme.destroy({
        where:{
            id:req.params.id // estamos recebendo o id via parâmetro que está sendo passado na rota, no caso,é o id que estamos recebendo
        }
    })
    res.redirect('/')
})

module.exports = router