import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

import ReadProgres from "./readProgres.js";
import Anotations from "./Anotations.js";
import Score from "./Score.js";

const ReadMaterial = sequelize.define(
    'ReadMaterial',
    {
        ID: {
            type: DataTypes.UUID,
            primaryKey:true
        },
        title: DataTypes.STRING(100),
        author: DataTypes.STRING(50),
        type: DataTypes.STRING,
        image: DataTypes.STRING,
        totalPages: DataTypes.INTEGER
    }
)

ReadMaterial.hasMany(ReadProgres);
ReadMaterial.hasMany(Anotations);
ReadMaterial.hasMany(Score);

export default ReadMaterial;