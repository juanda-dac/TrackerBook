import { config } from "dotenv";
import express from "express";
import session from "express-session";

import { sequelize } from "./db.js";

import * as url from "url";
import path from "path";

/** Import Routes */
import indexRoutes from "./routes/index.routes.js";
import authRoutes from "./routes/auth.routes.js";
import bookRoutes from "./routes/book.routes.js";

config();

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const port = process.env.PORT || 3000;
const app = express();

await sequelize.sync({ alter:true });

app.set('views' , path.join(__dirname, '/views'))
app.set('view engine', 'ejs');

app.set('trust proxy', 1);
app.use(session({
    secret: 'secret key',
    resave:false,
    saveUninitialized: true

}))
app.use(express.urlencoded({ extended:false }));

app.use("/", indexRoutes);
app.use("/auth", authRoutes);
app.use("/book", bookRoutes);



app.listen(port, ()=> {
    console.log(`App at port ${port}`);
})
