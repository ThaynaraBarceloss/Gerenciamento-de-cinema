const {sequelizeDb, sequelizeConfig} = require('./database')

//CRIANDO A TABELA
const sessao = sequelizeConfig.define(
    'sessao',
    {
        data:{type:sequelizeDb.DATE},
        horario: {type:sequelizeDb.TIME}
    }
)

sessao.sync()
module.exports = sessao 