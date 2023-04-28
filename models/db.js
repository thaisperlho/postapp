const Sequelize = require('sequelize');
//Conexãocomobancodedados
const sequelize = new Sequelize('epiz_34100740_postapp','epiz_34100740','1234@',{
    host:"sql304.epizy.com",
    port:"3306",
    dialect:'mysql'
});
//Vamosexportarasvariáveis
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}