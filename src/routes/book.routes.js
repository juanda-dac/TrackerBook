import { Router } from "express";
import { userExists } from "../middlewares/user.js";

const bookRoutes = Router();

bookRoutes.get("/", userExists, (req, res) => {
    return res.render("books")
})

bookRoutes.get("/new", userExists, (req, res) => {
    return res.render("newBook");
})

export default bookRoutes;