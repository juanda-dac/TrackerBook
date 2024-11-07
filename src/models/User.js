import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";
import ReadMaterial from "./ReadMaterial.js";
import Anotations from "./Anotations.js";
import Score from "./Score.js";

const User = sequelize.define(
    'User',
    {
        ID: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        name: DataTypes.STRING(10),
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }
)

User.hasMany(ReadMaterial);
User.hasMany(Anotations);
User.hasMany(Score);

export default User;