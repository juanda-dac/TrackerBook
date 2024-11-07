import { Router } from "express";
import { v4 } from "uuid";
import User from "../models/User.js";

import { passwordHash, checkPassword } from "../libs/password.js";
import { userExists } from "../middlewares/user.js";

const authRoutes = Router();

authRoutes.get("/register", userExists, (req, res) => {
    return res.render("register")
});

authRoutes.get("/login", userExists, (req, res) => {
    return res.render("login");
})



authRoutes.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    const uuid = v4();

    const newUser = await User.create({
        ID: uuid,
        name,
        email,
        password: await passwordHash(password)
    });

    await newUser.save();

    return res.redirect("/auth/login")
});

authRoutes.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({
        where: {
            email
        }
    })

    if(!user){
        return res.send("Datos incorrectos");
    }

    const mathPasswd = await checkPassword(password, user.password);
    if(!mathPasswd) {
        return res.redirect("/auth/login")
    }

    req.session.userId = user.ID;
    
    
    return res.redirect("/")
    
})

export default authRoutes;