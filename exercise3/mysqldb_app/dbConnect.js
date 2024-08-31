import {dbConfig} from './config.js'
import Sequelize from 'sequelize';

// Sequelize is a package that abstracts out the need to write
// SQL queries, relying instead on their models to do it for you
const sequelize = new Sequelize(
    dbConfig.DB_NAME,
    dbConfig.DB_USER,
    dbConfig.DB_PASSWORD, {
    host: dbConfig.DB_HOST,
    dialect: 'mysql'
});

const connectMysql = async () => {
    /*console.log(`*************DB_NAME: ${dbConfig.DB_NAME}`);
    console.log(`DB_USER: ${dbConfig.DB_USER}`);
    console.log(`DB_PASSWORD: ${dbConfig.DB_PASSWORD}`);
    console.log(`DB_HOST: ${dbConfig.DB_HOST}`);*/
    try {
        await sequelize.authenticate();
        console.log(`Successful connection to MySQL Database ${dbConfig.DB_NAME}`);
    } catch (error) {
        console.error('Unable to connect to MySQL database:', error);
        process.exit(1);
    }
}

connectMysql();

export default sequelize;