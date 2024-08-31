import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from '../dbConnect.js'

//const sequelizeInstance = sequelize.Sequelize;
class Post extends Model { }

// Sequelize will create this table if it doesn't exist on startup
Post.init({
    postId: { type: DataTypes.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true },
    postTitle: {type: DataTypes.STRING, allowNull: false, required: true},
    postDescription: {type: DataTypes.STRING},
    createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
},
    {
        sequelize, modelName: 'posts', // use lowercase plural format 
        timestamps: true, freezeTableName: true
    }
)
export default Post;