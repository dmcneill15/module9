import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from '../dbConnect.js'

//const sequelizeInstance = sequelize.Sequelize;
class Comment extends Model { }

// Sequelize will create this table if it doesn't exist on startup
Comment.init({
    commentId: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
    commentContent: { type: DataTypes.STRING },
    postId: { type: DataTypes.INTEGER, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
},
    {
        sequelize, modelName: 'posts', // use lowercase plural format 
        timestamps: true, freezeTableName: true
    },
)
export default Comment;