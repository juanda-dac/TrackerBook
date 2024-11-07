import { Router } from "express";

const indexRoutes = Router();

indexRoutes.get("/", (req, res) => {
    
    return res.render("index")
})

export default indexRoutes;