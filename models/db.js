const Sequelize = require('sequelize');
//Conexãocomobancodedados
const sequelize = new Sequelize('wqnxlawm','wqnxlawm','otnl9cbXm68uLvpDmaPKGJpTiQAxMF6T',{
    host:"motty.db.elephantsql.com",
    port:"5432",
    dialect:'postgres'
});
//Vamosexportarasvariáveis
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
