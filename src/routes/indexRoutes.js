"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_controller_1 = require("../controllers/index.controller");
const express_1 = require("express");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        //EJECUTAR
        this.config();
    }
    config() {
        //RUTA INCIAL 
        this.router.get('/', index_controller_1.indexController.index);
        //this.router.get('/',(req, res) => res.send('Hola!!!'))
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
