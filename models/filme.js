const {sequelizeDb, sequelizeConfig} = require('./database')

const sessao = require('./sessao')

const  filme = sequelizeConfig.define(
    'filmes', 
    {
        titulo:{type:sequelizeDb.STRING},
        genero:{type:sequelizeDb.STRING},
        duracao:{type:sequelizeDb.TIME},
        classificacao:{type:sequelizeDb.INTEGER}
    }
)

filme.hasMany(sessao,{
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
})

sessao.belongsTo(filme)

filme.sync()
module.exports = filme
