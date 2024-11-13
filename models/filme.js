const {sequelizeDb, sequelizeConfig} = require('./database')

const sessoes = require('./sessoes')

const  filme = sequelizeConfig.define(
    'filmes', 
    {
        Titulo:{type:sequelizeDb.STRING},
        Genero:{type:sequelizeDb.STRING},
        Duração:{type:sequelizeDb.TIME},
        Classificação:{type:sequelizeDb.INTEGER}
    }
)

sessoes.hasMany(filme,{
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
})

sessoes.belongsTo(filme)

filme.sync()
module.exports = filme
