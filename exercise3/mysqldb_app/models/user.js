import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from '../dbConnect.js'

//const sequelizeInstance = sequelize.Sequelize;
class User extends Model { }

// Sequelize will create this table if it doesn't exist on startup
User.init({
    userId: { type: DataTypes.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true },
    userName: {type: DataTypes.STRING, allowNull: false, required: true},
    emailId: { type: DataTypes.STRING, allowNull: false, required: true,unique: true},
    password: {type: DataTypes.STRING, allowNull: false, required: true},
    createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
},
    {
        sequelize, modelName: 'users', // use lowercase plural format 
        timestamps: true, freezeTableName: true
    }
)
export default User;