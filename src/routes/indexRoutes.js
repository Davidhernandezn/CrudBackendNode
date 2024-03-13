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
        //RUTAS  
        this.router.get('/', index_controller_1.indexController.list);
        this.router.post('/registrar', index_controller_1.indexController.create);
        this.router.put('/actualizar/:id', index_controller_1.indexController.update);
        this.router.delete('/eliminar/:id', index_controller_1.indexController.delete);
        //this.router.post('/', indexController.index);
        //this.router.get('/',(req, res) => res.send('Hola!!!'))
        //this.router.get('/:id', indexController.getOne);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
