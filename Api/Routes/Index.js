const express = require("express")
const Router = express.Router();
const userRoutes = require("./Users")
const movieRoutes = require("./Movies")
const authroutes = require("./auth")
const listRoutes = require("./Lists")



module.exports = () => {
    Router.use("/users",userRoutes)
    Router.use("/auth",authroutes)
    Router.use("/movie",movieRoutes)
    Router.use("/lists",listRoutes)
    return Router;
}