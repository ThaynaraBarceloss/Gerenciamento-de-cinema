const sequelizeDb = require("sequelize")
const sequelizeConfig = new sequelizeDb(
    'cinema_db',//O nome do banco de dados
    'root',// informando o nome de usuário do banco
    '', // informando asenha do banco
    {
        dialect:'sqlite', 
        storage:'./gerenciamentoCinema.sqlite'// nome do arquivo onde será salvo o nosso banco
    }
)

module.exports = {sequelizeDb, sequelizeConfig}