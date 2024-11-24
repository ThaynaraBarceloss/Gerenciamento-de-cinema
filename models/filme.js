const cinema_db = require('./database')// Importando o banco de dados


//CRIANDO A TABELA
const filme = cinema_db.sequelizeConfig.define(
    'filme',// o nome da tabela
    {
        titulo:{
            type:cinema_db.sequelizeDb.STRING
        },
        genero:{
            type:cinema_db.sequelizeDb.STRING
        },
        duracao:{
            type:cinema_db.sequelizeDb.TIME
        },
        classificacao:{
            type:cinema_db.sequelizeDb.INTEGER
        }
    }
)
/*
Não iremos criar os campos 'id_funcionário' e a chave estrangeira, pois o sequelize irá criar esses campos automaticamente, ou seja, tanto a chave primária quanto chave estrangeira são criados pelo sequelize
*/



filme.sync()
module.exports = filme
