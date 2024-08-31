
import Sequelize from 'sequelize';

// Sequelize is a package that abstracts out the need to write
// SQL queries, relying instead on their models to do it for you
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

const connectMysql = async () => {
    console.log(`*************DB_NAME: ${process.env.DB_NAME}`);
    console.log(`DB_USER: ${process.env.DB_USER}`);
    console.log(`DB_PASSWORD: ${process.env.DB_PASSWORD}`);
    console.log(`DB_HOST: ${process.env.DB_HOST}`);
    try {
        await sequelize.authenticate();
        console.log(`Successful connection to MySQL Database ${process.env.DB_NAME}`);
    } catch (error) {
        console.error('Unable to connect to MySQL database:', error);
        process.exit(1);
    }
}

connectMysql();

export default sequelize;