import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

const Score = sequelize.define(
    'Score',
    {
        ID:{
            type: DataTypes.UUID,
            primaryKey:true
        },
        stars: DataTypes.INTEGER
    }
)

export default Score;