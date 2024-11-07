import { Sequelize } from "sequelize";
import * as url from "url";
import path from "path";


const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

export const sequelize = new Sequelize({
    dialect:"sqlite",
    storage: path.join(__dirname, "/db/tracker.db")
});

try {
    await sequelize.authenticate();
    console.log("Conected");
    
} catch (err) {
    console.log("Error to conect");
    
}