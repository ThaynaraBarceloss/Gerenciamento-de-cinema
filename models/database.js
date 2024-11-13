const sequelizeDb = require("sequelize")
const sequelizeConfig = new sequelizeDb(
    'cinema_db', 
    'root', 
    '',

    {
        dialect:'sqlite',
        storage:'./empresa.sqlite'
    }
)

module.exports = {sequelizeDb, sequelizeConfig}