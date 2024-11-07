import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

const ReadProgres = sequelize.define(
    'ReadProgres',
    {
        ID: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        readedPages: DataTypes.INTEGER
    }
);


export default ReadProgres;