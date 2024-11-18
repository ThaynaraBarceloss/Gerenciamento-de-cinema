const sequelizeDb = require("sequelize")
const sequelizeConfig = new sequelizeDb(
    'cinema_db', 
    'root', 
    '',

    {
        dialect:'sqlite',
        storage:'./cinema.sqlite'
    }
)

module.exports = {sequelizeDb, sequelizeConfig}