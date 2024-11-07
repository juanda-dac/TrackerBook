import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

const Anotations = sequelize.define(
    'Anotations',
    {
        ID: {
            type:DataTypes.UUID,
            primaryKey:true,
        },
        text: DataTypes.TEXT,
        type:DataTypes.STRING
    }
)



export default Anotations;