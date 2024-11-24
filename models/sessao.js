const {sequelizeDb, sequelizeConfig} = require('./database')

const filme = require('./filme')

//CRIANDO A TABELA
const sessao = sequelizeConfig.define(
    'sessao',
    {
        data:{
            type:sequelizeDb.DATE
        },
        horario: {
            type:sequelizeDb.TIME
        }
    }
)


filme.hasMany(sessao,{
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
})

sessao.belongsTo(filme)


sessao.sync()
module.exports = sessao 